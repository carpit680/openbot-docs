---
id: follower-motor-configure
title: Motor Config
sidebar_label: Motor Config
description: Motor Configuration required before Assembly for Follower arm.
keywords:
  - Configuration
  - Follower Arm
  - ST3215 Servo
  - FeeTech Servo
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Robotics
  - Robotics
---

> <span style={{ color: "red", fontWeight: "bold"}}>Important</span>:- **Make sure to install servo Horns in correct orientations only after motor config** (This is to make sure the actual zero point of the servo encoder is in the middle so that we can rotate about 180 degrees in either direction.)

> NOTE: _Lerobot installation required. For instructions, refer to [Lerobot Setup](/docs/Giraffe/LeRobot/lerobot_setup)._

### 1. Find the USB ports associated to Follower arm

#### a. Run the script to find port

To find the port for each bus servo adapter, run the utility script:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

#### b. Example outputs

Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):

```
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081', '/dev/tty.usbmodem575E0031751']
Remove the usb cable from your DynamixelMotorsBus and press Enter when done.

[...Disconnect leader arm and press Enter...]

The port of this DynamixelMotorsBus is /dev/tty.usbmodem575E0031751
Reconnect the usb cable.
```

Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0032081`, or possibly `/dev/ttyACM1` on Linux):

```
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081', '/dev/tty.usbmodem575E0031751']
Remove the usb cable from your DynamixelMotorsBus and press Enter when done.

[...Disconnect follower arm and press Enter...]

The port of this DynamixelMotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the usb cable.
```

#### c. Troubleshooting

On Linux, you might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

### 2. Motor Config

#### a. Set IDs for all 6 motors

Plug your first motor and run this script to set its ID to 1. It will also set its present position to 2048, so expect your motor to rotate. Replace the text after --port to the corresponding follower control board port and run this command in cmd:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/tty.usbmodem58760432961 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

> [!NOTE]
> These motors are currently limited. They can take values between 0 and 4096 only, which corresponds to a full turn. They can't turn more than that. 2048 is at the middle of this range, so we can take -2048 steps (180 degrees anticlockwise) and reach the maximum range, or take +2048 steps (180 degrees clockwise) and reach the maximum range. The configuration step also sets the homing offset to 0, so that if you misassembled the arm, you can always update the homing offset to account for a shift up to ± 2048 steps (± 180 degrees).

Then unplug your motor and plug the second motor and set its ID to 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/tty.usbmodem58760432961 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Redo the process for all your motors until ID 6.
