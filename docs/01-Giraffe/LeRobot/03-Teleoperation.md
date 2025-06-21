---
id: lerobot_teleoperation
title: Teleoperation
sidebar_label: Teleoperation
description: Real-time control of the SO-100 follower arm using LeRobot's teleoperation interface.
keywords:
  - Teleoperation
  - Giraffe
  - OpenBot
  - LeRobot
  - Robotic Arm
  - Real-Time Control
  - Follower Arm
  - Open Source Robotics
---

<!-- @format -->

1. **Simple Teleoperation**

   ```bash
   python -m lerobot.teleoperate \
      --robot.type=giraffe_follower \
      --robot.port=/dev/tty.usbmodem58760431541 \
      --robot.id=my_follower_arm \
      --teleop.type=giraffe_leader \
      --teleop.port=/dev/tty.usbmodem58760431551 \
      --teleop.id=my_leader_arm
   ```

   The `teleoperate` command will automatically:

- Identify any missing calibrations and initiate the calibration procedure.
- Connect the robot and teleop device, and start teleoperation.

2. **Teleop with Camera Feeds**

   ```bash
   python -m lerobot.teleoperate \
    --robot.type=giraffe_follower \
    --robot.port=/dev/tty.usbmodem58760431541 \
    --robot.id=my_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \
    --teleop.type=giraffe_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \
    --teleop.id=my_leader_arm \
    --display_data=true
   ```

   You will now see live video from both follower and leader camera streams, with joint states overlaid via `rerun`.


> Refer to [Eye in Hands](/docs/Giraffe/LeRobot/lerobot_grippercam) to setup the Camera.
