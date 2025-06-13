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

### Teleoperation

**Basic Control:**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

**With Live Camera Feed (after setup):**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --control.type=teleoperate
```

> Refer to [Eye in Hands](/docs/Giraffe/LeRobot/lerobot_grippercam) to setup the Camera.
