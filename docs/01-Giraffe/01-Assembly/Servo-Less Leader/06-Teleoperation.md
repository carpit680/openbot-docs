---
id: leader-teleoperation
title: Teleoperation
sidebar_label: Teleoperation
description: Teleoperation instructions for servo-less leader arm to move the Follower Arm.
keywords:
  - Teleoperation
  - Follwer Arm
  - Leader Arm
  - Servo-Less Leader Arm
  - AS5600
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Sardware
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

> **Important:** The following section provides only the teleoperation instructions for the follower arm. All installation, configuration, assembly, and calibration steps are omitted but are needed to move forward so make sure to finish them from GITHUB(Put Link).

1. **Simple Teleoperation**

   ```bash
   python lerobot/scripts/control_robot.py \
     --robot.type=so100 \
     --robot.cameras='{}' \
     --control.type=teleoperate
   ```

   This will start a simple Leader arm based teleoperation session. No camera feeds will be displayed.

2. **Teleop with Camera Feeds**  
   Set up USB webcams by following the [LeRobot Camera Setup Guide](https://github.com/huggingface/lerobot/blob/main/examples/05_use_cameras.md).  
   Then run:

   ```bash
   python lerobot/scripts/control_robot.py \
     --robot.type=so100 \
     --robot.cameras='{"follower_cam": 0, "leader_cam": 1}' \
     --control.type=teleoperate \
     --control.display_data=true
   ```

   You will now see live video from both follower and leader camera streams, with joint states overlaid via `rerun`.

---

## Additional Notes

_(To be filled later.)_

---
