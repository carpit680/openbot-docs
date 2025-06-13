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

> <span style={{ color: "red", fontWeight: "bold" }}>Important</span>:- The instructions and setup provided in this documentation are specific to our customized branch of the LeRobot repository, which can be found (Give Link).

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
git clone https://github.com/huggingface/lerobot.git ~/lerobot
cd ~/lerobot
pip install -e ".[feetech]"
```

### 5. **Linux-only: Extra dependencies for dataset recording**

```bash
conda install -y -c conda-forge ffmpeg
pip uninstall -y opencv-python
conda install -y -c conda-forge "opencv>=4.10.0"
```

### 6. **Find USB ports for your arm**

```bash
python lerobot/scripts/find_motors_bus_port.py
```

### 7. **Update the follower port**

Update the `follower_arms` section in `So100RobotConfig` in `configs.py`.

### 8. **Configure each motor (follower arm)**

Set each motor’s ID from 1 to 6:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyUSB0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID <ID>
```

### 9. **Add motor horns**

Align holes to spline angles (AS instructed in [Follower Assembly](/docs/Giraffe/Assembly/Follower/follower-assembly)). Avoid rotating motors during mounting.

### 10. **Assemble the arm**

    Follow the provided videos or documentation for physical assembly.
    _Note: Insert cables before mounting motors for easier handling._

> *For setting up the Leader Arm using magnetic encoders, refer to the [Servo-Less Leader Arm](/docs/Giraffe/Assembly/Servo-Less%20Leader/leader_overview) page.*
