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
python -m lerobot.record \
    --robot.type=giraffe_follower \
    --robot.port=/dev/tty.usbmodem585A0076841 \
    --robot.id=my_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \
    --teleop.type=giraffe_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \
    --teleop.id=my_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=2 \
    --dataset.single_task="Grab the black cube"
```

## Dataset Upload

Locally, your dataset is stored in this folder:  
`~/.cache/huggingface/lerobot/{repo-id}`

At the end of data recording, your dataset will be uploaded to your Hugging Face page  
(e.g. `https://huggingface.co/datasets/cadene/giraffe_test`) that you can obtain by running:

```bash
echo https://huggingface.co/datasets/${HF_USER}/giraffe_test
```

Your dataset will be automatically tagged with LeRobot for the community to find it easily, and you can also add custom tags (in this case tutorial for example).

You can look for other LeRobot datasets on the hub by searching for LeRobot tags.

## Record Function

The record function provides a suite of tools for capturing and managing data during robot operation:

### 1. Data Storage

Data is stored using the LeRobotDataset format and is stored on disk during recording.  
By default, the dataset is pushed to your Hugging Face page after recording.  
To disable uploading, use `--dataset.push_to_hub=False`.

---

### 2. Checkpointing and Resuming

Checkpoints are automatically created during recording.  
If an issue occurs, you can resume by re-running the same command with `--control.resume=true`.

To start recording from scratch, manually delete the dataset directory.

---

### 3. Recording Parameters

Set the flow of data recording using command-line arguments:

- `--dataset.episode_time_s=60`  
  Duration of each data recording episode (default: 60 seconds).

- `--dataset.reset_time_s=60`  
  Duration for resetting the environment after each episode (default: 60 seconds).

- `--dataset.num_episodes=50`  
  Total number of episodes to record (default: 50).

---

### 4. Keyboard Controls During Recording

Control the data recording flow using keyboard shortcuts:

- Press Right Arrow (→): Early stop the current episode or reset time and move to the next.
- Press Left Arrow (←): Cancel the current episode and re-record it.
- Press Escape (ESC): Immediately stop the session, encode videos, and upload the dataset.

---

## Tips for Gathering Data

Once you’re comfortable with data recording, you can create a larger dataset for training.  
A good starting task is grasping an object at different locations and placing it in a bin.  
We suggest recording at least 50 episodes, with 10 episodes per location.

Keep the cameras fixed and maintain consistent grasping behavior throughout the recordings.  
Also make sure the object you are manipulating is visible on the cameras.  
A good rule of thumb is you should be able to do the task yourself by only looking at the camera images.

In the following sections, you’ll train your neural network.  
After achieving reliable grasping performance, you can start introducing more variations during data collection, such as additional grasp locations, different grasping techniques, and altering camera positions.

Avoid adding too much variation too quickly, as it may hinder your results.

If you want to dive deeper into this important topic, you can check out the blog post we wrote on what makes a good dataset.

