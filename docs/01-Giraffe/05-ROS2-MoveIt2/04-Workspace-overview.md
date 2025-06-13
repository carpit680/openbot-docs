---
id: workspace_overview
title: Workspace Overview
sidebar_label: Workspace Overview
description: Overview of the Giraffe ROS 2 workspace and its core packages for description, motion planning, control, and hardware integration.
keywords:
  - "Giraffe"
  - "OpenBot"
  - "ROS 2"
  - "MoveIt"
  - "Gazebo"
  - "Hardware Interface"
---

<!-- @format -->

The Giraffe ROS 2 workspace is composed of four primary packages—`giraffe_description`, `giraffe_moveit_config`, `giraffe_control`, and `giraffe_hardware`—that together enable simulation, motion planning, and hardware control of the Giraffe 5-DoF robotic arm. The `giraffe_description` package provides the robot model, control configuration, and launch files for visualization, simulation, and real hardware use. `giraffe_moveit_config` supplies the MoveIt 2 configuration for kinematics, planning, and RViz integration. `giraffe_control` implements a custom driver for communicating with the Feetech servos, while `giraffe_hardware` defines a `ros2_control` hardware interface for seamless integration with ROS 2 controllers and real-time execution.


### giraffe_description

This package contains URDF for _giraffe_ robotic manipulator along with ros2 control xacro, ros2 controller config files, and the launch files for the entire workspace.

- _display.launch.py_: This launch file visualizes the giraffe robot model in ROS 2. It includes:

  1. Robot State Publisher: Publishes the robot's state using the URDF.
  2. Joint State Publisher GUI: Enables interactive joint control.
  3. RViz Visualization: Displays the robot in a pre-configured RViz environment.

  _Usage_:

  ```bash
  ros2 launch giraffe_description display.launch.py
  ```

- _simulation.launch.py_: This launch file sets up the simulation environment for the giraffe robot in Gazebo and RViz. It includes:

  1. Gazebo Simulation: Starts Gazebo server and client with the giraffe robot model.
  2. Robot Description and State Publisher: Publishes the robot's URDF and joint states.
  3. Controllers: Spawns and activates controllers for joint trajectory and gripper control.
  4. RViz Visualization: Displays the robot model and state in RViz.

  _Usage_:

  ```bash
  ros2 launch giraffe_description simulation.launch.py
  ```

- _moveit_sim.launch.py_: This launch file integrates the giraffe robot with Gazebo, MoveIt! 2, and RViz for advanced motion planning and control. Key features:

  1. Gazebo Integration:
      - Spawns the giraffe robot in Gazebo.
      - Configures ros2_control and joint controllers.
  2. MoveIt! 2 Motion Planning:
      - Loads MoveIt! 2 configurations (SRDF, kinematics, OMPL planning).
      - Starts the move_group node for motion planning and execution.
  3. RViz Visualization:
      - Launches RViz preconfigured for MoveIt! 2 to visualize and interact with the robot.

  _Usage_:

  ```bash
  ros2 launch giraffe_description moveit_sim.launch.py
  ```

- moveit_interface.launch.py_: This launch file configures and launches the giraffe robot hardware, MoveIt! 2, and a hardware interface for motion control. Key features:

  1. MoveIt! 2 Motion Planning:
      - Loads MoveIt! 2 configurations (SRDF, kinematics, and OMPL planning).
      - Starts the move_group node for motion planning and trajectory execution.
  2. RViz Visualization:
      - Displays the robot's state and motion planning visualization using a preconfigured RViz setup.
  3. Hardware Interface:
      - Includes a node for the giraffe robot's hardware interface for integration with controllers.

  _Usage_:

  ```bash
  ros2 launch giraffe_description moveit_interface.launch.py
  ```

### giraffe_moveit_config

The giraffe_moveit_config package provides the MoveIt! 2 configuration for the 5-DoF robotic arm named "Giraffe," designed for use with ROS 2 Humble. It includes essential files for motion planning and execution, such as:

- **URDF and SRDF**: Defines the robot's kinematic structure and semantic description.
- **Kinematics Configuration**: Specifies IK solvers for planning.
- **OMPL Planning Configuration**: Configures planning pipelines for trajectory generation.
- **Controller Configuration**: Integrates with ros2_control for real-time trajectory execution.
- **RViz Configuration**: Pre-configured visualization setup for MoveIt! 2.

This package is utilized by the **giraffe_description** package's launch file to enable simulation and motion planning for the Giraffe arm in Gazebo and MoveIt! 2 environments.

### giraffe_control
The giraffe_control package provides hardware-level control for the 5-DoF Giraffe robotic arm. It includes a ROS 2 node, giraffe_driver, and a corresponding launch file to facilitate communication between ROS 2 and the physical hardware.

#### Features

1. Giraffe Servo Driver (giraffe_driver):

   - Implements direct communication with the Giraffe arm's servos using the Feetech motor bus.
   - Processes incoming command messages to set motor positions.
   - Read motor position feedback from the servos to publish feedback.
   - Supports homing offsets, acceleration settings, and position conversion from radians to motor steps.
   - Subscribes to /command for joint commands and publishes feedback to /feedback topic.
   - Interfaces with six motors:
     - base_link_shoulder_pan_joint
     - shoulder_pan_shoulder_lift_joint
     - shoulder_lift_elbow_joint
     - elbow_wrist_1_joint
     - wrist_1_wrist_2_joint
     - wrist_2_gripper_joint

2. Launch File:
   - Starts the giraffe_driver node.
   - Configures parameters for easy integration with other ROS 2 packages.

_Usage_:

The giraffe_control package is used by the giraffe_description package's launch file to provide hardware control during simulations and real-world operation. It ensures seamless integration of the Giraffe robotic arm into ROS 2 for both motion execution and feedback.

### giraffe_hardware
The giraffe_hardware package provides a ros2_control hardware interface for the Giraffe 5-DoF robotic arm plus a gripper joint. This interface lets you control and monitor the arm through standard ROS 2 controllers and topics, simplifying integration with motion planning frameworks like MoveIt.

#### Features:

1. Giraffe Hardware Interface (GiraffeInterface):
   - Implements a hardware_interface::SystemInterface plugin.
   - Subscribes to feedback (sensor_msgs/msg/JointState) for joint position updates.
   - Publishes to command (sensor_msgs/msg/JointState) to send joint commands.
   - Handles all six joints of the arm.

_Usage_:

- Integrate with controller_manager and standard controllers (e.g., joint_trajectory_controller).
- Place giraffe_interface in your ros2_control configuration.
- Commands and feedback are exchanged via standard ROS topics, enabling easy simulation or real hardware operation.
