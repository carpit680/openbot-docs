---
id: teleop_tongs_gazebo
title: Usage with Gazebo
sidebar_label: Usage with Gazebo
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

## Running Teleop Tongs with Giraffe Hardware(no lerobot or ROS2, just for fun)

After you've gotten everything setup, you can try out Teleop Tongs inside simulation with Giraffe. Make sure to start with slow motions, to test your system, gain experience, and warm up.

* Follow the instructions from the Giraffe repository to set up your robot hardware.
* Use the `raw` branch of the Teleop Tongs repository if you want to write to robot hardware directly.
    ```bash
    git clone https://github.com/carpit680/teleop_tongs.git -b raw
    ```
* Run Teleop Tongs with `python3 dex_teleop.py`.