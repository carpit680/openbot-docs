---
id: giraffe_hardware
title: Running on Hardware
sidebar_label: Running on Hardware
description: Use MoveIt 2 with the real OpenBot Giraffe arm for live control.
keywords:
  - "Giraffe"
  - "OpenBot"
  - "Hardware"
  - "MoveIt 2"
  - "ROS2"
  - "Real Robot"
---

<!-- @format -->

# Running on Hardware

Use this setup to control the real OpenBot Giraffe arm using MoveIt 2.

### Step 1: Power and Connect the Arm

Ensure the robotic arm is powered and connected to your machine via USB.

### Step 2: Launch the Real Hardware Interface

```bash
ros2 launch giraffe_description moveit_interface.launch.py
```

This launch file configures and launches the giraffe robot hardware, MoveIt! 2, and a hardware interface for motion control. Key features:

  1. MoveIt! 2 Motion Planning:
      - Loads MoveIt! 2 configurations (SRDF, kinematics, and OMPL planning).
      - Starts the move_group node for motion planning and trajectory execution.
  2. RViz Visualization:
      - Displays the robot's state and motion planning visualization using a preconfigured RViz setup.
  3. Hardware Interface:
      - Includes a node for the giraffe robot's hardware interface for integration with controllers.

> Make sure all servos are configured and calibrated before executing any real motion plans.
