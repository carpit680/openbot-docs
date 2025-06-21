---
id: leader-assembly
title: Assembly
sidebar_label: Assembly
description: Assembly instructions for servo-less leader arm.
keywords:
  - Assembly
  - Leader Arm
  - Servo-Less Leader Arm
  - AS5600
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Robotics
  - Robotics
---

import ReactPlayer from 'react-player'

> Solder the power and data wires to all the sensors before assembly.

### Step 1: Sensor Casing

<ReactPlayer playing controls url='/vid/leader_assembly_2.mp4'/>

<br/>

- Place the AS5600 sensor in the base.
- Press the magnet into the rotating shaft, aligned with the AS5600 sensor to enable angle sensing.
- Close the Base with Shaft Holder encasing the Shaft in it's position.
- These encoder housings will act as the joint feedback components instead of a motorized servo at the leader end.

**[Servo 2 Housing Assembly Tutorial](https://youtu.be/gF8EP3n7aFw)**
This video demonstrates the assembly for **Servo 2**, and the same process applies for **Servo 1**:

Repeat this step for each encoder position required in the Leader arm.

### Step 2: Mechanical Assembly

Once all encoder housings are assembled, you can proceed to construct the Leader arm using the same mechanical steps as in the Follower arm.

> Follow the [Follower Arm Assembly Instructions](/docs/01-Giraffe/01-Assembly/Follower/05-Assembly.md) to complete the structure.

Note that some Leader-specific parts may be different to accommodate encoder wiring or mounts. Refer to the dedicated Leader 3D models for fit and alignment.

Stay tuned for the full Leader Arm mechanical assembly walkthrough.
