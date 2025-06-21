---
id: follower-calibration
title: Calibration
sidebar_label: Calibration
description: Calibration of Follower arm for offsets and slopes.
keywords:
  - Calibration
  - Follower Arm
  - ST3215
  - FeeTech Servo
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

You'll need to calibrate your robot to ensure that the leader and follower arms have the same position values when they are in the same physical position.
The calibration process is very important because it allows a neural network trained on one robot to work on another.

### Manual calibration of follower arm

Run the following command or API example to calibrate the follower arm:


```bash
python -m lerobot.calibrate \
    --robot.type=giraffe_follower \
    --robot.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --robot.id=my_follower_arm # <- Give the robot a unique name
```

```python
from lerobot.common.robots.giraffe_follower import GiraffeFollowerConfig, GiraffeFollower

config = GiraffeFollowerConfig(
    port="/dev/tty.usbmodem585A0076891",
    id="my_follower_arm",
)

follower = GiraffeFollower(config)
follower.connect(calibrate=False)
follower.calibrate()
follower.disconnect()
```


First, we have to move the robot to the position where each joint is in the middle of its range, then we press `Enter`. Secondly, we move all joints through their full range of motion. A video of this same process for the SO101 as reference can be found [here](https://huggingface.co/docs/lerobot/en/so101#calibration-video)
