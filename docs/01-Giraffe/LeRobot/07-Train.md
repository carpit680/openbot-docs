---
id: lerobot_train
title: Train
sidebar_label: Train
description: Training a robotic policy using ACT or other methods on the SO-100 dataset.
keywords:
  - Train
  - Giraffe
  - OpenBot
  - Machine Learning
  - Imitation Learning
  - LeRobot
  - Robotic Arm
  - Open Source Robotics
---

<!-- @format -->

### Train a Policy

Train a policy using ACT:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so100_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so100_test \
  --job_name=act_so100_test \
  --device=cuda \
  --wandb.enable=true
```

**Notes:**

- Set `--device=mps` for Apple Silicon.
- Make sure to `wandb login` beforehand if using Weights & Biases.

Checkpoints are saved in:

```
outputs/train/act_so100_test/checkpoints/
```
