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


# Simulation with MoveIt and Gazebo

<video controls style={{ width: "100%", maxWidth: "800px" }}>

  <source src="/img/moveit_sim.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Launch RViz with the robot model

```bash
ros2 launch giraffe_description display.launch.py
```

This command starts the robot state in RViz using `joint_state_publisher` and `robot_state_publisher`.

### Run the physics-based simulation

```bash
ros2 launch giraffe_description simulation.launch.py
```

This launches Gazebo Fortress and spawns the robot into the simulated world using ROS 2 control interfaces.

### Start MoveIt for interactive planning

```bash
ros2 launch giraffe_description moveit_sim.launch.py
```

This launches RViz with MoveIt integration to allow for:

- Interactive motion planning
- End-effector goal setting
- Trajectory visualization and execution

> Ensure the simulation is running before launching MoveIt so controllers can connect to the simulated robot.
