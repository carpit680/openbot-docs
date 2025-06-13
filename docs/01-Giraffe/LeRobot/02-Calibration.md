---
id: lerobot_calibration
title: Calibration
sidebar_label: Calibration
description: Calibration scripts for aligning joint angles of the SO-100 follower arm.
keywords:
  - Giraffe
  - Giraffe v1.1 Kit
  - Calibration
  - OpenBot
  - OpenBot Giraffe
  - OpenBot Giraffe v1.1 Kit
  - Open Source
  - Robotic Arm
  - Leader-Follower
  - LeRobot
  - Robotics
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
---

<!-- @format -->

You'll need to calibrate your robot to ensure that the leader and follower arms have the same position values when they are in the same physical position.
The calibration process is very important because it allows a neural network trained on one robot to work on another.

### Manual calibration of follower arm

Make sure both arms are connected and run this script to launch manual calibration:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

the script will prompt you to move the arm to three required position then press enter:
<div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>

  <div style={{ textAlign: "center" }}>
    <img src="/img/follower_zero.jpeg" alt="Zero Position" style={{ width: "100%", maxWidth: "350px" }} />
    <p>*Zero position*</p>
  </div>

  <div style={{ textAlign: "center" }}>
    <img src="/img/follower_rotated.jpeg" alt="Rotated Position" style={{ width: "100%", maxWidth: "350px" }} />
    <p>*Rotated position*</p>
  </div>

  <div style={{ textAlign: "center" }}>
    <img src="/img/follower_rest.jpeg" alt="Rest Position" style={{ width: "100%", maxWidth: "350px" }} />
    <p>*Rest position*</p>
  </div>

</div>

Do as instructued for the three position and follower calibration will be done.
