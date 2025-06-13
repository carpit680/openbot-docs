---
id: lerobot_grippercam
title: Eye in Hand
sidebar_label: Eye in Hand
description: Setup scripts for Camera mounted on gripper.
keywords:
  - Gripper
  - Camera
  - Eye in Hand
  - Giraffe
  - OpenBot
  - LeRobot
  - Robotic Arm
  - Real-Time Control
  - Follower Arm
  - Open Source Robotics
---

<!-- @format -->

### Overview

A camera (the "eye") is mounted on the end-effector (the "hand") of a robotic arm. This configuration allows the robot to use the camera to directly see the object it's working with, enabling precise object manipulation, pick-and-place operations, and other tasks requiring visual feedback.

### Add cameras

After inserting your two USB cameras, run the following script to check the port numbers of the cameras, It is important to remember that the camera must not be connected to a USB Hub; instead, it should be plugged directly into the device. The slower speed of a USB Hub may result in the inability to read image data.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

The terminal will print out the following information.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

You can find the pictures taken by each camera in the `outputs/images_from_opencv_cameras` directory, and confirm the port index information corresponding to the cameras at different positions. Then complete the alignment of the camera parameters in the `lerobot/lerobot/common/robot_devices/robots/configs.py` file.

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False

```

Then you will be able to display the cameras on your computer while you are teleoperating by running the following code. This is useful to prepare your setup before recording your first dataset.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```
