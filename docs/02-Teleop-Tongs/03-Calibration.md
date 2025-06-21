---
id: teleop_tongs_calib
title: Calibrating Teleop-Tongs
sidebar_label: Calibration
description: OpenBot Teleop Tongs v0.9 is an open-source, low-cost alternative to a Leader Arm for teleoperating robotic manipulators with any number of degrees of freedom.
keywords:
  - Giraffe
  - Giraffe v1.1 Kit
  - Teleop Tongs
  - OpenBot
  - OpenBot Giraffe
  - OpenBot Giraffe v1.1 Kit
  - Open Source
  - Robotic Arm
  - Leader-Follower
  - LeRobot
  - ROS2
  - C++
  - Python
  - Robotics
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
---

### Calibrate the Webcam

After setting up your camera, you need to calibrate it.

> :warning: **Warning**
> The calibration scripts contain parameters for camera name and resolution. Customize these parameters if necessary.

> :memo: **Note:**
> If you face permission issues with the camera or any other USB device, execute the following commands:
> ```bash
> sudo usermod -a -G dialout $USER
> newgrp dialout
> ```

First, generate a calibration board using the following command:

```bash
cd teleop_tongs
python3 webcam_calibration_create_board.py
```

This should result in the following PNG file.

```bash
webcam_aruco_calibration_board.png
```

Print this image out without scaling it. The resulting printout should match the dimensions specified in the PNG file.

Mount the resulting printout on a flat surface that you can move around the camera to capture calibration images __with the ring light turned on__.

Use the following command and your calibration pattern to collect calibration images for your Mi USB Webcam. The entire calibration board should be visible and not too far away, or else the calibration images can lead to errors.

```bash
python3 webcam_calibration_collect_images.py
```

The images will be stored in the following directory.

```bash
./webcam_calibration_images/<camera name>/<camera resolution>
```

Once you've collected the calibration images, run the following command to process the images.

```bash
python3 webcam_calibration_process_images.py
```

Processing the images will generate a YAML calibration file similar to the following file.

```bash
./webcam_calibration_images/<camera name>/<camera resolution>/camera_calibration_results_20231211211703.yaml

```

### Test the Camera

To make sure that your camera detects the ArUco markers on your tongs, __turn on the ring light__ and run the following code __from the root directory__.

```bash
python3 teleop_example.py
```

You should see images from the camera with green boxes drawn around detected ArUco markers.
