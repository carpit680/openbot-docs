---
id: giraffe_moveit2_simulation
title: MoveIt 2 Simulation
sidebar_label: MoveIt 2 Simulation
description: Install and configure MoveIt 2 and Gazebo for the OpenBot Giraffe workspace and run simulations.
keywords:
  - "Giraffe"
  - Simulation
  - "OpenBot"
  - "MoveIt 2"
  - "Gazebo"
  - "ROS2"
---

<!-- @format -->

# MoveIt 2 Setup

### Install ROS 2 Humble

Follow the [official instructions](https://docs.ros.org/en/humble/Installation.html).

### Install Gazebo Fortress

Follow the [Gazebo Fortress installation guide](https://gazebosim.org/docs/fortress/install_ubuntu/).

### Install MoveIt 2

```bash
sudo apt update
sudo apt install -y ros-humble-moveit
```

### Install Additional Dependencies

```bash
sudo apt install -y ros-humble-ros2-control ros-humble-ros2-controllers
sudo apt install -y python3-colcon-common-extensions python3-rosdep
```

### Set Up the Workspace

```bash
cd giraffe_ws
sudo rosdep init   # Only if not already done
rosdep update
rosdep install --from-paths src --ignore-src -r -y
colcon build --symlink-install
source install/local_setup.bash  # or local_setup.zsh
```

# Simulation with MoveIt and Gazebo

### Launch RViz with the robot model

```bash
ros2 launch giraffe_bringup display.launch.py
```

This command starts the robot state in RViz using `joint_state_publisher` and `robot_state_publisher`.

### Run the physics-based simulation

```bash
ros2 launch giraffe_bringup simulation.launch.py
```

This launches Gazebo Fortress and spawns the robot into the simulated world using ROS 2 control interfaces.

### Start MoveIt for interactive planning

```bash
ros2 launch giraffe_moveit_config moveit.launch.py
```

This launches RViz with MoveIt integration to allow for:

- Interactive motion planning
- End-effector goal setting
- Trajectory visualization and execution

> Ensure the simulation is running before launching MoveIt so controllers can connect to the simulated robot.
