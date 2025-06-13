---
id: giraffe_software_setup
title: Setup
sidebar_label: Setup
description: Setting up the software environment for OpenBot Giraffe arm.
keywords:
  - "Giraffe"
  - "OpenBot"
  - "Software Setup"
  - "ROS2"
  - "Robotic Arm"
  - "LeRobot"
---

<!-- @format -->

## Hardware Setup Instructions

> NOTE: Configurator and the rest of the high-level software stack is presently only compatible with Python.

### Clone The [giraffe](https://github.com/carpit680/giraffe) Repository

```bash
git clone https://github.com/carpit680/giraffe.git
cd giraffe
```

### Install Dependencies

```bash
pip install -r requirements.txt
pip install .
```

### Setup Permissions

```bash
sudo usermod -a -G dialout $USER
sudo newgrp dialout
```

### Setup Servo IDs

Use the configurator script in `scripts/` directory

```bash
python3 scripts/st_configurator.py
```

---

## Optional ROS2 Docker Development Environment Setup

Follow the instructions given here to set up a ROS2 Docker development environment: [ros2_docker_env](https://github.com/carpit680/ros2_docker_env)

## ROS2 Worksapce Setup

1. Install ROS2 Humble following these [installation instructions](https://docs.ros.org/en/humble/Installation.html).
2. Install Gazebo Ignition Fortress(LTS) following these [instructions](https://gazebosim.org/docs/fortress/install_ubuntu/).
3. Install Moveit 2

   ```bash
   # Install MoveIt 2 for ROS 2 Humble
   sudo apt update
   sudo apt install -y ros-humble-moveit
   ```

4. Install other dependencies

   ```bash
   sudo apt install -y ros-humble-ros2-control ros-humble-ros2-controllers
   sudo apt install -y python3-colcon-common-extensions python3-rosdep
   ```

5. Set Up giraffe_ws

   ```bash
   # Clone giraffe repository if you have not done so already

   # Update dependencies using rosdep
   cd <path-to-giraffe-repo>/giraffe_ws
   sudo rosdep init  # Only if not already initialized
   rosdep update
   rosdep install --from-paths src --ignore-src -r -y
   ```

6. Build and source the workspace

   ```bash
   cd <path-to-giraffe-repo>/giraffe_ws
   colcon build --symlink-install

   source install/local_setup.zsh
   # OR
   source install/local_setup.bash
   ```

> For Hardware [Assembly](/docs/Giraffe/Assembly/Follower/follower_overview)
