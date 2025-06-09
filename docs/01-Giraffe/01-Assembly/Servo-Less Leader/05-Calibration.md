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

> **Important:** This is a custom sensor‐only calibration that follows the same “zero → 90°” procedure as the original LeRobot SO-100. There is no “rest” position calibration needed.

1. **Run Calibration Script**  
   Run the calibration script from the OpenBot-modified LeRobot repository to begin the process:

   ```bash
   cd ~/lerobot-openbot                  # “openbot” branch of LeRobot that supports AS5600
   python lerobot/scripts/control_robot.py \
     --robot.type=so100 \
     --robot.cameras='{}' \
     --control.type=calibrate \
     --control.arms='["main_leader"]'
   ```

   The script will detect the serial port for the ESP8266 automatically  
   (if you have unplugged and re-plugged it once so it appears as `/dev/ttyUSBx` or similar).  
   If auto-detection fails, you can specify it manually using the `--control.serial_port` argument, like:  
   `--control.serial_port="/dev/ttyUSB0"`

   Once the prompt says:

   ```
   Move arm to ZERO position and press ENTER
   ```
   >Image of Zero Position

   — place the Leader Arm manually into its zero position (typically all joints aligned straight) and press **Enter**.

2. **Move to 90° Position**  
   The script will now prompt:

   ```
   Move arm to 90° position and press ENTER
   ```

   >Image of 90 degree Position

   Manually rotate each joint to the +90° position relative to the previously set zero position.  
   Use markings, reference geometry, or a digital angle gauge to be precise.  
   Press **Enter** again when ready.

3. **Complete Calibration**  
   The script will calculate a linear mapping from raw AS5600 values to joint angles based on the two positions.  
   This data is saved in `~/.le_robot/calibration/leader_calib.txt`.  
   No additional steps are required; calibration is now complete.

4. **Verify Calibration**  
   To confirm everything is working, run:

   ```bash
   python lerobot/scripts/control_robot.py \
     --robot.type=so100 \
     --robot.cameras='{}' \
     --control.type=stream_angles \
     --control.arms='["main_leader"]'
   ```

   Rotate each joint shaft by hand and observe the printed angle output.  
   Confirm that the reported degrees correspond to actual joint rotation.

---
