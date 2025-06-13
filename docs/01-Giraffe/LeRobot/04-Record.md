---
id: lerobot_record
title: Record
sidebar_label: Record
description: How to record task demonstrations on the SO-100 arm for dataset creation and training.
keywords:
  - Giraffe
  - Record
  - Dataset
  - OpenBot
  - LeRobot
  - Robotic Arm
  - Open Source Robotics
---

<!-- @format -->

### Record a Dataset

Log in to Hugging Face Hub (once per machine):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Set your username:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Record and upload dataset:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/so100_test \
  --control.tags='["so100","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.push_to_hub=true
```

To resume or record locally:

- Add `--control.resume=true`
- Add `--control.local_files_only=true`
