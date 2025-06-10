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
ros2 launch giraffe_bringup giraffe.launch.py use_fake_hardware:=false
```

This brings up the robot using actual servo interfaces over serial communication.

### Step 3: Start MoveIt

```bash
ros2 launch giraffe_moveit_config moveit.launch.py
```

This allows you to:

- Plan and execute real joint trajectories
- Visualize state feedback
- Use the same MoveIt interface as simulation

> Make sure all servos are configured and calibrated before executing any real motion plans.
