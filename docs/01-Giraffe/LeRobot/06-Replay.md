---
id: lerobot_replay
title: Replay
sidebar_label: Replay
description: Replay previously recorded task episodes with LeRobot on the SO-100 robotic arm.
keywords:
  - Replay
  - Giraffe
  - Dataset
  - OpenBot
  - LeRobot
  - Robotic Arm
  - Open Source Robotics
---

### Replay

Replay a specific episode:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so100_test \
  --control.episode=0
```

Add `--control.local_files_only=true` if not using Hugging Face Hub.
