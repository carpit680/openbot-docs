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

You can use the record script from `lerobot/record.py` but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

```bash
python -m lerobot.record  \
  --robot.type=giraffe_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_follower_arm \
  --display_data=false \
  --dataset.repo_id=$HF_USER/eval_giraffe \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

As you can see, it’s almost the same command as previously used to record your training dataset. Two things changed:

- There is an additional `--control.policy.path` argument which indicates the path to your policy checkpoint with (e.g.` outputs/train/eval_act_giraffe_test/checkpoints/last/pretrained_model`). You can also use the model repository if you uploaded a model checkpoint to the hub (e.g.`${HF_USER}/act_giraffe_test`).
- The name of dataset begins by eval to reflect that you are running inference (e.g.`${HF_USER}/eval_act_giraffe_test`).
