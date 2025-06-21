---
id: teleop_tongs_direct_teleop
title: Direct Teleop Usage
sidebar_label: Direct Teleop Usage
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

## ROS2 Integration

If you want to try it out with ROS2, you can also run Teleop Tongs with simulation or a real robot with Giraffe.

Follow the instructions from [Giraffe](https://github.com/carpit680/giraffe) repository to set up your robot.

* Clone this ros2 branch of the  Teleop Tongs repository if you want to use ros2_control or raw_ros2 if you want to use topics.
    ```bash
    git clone https://github.com/carpit680/teleop_tongs.git -b ros2 # for ros2_control based communication to giraffe_driver with simulation or robot hardware.
    # OR
    git clone https://github.com/carpit680/teleop_tongs.git -b raw_ros2 # for topics based direct communication to giraffe_driver with only robot hardware.
    ```
* Run Giraffe simulation or a real robot depending on the branch you chose above.
* Run `python3 dex_teleop.py` to start Teleop Tongs.