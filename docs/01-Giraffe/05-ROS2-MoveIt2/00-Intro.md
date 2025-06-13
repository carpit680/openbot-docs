---
id: ros2_intro
title: Introduction to ROS2 + MoveIt2
sidebar_label: Introduction
description: Introduction to ROS2 and MoveIt2
keywords:
  - ROS2
  - MoveIt2
  - OpenBot
  - OpenBot Giraffe
  - Open Source
  - Robotics
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
  - C++
  - Python
  - Robotics
  - Open Source Robotics
---


Robotics applications require a robust middleware for communication and a flexible planning framework for motion. This page introduces:

- **ROS 2**: The next-generation Robot Operating System, offering improved real-time support, security, and cross-platform compatibility.  
- **MoveIt 2**: A powerful motion-planning framework built on ROS 2 that simplifies robot kinematics, collision checking, and trajectory execution.

## What Is ROS 2?

ROS 2 provides:
- **Decoupled Communication**: Pub/sub, services, and actions over DDS.
- **Real-Time Support**: Designed for deterministic execution with real-time operating systems.  
- **Multi-Platform**: Runs on Linux, Windows, and macOS.  
- **Security**: Built-in authentication, encryption, and access control.  

Learn more: [docs.ros.org](https://docs.ros.org/en/humble/index.html)

## What Is MoveIt 2?

MoveIt 2 extends ROS 2 to offer:
- **Kinematics**: Forward and inverse solutions for serial manipulators.  
- **Motion Planning**: Integrates OMPL for sampling-based planners.  
- **Collision Checking**: Continuous and discrete checks using FCL.  
- **Trajectories**: Smooth path interpolation and execution via ROS 2 control.  

Learn more: [moveit.picknik.ai](https://moveit.picknik.ai/main/index.html)

## Why Combine ROS 2 & MoveIt 2?

By pairing ROS 2 with MoveIt 2, you gain:
- **Seamless Integration**: Use ROS 2’s node graph to coordinate perception, planning, and control.  
- **Scalability**: Deploy on single boards (e.g., Jetson) or distributed systems.  
- **Community & Support**: Leverage extensive tutorials, packages, and forums.

## Prerequisites

- A system running **Ubuntu 22.04 LTS** (or other supported ROS 2 platform)  
- **ROS 2 Humble Hawksbill**: follow the installation guide at [Installation on Ubuntu (Debians)](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)  
- **MoveIt 2**: install via the Humble binary packages following [MoveIt 2 Binary Install (Humble)](https://moveit.ai/install-moveit2/binary/)  
- Familiarity with basic Python/C++ and terminal usage
