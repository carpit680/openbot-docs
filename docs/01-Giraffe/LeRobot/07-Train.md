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

Train a policy for your robot:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```


### Training Command Explanation

Let’s explain the command:

- We provided the dataset as argument with `--dataset.repo_id=${HF_USER}/giraffe_test`.

- We provided the policy with `policy.type=act`. This loads configurations from `configuration_act.py`.  
  Importantly, this policy will automatically adapt to the number of motor states, motor actions, and cameras of your robot (e.g. laptop and phone) which have been saved in your dataset.

- We provided `policy.device=cuda` since we are training on a Nvidia GPU, but you could use `policy.device=mps` to train on Apple silicon.

- We provided `wandb.enable=true` to use Weights and Biases for visualizing training plots.  
  This is optional, but if you use it, make sure you are logged in by running `wandb login`.

Training should take several hours.  
You will find checkpoints in `outputs/train/act_so101_test/checkpoints`.

To resume training from a checkpoint, below is an example command to resume from the last checkpoint of the `act_giraffe_test` policy:

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_giraffe_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### Upload policy checkpoint

Once training is done, upload the latest checkpoint with:
```bash
huggingface-cli upload ${HF_USER}/act_giraffe_test \
  outputs/train/act_giraffe_test/checkpoints/last/pretrained_model
```

You can also upload intermediate checkpoints with:

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_giraffe_test${CKPT} \
  outputs/train/act_giraffe_test/checkpoints/${CKPT}/pretrained_model
```