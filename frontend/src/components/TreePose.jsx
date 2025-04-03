import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const YogaPose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [feedback, setFeedback] = useState('Stand straight and lift one leg.');
  const [isHoldingPose, setIsHoldingPose] = useState(false);
  const [counter, setCounter] = useState(0);

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

  const calculateAngle = (a, b, c) => {
    const radians =
      Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
    let angle = Math.abs((radians * 180.0) / Math.PI);
    if (angle > 180.0) angle = 360 - angle;
    return angle;
  };

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

          // Extract keypoints for Tree Pose (Vrikshasana)
          const leftHip = [keypoints[11].x, keypoints[11].y];
          const leftKnee = [keypoints[13].x, keypoints[13].y];
          const leftAnkle = [keypoints[15].x, keypoints[15].y];
          const rightHip = [keypoints[12].x, keypoints[12].y];
          const rightKnee = [keypoints[14].x, keypoints[14].y];
          const rightAnkle = [keypoints[16].x, keypoints[16].y];

          const leftLegAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
          const rightLegAngle = calculateAngle(rightHip, rightKnee, rightAnkle);

          // Tree Pose Validation (One leg must be bent at 40°-70°)
          if ((leftLegAngle > 40 && leftLegAngle < 70) || (rightLegAngle > 40 && rightLegAngle < 70)) {
            setFeedback('Good! Hold the pose.');
            if (!isHoldingPose) {
              setIsHoldingPose(true);
              setTimeout(() => {
                setCounter((prev) => prev + 1);
                setIsHoldingPose(false);
              }, 3000);
            }
          } else {
            setFeedback('Incorrect posture! Bend one leg and place it against the inner thigh.');
            setIsHoldingPose(false);
          }

          // Draw Keypoints
          keypoints.forEach((keypoint) => {
            ctx.beginPath();
            ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
          });

          // Display angles
          ctx.fillStyle = 'white';
          ctx.font = '18px Arial';
          ctx.fillText(`${Math.round(leftLegAngle)}°`, leftKnee[0], leftKnee[1]);
          ctx.fillText(`${Math.round(rightLegAngle)}°`, rightKnee[0], rightKnee[1]);
        }
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      detectPoses();
    }, 100);
    return () => clearInterval(intervalId);
  }, [detector, isHoldingPose]);

  return (
    <div className="yoga-container">
      <h1 className="yoga-title">🌳 Tree Pose (Vrikshasana)</h1>
      <Webcam ref={webcamRef} className="yoga-webcam" />
      <canvas ref={canvasRef} className="yoga-canvas" />

      <div className="yoga-feedback">
        <p>{feedback}</p>
      </div>

      <div className="yoga-counter">
        <p>Holds: <span>{counter}</span></p>
      </div>
    </div>
  );
};

export default YogaPose;
