import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

// Function to speak the feedback text
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1; // Speed of speech
  utterance.pitch = 1; // Pitch of speech
  utterance.volume = 1; // Volume level (0-1)
  window.speechSynthesis.speak(utterance);
};

const NewBicep = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState('start');
  const [feedback, setFeedback] = useState('Let’s get started! Maintain a straight back and full range of motion.');
  const [hand, setHand] = useState('right'); // Default to right hand
  const [reps, setReps] = useState(10); // Default reps
  const [currentReps, setCurrentReps] = useState(0);

  // Load MoveNet Model
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

          // If left hand, change shoulder/elbow/wrist index
          const isLeftHand = hand === 'left';
          if (isLeftHand) {
            shoulder[0] = keypoints[6].x; // Left shoulder
            elbow[0] = keypoints[8].x; // Left elbow
            wrist[0] = keypoints[10].x; // Left wrist
          }

          const angle = calculateAngle(shoulder, elbow, wrist);

          ctx.font = '20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(`${Math.round(angle)}°`, elbow[0], elbow[1]);

          // Provide feedback based on bicep angle
          if (angle > 160) {
            setStage('down');
            setFeedback(`Lower your arm slowly to complete the rep. Using your ${hand} hand.`);
            speak(`Lower your arm slowly to complete the rep. Using your ${hand} hand.`);
          }

          if (angle < 30 && stage === 'down') {
            setStage('up');
            setCounter((prevCounter) => prevCounter + 1);
            setFeedback(`Great job! Now, raise your arm with control.`);
            speak(`Great job! Now, raise your arm with control.`);
          }

          if (angle > 30 && angle < 160 && stage === 'up') {
            setFeedback('Incorrect posture! Ensure your elbow is bending fully.');
            speak('Incorrect posture! Ensure your elbow is bending fully.');
          }

          // Draw keypoints on canvas
          keypoints.forEach((keypoint) => {
            ctx.beginPath();
            ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
          });

          // Switch hands after completing reps
          if (currentReps >= reps) {
            if (hand === 'right') {
              setHand('left');
              setCurrentReps(0);
              setFeedback('Now, let’s work on the left hand.');
              speak('Now, let’s work on the left hand.');
            } else {
              setHand('right');
              setCurrentReps(0);
              setFeedback('Great job! Now, let’s work on the right hand.');
              speak('Great job! Now, let’s work on the right hand.');
            }
          }
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
  }, [detector, stage, hand]);

  const handleRepsChange = (event) => {
    setReps(parseInt(event.target.value, 10));
    setCurrentReps(0);
  };

  return (
    <div className="bicep-container">
      <Webcam ref={webcamRef} className="webcam" />
      <canvas ref={canvasRef} className="canvas" />

      <div className="feedback-box">
        <p>{feedback}</p>
      </div>

      <div className="counter-box">
        <p>Reps: <span className="counter">{counter}</span></p>
        <p>Stage: <span className="stage">{stage}</span></p>
        <p>Current Hand: <span className="hand">{hand}</span></p>
      </div>

      <div className="controls">
        <div>
          <label htmlFor="hand-select">Choose hand: </label>
          <select id="hand-select" value={hand} onChange={(e) => setHand(e.target.value)}>
            <option value="right">Right Hand</option>
            <option value="left">Left Hand</option>
          </select>
        </div>

        <div>
          <label htmlFor="reps">Set reps: </label>
          <input
            type="number"
            id="reps"
            value={reps}
            min="1"
            onChange={handleRepsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBicep;
