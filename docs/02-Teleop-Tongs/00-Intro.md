---
id: teleop_tongs_intro
title: Teleop Tongs v0.9
sidebar_label: Intro
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

Teleop Tongs support performing efficient multijoint movement with Giraffe built on top of [Dex Teleop](https://github.com/hello-robot/stretch_dex_teleop) (for the [Stretch 3](https://hello-robot.com/stretch-3-product) mobile manipulator by [Hello Robot](https://hello-robot.com/)) and customized to work with any 5-7 DoF manipulators.

The human operator uses modified kitchen tongs or 3D-printed tongs with attached ArUco markers to control the pose of the end effector. A webcam looking up from a stand placed on the ground observes the tongs to estimate their position, orientation, and grip width. A ring light around the webcam reduces motion blur so that the ArUco markers can be detected during fast motions.

The system could be adapted to use other interfaces that can provide a five to seven degrees of freedom (5-7 DOF) target pose and grip width/angle at a high rate (e.g., >= 15 Hz). The position of this target pose controls the end of the robotic manipulator via inverse kinematics (IK). The grip width commands the robot's gripper.

## Motivation

HuggingFace has done some amazing work with the community's help in developing [lerobot](https://github.com/huggingface/lerobot) with its plug-and-play Imitation Learning pipeline. At the time of development, one can set up a Koch V1.1, Standard Open ARM 100, or Aloha bimanual setup with leader and follower arms to teleoperate and collect episodes to train the model.

I initially wanted to replicate their setup and build on top of that, but later, I figured, why not make this pipeline even more accessible? So, I developed my own version of a low-cost robotic manipulator, and this teleop_tongs to create a data collection setup at most half the cost of other available setups.
