---
id: leader-calibration
title: Calibration
sidebar_label: Calibration
description: Calibration of servo-less leader arm for offsets and slopes.
keywords:
  - Calibration
  - Leader Arm
  - Servo-Less Leader Arm
  - AS5600
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Software
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

> NOTE: _Lerobot installation required. For instructions, refer to [Lerobot Setup](/docs/Giraffe/LeRobot/lerobot_setup)._

Do the same steps as the [follower arm](/docs/01-Giraffe/01-Assembly/Follower/06-Calibration.md) to calibrate the leader arm, run the following command or API example:

<hfoptions id="calibrate_leader">
<hfoption id="Command">

```bash
python -m lerobot.calibrate \
    --teleop.type=giraffe_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_leader_arm # <- Give the robot a unique name
```

</hfoption>
<hfoption id="API example">

```python
from lerobot.common.teleoperators.giraffe_leader import GiraffeLeaderConfig, GiraffeLeader

config = GiraffeLeaderConfig(
    port="/dev/tty.usbmodem58760431551",
    id="my_leader_arm",
)

leader = GiraffeLeader(config)
leader.connect(calibrate=False)
leader.calibrate()
leader.disconnect()
```

</hfoption>
</hfoptions>
