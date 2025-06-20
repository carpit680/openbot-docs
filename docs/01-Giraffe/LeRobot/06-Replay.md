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
python -m lerobot.replay \
    --robot.type=giraffe_follower \
    --robot.port=/dev/tty.usbmodem58760431541 \
    --robot.id=my_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0 # choose the episode you want to replay
```

Your robot should replicate movements similar to those you recorded.
