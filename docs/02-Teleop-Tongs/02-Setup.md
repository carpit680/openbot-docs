---
id: teleop_tongs_setup
title: Setting Up Teleop-Tongs
sidebar_label: Setup
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

# Setting Up Teleop-Tongs

You should start by cloning this repository. All of the commands below should be run from the command line in the root directory of the repository on your robot's computer. 

### Build Your Interface

You can 3D print the components required for the Teleop Tongs set up along with the fiducial markers by following the [Assembly guide](./01-Assembly.md).

You will need a camera, a ring light, and optionally a stand as shown in the following photo.

<img src="/img/camera_ring_light_and_stand.jpeg" alt="Follower Arm Assembly Complete" style={{width: "40%"}}/>

For a single robot, you will need Teleop Tongs like those shown in the following two photos.

<img src="/img/teleop_tongs_held_open.jpeg" width="45%"/>
<img src="/img/teleop_tongs_held_closed.jpeg" width="45%"/>

### Run the Installation Scripts

Clone this GitHub repository.

```bash
git clone -b ros2 https://github.com/carpit680/teleop_tongs.git
```

Then run the following installation script found in the repository's root directory.

```bash
./install_dex_teleop.sh
```
> :warning: **Warning**  
> The device ID and Vendor ID used in the `99-teleop-tongs-camera.rules`, required below are specific to the camera I used. 
> If you are using a different camera, you will need to change the device ID and Vendor ID in this file.

The installation script sets up udev rules for a Mi USB Webcam HD so that the camera can be reset each time you run dexterous teleoperation. This is a workaround to avoid low frame rates and errors in the camera settings.

Next, the installation script installs v4l2 utilities, if necessary.

You also need to install some Python dependencies:

```bash
pip install -r requirements.txt
pip install -e . # To install as a Python package in editable mode
```

### Generate Specialized URDFs

To run Teleop Tongs, you need to generate specialized URDF files. Teleop Tongs uses forward kinematic (FK) and inverse kinematic (IK) models of the robot. These models use specialized URDFs generated from the calibrated URDF on your robot. Use the `giraffe.urdf` file provided as an example of how the URDF should look like.

### Set Up the Camera, Ring Light, and Stand

As shown in the photo above, the camera stand should be placed on the ground, and the camera should be pointed straight up. The stand should be at its minimum height.

The camera should be plugged into your computer using a USB extension cable. The ring light should not be plugged carelessly as it requires too much power - it can either be plugged into a powered USB port, or externally.

When using the camera, the bottom of the camera should be pointed away from you. For the robot, the bottom of the camera points in the direction of the arm extended forward from its base, and the lens of the camera looks up.