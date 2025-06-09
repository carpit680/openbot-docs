---
id: leader-assembly
title: Assembly
sidebar_label: Assembly
description: Assembly instructions for servo-less leader arm.
keywords:
  - Assembly
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

### A. Sensor Casing Step‐by‐Step (Per Joint)

> - Solder the power and data wires to all the sensors before assembly.
> - Repeat this process for each of Joints 1 through 6—using the “Base” & “Back Cap” set for Joints 1–4 and the “Twin Base” set for Joints 5–6.

1. **Create the AS5600 Wire loom and PCB**

   - 🔗 _[PhotoPlaceholder: “AS5600 Wire Loom”]_
   - Solder a set of wires directly to SCL and SDA that end in a 2 pin JST male connector with an increase in wire length after each AS5600.
   - Daisy-chain the 5 V and GND lines: one set starts with 2 pin JST male connector, before entering Joint 1 branch off, one set enters joint 1 another set movess toward Joint 2, and so on through Joint 6 ![Alt text](/img/wire_loom.jpg)  .
   - Solder the seven 2 Pin JST Female connectores, Wemos D1 mini, and I2C Mux to the PCB or into a vero Board according to the following Schematic ![Alt text](/img/Leader_Circuit_Diagram.png) .

2. **Insert the AS5600 into the Base**

   - 🔗 _[PhotoPlaceholder: “AS5600 board seated in Base, wires exiting rear”]_
   - Align the AS5600’s edges so it sits flush inside the Base pocket.
   - Ensure that the orientation of AS5600 is as shown in image in respect to the base.

3. **Fit the Disc Magnet into the Shaft**

   - 🔗 _[PhotoPlaceholder: “Press-fit magnet into Shaft, ensuring correct polarity (north face out)”]_
   - The flat face of the 6 × 2 mm disc magnet should be oriented so the AS5600 sees the correct face (north/south) when the Shaft is inserted.
   - Verify magnet sits flush; do not let magnet protrude beyond the Shaft’s edge.

4. **Insert the Shaft into the Base**

   - 🔗 _[PhotoPlaceholder: “Shaft (with magnet) slid into Base, seated and rotating freely”]_
   - Gently slide the Shaft straight into the Base’s central bore until the magnet hovers ~1–2 mm above the AS5600’s sensor face.
   - Rotate by hand; it should spin smoothly without any jerks.

5. **Mount the Shaft Holder**

   - 🔗 _[PhotoPlaceholder: “Shaft Holder positioned over Base, aligning with six mounting pins”]_
   - Align the four M2 screw holes in the Shaft Holder with the threaded inserts in the Base.
   - Confirm the Shaft still rotates freely before tightening.

6. **Fasten M2 Screws**

   - 🔗 _[PhotoPlaceholder: “Close-up of M2 screws fastening Shaft Holder to Base”]_
   - Using a 1.5 mm hex driver, tighten the four M2.5 × 9.5 mm screws snugly.
   - Check that no wires are pinched around the edges.

7. **Attach the Back Cap** (only for Joints 1–4)

   - 🔗 _[PhotoPlaceholder: “Back Cap pressed into place over Base’s rear, snapping or screwing into position”]_
   - Snap the Back Cap onto the rear of the Base to fully enclose the AS5600.
   - Confirm the wires from the AS5600 protrudes out the designated slot in the Base.

8. **Verify Magnet–Sensor Alignment**

   - 🔗 _[PhotoPlaceholder: “Hand rotating Shaft while watching AS5600 raw counts on a UART terminal”]_
   - Connect this joint’s 2-pin JST plug to a TCA9548A port on the Leader PCB.
   - On the ESP8266, run a quick test script to stream raw AS5600 values over Serial—rotate the Shaft 0–360° and ensure readings change smoothly from 0 to 4095 (12-bit range).
   - If you see “jumps” or the magnet hits the sensor, disassemble and check for any assembly errors.

9. **Mount Casing onto Leader Link**

   - 🔗 _[PhotoPlaceholder: “AS5600 Base screwed into Leader Arm link using four M2 screws (same holes as Feetech servo)”]_
   - Remove the Feetech servo (if installed) from this joint’s link.
   - Align the four M2 screw holes in the Base with the existing servo mounting holes on the link.
   - Fasten four M2.5 × 9.5 mm screws to secure the Base directly to the link.
   - Verify that the Shaft’s splined output shaft is oriented correctly so the joint linkage can grab it (mimicking the old servo horn).

10. **Route Wires to Central PCB**

    - 🔗 _[PhotoPlaceholder: “Wire harness after connecting Joint 1’s JST plug to Leader PCB; remaining wires daisy-chain to Joints 2–6”]_
    - Each AS5600’s 2-pin JST plug (SDA/SCL) plugs into a separate TCA9548A channel on the PCB.
    - The Power wire jst pin plugs into the PCB.
    - Bundle wires with zip ties or spiral wrap to keep the arm tidy.

11. **Repeat for All Joints**
    - Perform Steps 1–9 for Joints 1 through 6.
    - For Joints 5–6, use the “Base_2” / “Shaft_2” / “Shaft Holder_2” parts (no Idle Shaft). Ensure the same magnet orientation and clearances.

---

### B. Electronics & Wiring

1. **Soldering & Connections**

   - Each AS5600 breakout board should already have four wires (VCC = 5 V, GND, SDA, SCL) soldered, ending in a 2-pin JST female connector.
   - The Leader PCB has six female 2-pin JST sockets labeled `Joint1` through `Joint6`. Plug each joint’s AS5600 in accordingly ![Alt text](/img/PCB.jpg) ![Alt text](/img/PCB_schematic.jpeg).

2. **I²C Multiplexer (TCA9548A)**

   - Channels 2–7 correspond to Joints 1–6.
   - Confirm `SDA` & `SCL` on the PCB route through the TCA9548A to the ESP8266’s I²C pins (D1 = SCL, D2 = SDA).

3. **ESP8266 Setup**
   - Flash the provided firmware (in the `Arduino/Leader` folder of the OpenBot branch) onto the ESP8266. This firmware:
     - Cycles through each TCA9548A channel (Joint 1 → Joint 6), reads raw AS5600 counts, converts to degrees, and sends over Serial at 115200 baud.
   - Connect the ESP8266’s USB port (Micro-USB) to the PC. It appears as `/dev/ttyUSBx` (Linux) or `COMx` (Windows).

---
