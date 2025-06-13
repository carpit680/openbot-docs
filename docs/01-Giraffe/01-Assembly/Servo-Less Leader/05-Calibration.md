---
id: leader-calibration
title: Calibration
sidebar_label: Calibration
description: Calibration of servo-less leader arm for offsets and slopes.
keywords:
  - Calibration
  - Leader Arm
  - Servo-Less Leader Arm
  - AS5600
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

> NOTE: _Lerobot installation required. For instructions, refer to [Lerobot Setup](/docs/Giraffe/LeRobot/lerobot_setup)._

### Initialize Leader Port and Run AS5600 Reader

To set up and read sensor values from the Leader arm, follow these steps:

1. **Navigate to the LeRobot directory**:

   ```bash
   cd ~/lerobot
   ```

2. **Run the leader port detection script**:

   ```bash
   python3 find_leader_port.py
   ```

   This script will guide you to disconnect the USB for the Leader’s sensor board and automatically detect the correct serial port. It will then save the result to a file named `leader_port.txt`.

3. **Run the AS5600 sensor reader**:

   ```bash
   python3 AS5600_reader.py
   ```

   On the first run, this script will detect that calibration data is missing and initiate a calibration process,simply follow the on-screen prompts to complete the calibration of your Leader arm.

> This is a custom sensor‐only calibration that follows the same “zero → 90°” procedure as the [Follower](/docs/01-Giraffe/01-Assembly/Follower/06-Calibration.md).  
> There is no “rest” position calibration needed.

