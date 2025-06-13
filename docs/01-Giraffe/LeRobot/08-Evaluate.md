---
id: lerobot_evaluate
title: Evaluate
sidebar_label: Evaluate
description: Evaluate trained policies on the SO-100 follower arm using LeRobot’s evaluation pipeline.
keywords:
  - Evaluate
  - Giraffe
  - OpenBot
  - Evaluation
  - Policy
  - LeRobot
  - Robotic Arm
  - Open Source Robotics
---

<!-- @format -->

### Evaluate Trained Policy

Run 10 evaluation episodes with your trained policy:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/eval_act_so100_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_so100_test/checkpoints/last/pretrained_model
```

You can also set `--control.policy.path` to a model hosted on Hugging Face.
