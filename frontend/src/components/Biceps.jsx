import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const Bicep = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState('start');
  const [feedback, setFeedback] = useState('Let’s get started! Maintain a straight back and full range of motion.');
  const [lastFeedback, setLastFeedback] = useState('');

  // Load MoveNet model
  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const detectorConfig = {
        modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
      };
      const newDetector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        detectorConfig
      );
      setDetector(newDetector);
    };
    loadModel();
  }, []);

  // Calculate angle between three points
  const calculateAngle = (a, b, c) => {
    const radians =
      Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
    let angle = Math.abs((radians * 180.0) / Math.PI);
    if (angle > 180.0) angle = 360 - angle;
    return angle;
  };

  // Speak feedback using a male voice
  const speakFeedback = (text) => {
    if ('speechSynthesis' in window && text && text !== lastFeedback) {
      const maleVoice = speechSynthesis.getVoices().find(voice =>
        voice.name.toLowerCase().includes('male') || voice.name.includes('Google UK English Male') // Adjust condition for male voice
      );
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = maleVoice || speechSynthesis.getVoices()[0]; // Fallback to default
      utterance.rate = 0.9;
      utterance.pitch = 1.1; // Slightly deeper pitch for male voice
      speechSynthesis.cancel(); // Cancel ongoing speech to avoid overlap
      speechSynthesis.speak(utterance);
      setLastFeedback(text);
    }
  };

  // Detect poses and give feedback on correct/incorrect posture
  const detectPoses = async () => {
    if (webcamRef.current && detector) {
      const video = webcamRef.current.video;
      if (video.readyState === 4) {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        const canvas = canvasRef.current;
        canvas.width = videoWidth;
        canvas.height = videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const poses = await detector.estimatePoses(video);

        if (poses.length > 0) {
          const keypoints = poses[0].keypoints;
          const shoulder = [keypoints[5].x, keypoints[5].y];
          const elbow = [keypoints[7].x, keypoints[7].y];
          const wrist = [keypoints[9].x, keypoints[9].y];

          const angle = calculateAngle(shoulder, elbow, wrist);

          ctx.font = '20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(`${Math.round(angle)}°`, elbow[0], elbow[1]);

          // Provide feedback based on bicep angle
          let newFeedback = feedback;
          if (angle > 160) {
            setStage('down');
            newFeedback = 'Lower your arm slowly to complete the rep.';
          } else if (angle < 30 && stage === 'down') {
            setStage('up');
            setCounter((prevCounter) => prevCounter + 1);
            newFeedback = 'Great job! Now, raise your arm with control.';
          } else if (angle > 30 && angle < 160 && stage === 'up') {
            newFeedback = 'Incorrect posture! Ensure your elbow is bending fully.';
          }

          if (newFeedback !== feedback) {
            setFeedback(newFeedback);
            speakFeedback(newFeedback);
          }

          // Draw keypoints on canvas
          keypoints.forEach((keypoint) => {
            ctx.beginPath();
            ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
          });
        }
      }
    }
  };

  // Run pose detection in a loop
  useEffect(() => {
    const intervalId = setInterval(() => {
      detectPoses();
    }, 100);

    return () => clearInterval(intervalId);
  }, [detector, stage, feedback]);

  return (
    <div className="bicep-container">
      <h1 className="bicep-title">BICEPS </h1>
      <Webcam ref={webcamRef} className="webcam" />
      <canvas ref={canvasRef} className="canvas" />

      <div className="feedback-box">
        <p>{feedback}</p>
      </div>

      <div className="counter-box">
        <p>Reps: <span className="counter">{counter}</span></p>
        <p>Stage: <span className="stage">{stage}</span></p>
      </div>
    </div>
  );
};

export default Bicep;
