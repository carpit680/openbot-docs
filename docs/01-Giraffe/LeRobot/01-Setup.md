---
id: lerobot_setup
title: Setup
sidebar_label: Setup
description: Environment and hardware setup guide for the SO-100 follower arm using LeRobot.
keywords:
  - Giraffe
  - Giraffe v1.1 Kit
  - OpenBot
  - OpenBot Giraffe
  - OpenBot Giraffe v1.1 Kit
  - Open Source
  - Robotic Arm
  - Leader-Follower
  - LeRobot
  - Robotics
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
---

<!-- @format -->

> <span style={{ color: "red", fontWeight: "bold" }}>Important</span>:- The instructions and setup provided in this documentation are specific to our customized branch of the [LeRobot repository](https://github.com/openbot-co-in/lerobot-openbot/tree/user/carpit680/2025_06_18_add_giraffe_robot).

### 1. **Install Miniconda**

[Miniconda installation instructions](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. **Restart your shell**

```bash
source ~/.bashrc
# or for Mac:
source ~/.bash_profile
# or Zsh:
source ~/.zshrc
```

### 3. **Create a conda environment**

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
```

### 4. **Clone LeRobot**

```bash
git clone git clone --branch user/carpit680/2025_06_18_add_giraffe_robot https://github.com/huggingface/lerobot.git
cd ~/lerobot
pip install -e .
```

### 5. **Linux-only: Extra dependencies for dataset recording**

```bash
conda install -y -c conda-forge ffmpeg
pip uninstall -y opencv-python
conda install -y -c conda-forge "opencv>=4.10.0"
```

### 6. **Find USB ports for your arm**

Refer to [motor configure](/docs/01-Giraffe/01-Assembly/Follower/04-Configuring_Motors.md) for setting up the motors.

### 10. **Assemble the arm**

    Follow the provided documentation for physical assembly.
    _Note: Insert cables before mounting motors for easier handling._

> *For setting up the Leader Arm using magnetic encoders, refer to the [Servo-Less Leader Arm](/docs/Giraffe/Assembly/Servo-Less%20Leader/leader_overview) page.*
