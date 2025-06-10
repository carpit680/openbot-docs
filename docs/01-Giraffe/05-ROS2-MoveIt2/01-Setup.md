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

# Software Setup

Follow these steps to set up the software environment for the OpenBot Giraffe robotic arm.

### Clone the Giraffe Repository

```bash
git clone https://github.com/carpit680/giraffe.git
cd giraffe
```

### Install Python Dependencies

```bash
pip install -r requirements.txt
pip install .
```

### Set Up USB Permissions

```bash
sudo usermod -a -G dialout $USER
sudo newgrp dialout
```

### Configure Servo IDs

Use the configurator script:

```bash
python3 scripts/st_configurator.py
```

Follow on-screen prompts to configure the servo IDs correctly.

Make sure:

- The correct USB port is selected
- Power is connected
- Each servo responds as expected

> For Hardware setup refer to Assembly section (LINK)
