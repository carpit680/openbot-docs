---
id: follower-calibration
title: Calibration
sidebar_label: Calibration
description: Calibration of Follower arm for offsets and slopes.
keywords:
  - Calibration
  - Follower Arm
  - ST3215
  - FeeTech Servo
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

## Calibrate

You'll need to calibrate your robot to ensure that the leader and follower arms have the same position values when they are in the same physical position.
The calibration process is very important because it allows a neural network trained on one robot to work on another.

### Manual calibration of follower arm

You will need to move the follower arm to these positions sequentially:

| 1. Zero position | 2. Rotated position | 3. Rest position |
_[Insert image of all three positions]_

Make sure both arms are connected and run this script to launch manual calibration:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

the script will promt you to move the arm to the required position then press enter, do as instructued for the three position and follower calibration will be done.
