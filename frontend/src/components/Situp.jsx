import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const Situp = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState('start');
  const [feedback, setFeedback] = useState('Let’s get started! Engage your core and maintain proper form.');

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

  // Detect poses and give feedback
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
          const hip = [keypoints[11].x, keypoints[11].y]; 
          const knee = [keypoints[13].x, keypoints[13].y]; 
          const ankle = [keypoints[15].x, keypoints[15].y]; 

          const angle = calculateAngle(hip, knee, ankle);

          ctx.font = '20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(`${Math.round(angle)}°`, knee[0], knee[1]);

          // Provide feedback based on sit-up motion
          let newFeedback = feedback;
          if (angle > 150) {
            setStage('down');
            newFeedback = 'Lower your body slowly to complete the rep.';
          } else if (angle < 50 && stage === 'down') {
            setStage('up');
            setCounter((prevCounter) => prevCounter + 1);
            newFeedback = 'Good job! Now lower back down with control.';
          } 
          // Incorrect posture cases
          else if (angle > 120 && stage === 'up') {
            newFeedback = 'Incorrect posture! Avoid arching your lower back too much.';
          } else if (angle < 30 && stage === 'down') {
            newFeedback = 'Incorrect posture! Keep your back straight while lowering.';
          } else if (angle > 50 && angle < 150 && stage === 'up') {
            newFeedback = 'Maintain control while lowering your body.';
          }

          if (newFeedback !== feedback) {
            setFeedback(newFeedback);
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
    <div className="situp-container">
      <h1 className="situp-title">SIT-UPS</h1>
      <Webcam ref={webcamRef} className="situp-webcam" />
      <canvas ref={canvasRef} className="situp-canvas" />

      <div className="situp-feedback-box">
        <p>{feedback}</p>
      </div>

      <div className="situp-counter-box">
        <p>Reps: <span className="situp-counter">{counter}</span></p>
        <p>Stage: <span className="situp-stage">{stage}</span></p>
      </div>
    </div>
  );
};

export default Situp;
