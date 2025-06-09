---
id: leader-precheck
title: Prechecks
sidebar_label: Prechecks
description: Prechecks required before Assembly for servo-less leader arm.
keywords:
  - Prechecks
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

### Pre‐Assembly Checks

## Tools Required

- Screwdriver (Specify Bits)
- Soldering Iron and Wire
- Flush Cutter

## Printing the Parts

A variety of 3D printers are acceptable to print the parts necessary of the follower and leader arm. Follow the steps below to ensure a good print.

### Step 1: Choose a Printer

The STL files provided are ready to print on many FDM printers. Below are the tested and suggested settings though others may work.

1.  Material: PLA+
2.  Nozzle Diameter and Precision: 0.4mm nozzle diameter at 0.2mm layer height or 0.6mm nozzle at 0.4mm layer height.
3.  Infill Density: 15%
4.  Sample Printers: [Prusa MINI+](https://www.prusa3d.com/product/original-prusa-mini-semi-assembled-3d-printer-4/), [UP Plus 2](https://shop.tiertime.com/product/tiertime-up-plus-2-3d-printer/), [Creality Ender 3](https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6/), [Bambu Lab A/P/X-series](https://bambulab.com)

### Step 2: Set up the Printer

1.  Ensure that the printer is calibrated and the bed level is correctly set using the printer specific instructions.
2.  Clean the print bed, making sure it is free from dust, or grease. If cleaning the bed using water, or other liquid, dry the bed.
3.  If your printer recommends it, use a standard glue stick and apply a thin, even layer of glue across the print area of the bed. Avoid clumping or uneven application.
4.  Load the printer filament using printer specific instructions.
5.  Ensure the printer settings match the ones suggested above (most printers have multiple settings so choose the ones that most closely match).
6.  Set for supports everywhere but ignore slopes greater than 45 degrees to the horizontal.
7.  There should be no supports in the screw holes with horizontal axes.

### Step 3: Check Printer Accuracy

1.  In the [Gauges](STL/Gauges) folder, there are two types of gauges, one to check the size of print against a standard 4x2 lego block and one against a STS3215 servo.
    1. If you have a STS3215 servo, print:
       1. [Gauge Zero](STL/Gauges/Gauge_0.STL)
       2. [Gauge Tight](STL/Gauges/Gauge_tight_1.STL)
    2. If you have a standard lego block, print:
       1. [Gauge Zero](STL/Gauges/Lego_Size_Test_02_zero.STL)
       2. [Gauge -0.1](STL/Gauges/Lego_Size_Test_02_minuspoint1.STL)
2.  Test the gauge 0 against your given object (Lego or Servo). The fit should be similar to this [tutorial](https://youtu.be/dss8E3DG2rA).
3.  If the fit is appropriate, go onto Step 4, otherwise, change your printer settings and try again or create an issue.

### Step 4: Print the Parts

All the parts for the leader are for easy 3D printing already contained in a **single file**(LINK), correctly orientated for z upwards to minimize supports.
