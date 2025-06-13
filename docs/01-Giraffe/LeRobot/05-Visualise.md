---
id: lerobot_visualise
title: Visualise
sidebar_label: Visualise
description: Tools to visualize datasets collected from the SO-100 arm using LeRobot.
keywords:
  - Visualise
  - Dataset
  - Giraffe
  - OpenBot
  - LeRobot
  - Robotic Arm
  - Open Source Robotics
---

<!-- @format -->

### Visualise a Dataset

**If pushed to Hugging Face:**
Go to: [Online Dataset Visualizer](https://huggingface.co/spaces/lerobot/visualize_dataset)  
Enter:

```bash
echo ${HF_USER}/so100_test
```

**Local visualization (if not pushed):**

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so100_test \
  --local-files-only 1
```
