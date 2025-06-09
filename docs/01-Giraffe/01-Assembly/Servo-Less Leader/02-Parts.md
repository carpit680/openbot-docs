---
id: leader-parts
title: Parts
sidebar_label: Parts
description: Parts required before Assembly for servo-less leader arm.
keywords:
  - Parts
  - Leader Arm
  - Servo-Less Leader Arm
  - AS5600
  - OpenBot Giraffe
  - Open Source
  - Open Source Hardware
  - Open Source Robotics
  - Robotics
---

<!-- @format -->

#### 1. Servo-Less Leader Arm

| Part Name               | Quantity | Description                                                                          | Unit Cost | Buy |
| ----------------------- | -------- | ------------------------------------------------------------------------------------ | --------- | --- |
| Base                    | 4        | Houses the AS5600 board. Has four M2 screw holes matching a Feetech servo footprint. | --------- | --- |
| Shaft Holder            | 4        | Piece that sandwiches the Shaft into the Base and secures it with four M2 screws.    | --------- | --- |
| Base_2                  | 2        | Houseing for joint 5 and 6.                                                          | --------- | --- |
| Shaft                   | 4        | Holds the magnet. Press‐fits into the Base and rotates with the joint.               | --------- | --- |
| Shaft_2                 | 2        | Shaft for joint 5 and 6.                                                             | --------- | --- |
| Shaft Holder            | 4        | Piece that sandwiches the Shaft into the Base and secures it with four M2 screws.    | --------- | --- |
| Shaft_Holder_2          | 2        | Shaft Holder for joint 5 and 6.                                                      | --------- | --- |
| Idle Shaft              | 4        | Covers the rear of the Base (only for the first 4 joints—see note below).            | --------- | --- |
| M2.5 × 9.5 mm Screws    | Calc     | To fasten Shaft Holder onto Base.                                                    | --------- | --- |
| M3 x 6mm Bolts          | Calc     | To fasten Bases to links.                                                            | --------- | --- |
| 6 mm × 2 mm Disc Magnet | 6        | Press‐fits into the Shaft; oriented axially so the AS5600 sees its north/south face. | --------- | --- |
| JST 2-Pin Female Pin    | 7        | Fits at the end of Data and power wires to plug into PCB.                            | --------- | --- |
| Link 0(LINK)            | 1        | Goes below base to give Height.                                                      | --------- | --- |
| Base Link(LINK)         | 1        | Base Link connects to link 0.                                                        | --------- | --- |
| Shoulder Pan(LINK)      | 1        | Shoulder Pan connects to Base link.                                                  | --------- | --- |
| Shoulder Lift(LINK)     | 1        | Shoulder lift connects to Shoulder Pan.                                              | --------- | --- |
| Elbow(LINK)             | 1        | Elbow connects to Shoulder Lift.                                                     | --------- | --- |
| Wrist(LINK)             | 1        | Wrist connects to Elbow.                                                             | --------- | --- |
| Gripper Base(LINK)      | 1        | Gripper Base connects to Wrist.                                                      | --------- | --- |
| Gripper Finger(LINK)    | 1        | Gripper finger connects to Gripper Base.                                             | --------- | --- |
| Gripper Holder(LINK)    | 1        | Gripper holder connects to Gripper Base.                                             | --------- | --- |
| Wires                   | 4        | Four sets of wires preferably of different colours.                                  | --------- | --- |
| Micro B to A USB        | 1        | For connecting Wemos D1 mini to PC.                                                  | --------- | --- |

> **Note on Joint 5 & 6:**  
> Joints 5 and 6 do not use a Idle shaft. Instead, they use the “Twin” variant (Base_2, Shaft_2, Shaft Holder_2). These three parts snap together around the AS5600 + magnet similarly, but have a different design so that they can work without the idle shaft.

#### 2. Central PCB & Electronics (one per Leader Arm)

| Component                   | Quantity | Description                                                                                                                                                                                                                             |
| --------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Leader PCB           | 1        | Hosts an ESP8266 microcontroller (e.g., NodeMCU), a TCA9548A I²C multiplexer, and seven JST 2-pin female sockets. Powers each AS5600 and routes SDA/SCL lines. Screws into the Leader Arm exactly where the stock Bus Driver would sit. |
| ESP8266 based wemos D1 mini | 1        | Reads all AS5600 raw values via the TCA9548A and streams over USB Serial to the PC.                                                                                                                                                     |
| TCA9548A I²C Multiplexer    | 1        | Allows six AS5600 boards (same I²C address) to coexist on a single I²C bus.                                                                                                                                                             |
| JST 2-Pin Male Plugs        | 7        | One for each AS5600 in the joint and one for the power bus .                                                                                                                                                                            |

> **Power Wiring:**  
> From the PCB, a single pair of power wires (5 V and GND) run to Joint 1’s AS5600. From Joint 1, another power‐out header daisy‐chains to Joint 2’s AS5600, and so on through Joint 6. I²C lines SDA/SCL go directly from the TCA9548A port to each AS5600’s socket.

---
