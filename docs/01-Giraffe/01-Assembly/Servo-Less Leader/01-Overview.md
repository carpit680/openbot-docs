---
id: leader_overview
title: Servo Less Leader Arm
sidebar_label: Overview
description: Overview for servo-less leader arm.
keywords:
  - OpenBot
  - Introduction
  - Overview
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

## Overview

This document provides complete instructions for using AS5600 magnetic encoders in the Leader Arm of OpenBot Giraffe. It includes detailed assembly instructions for the 3D-printed encoder casings, wiring to the custom PCB with ESP8266 based wemos D1 mini and TCA9548A I²C multiplexer, calibration procedures, and steps to verify functionality. It also includes the teleoperation process to control the follower arm using the leader's live angle data.

<div style={{ display: "flex", gap: "16px" }}>
  <img
    src="/img/leader_render.jpeg"
    alt="Follower Render"
    style={{ width: "50%" }}
  />
  <img
    src="/img/leader.jpg"
    alt="Follower Render"
    style={{ width: "50%" }}
  />
</div>

---

### A. Introduction

Instead of using Feetech servo motors on the Leader Arm, we’ve designed a 3D‐printable casing that houses an AS5600 magnetic‐encoder to act as a “dummy servo.” By mounting the AS5600 in a housing that has the same mounting dimensions as the Feetech motor, each joint on the Leader Arm uses a miniature Hall-effect sensor to measure absolute angular position with 12-bit precision. The advantages include:

- **Cost Savings:** AS5600 boards + magnets cost a fraction of a servo motor.
- **Compactness:** The casing mimics the footprint of the Feetech servo, so no change in mechanical linkage or link lengths.
- **Precision** Each joint has a 12 bit resolution, thus giving same amount of precision as a feetch servo.
- **Back‐drivability:** Since there is no gearbox, the joint is freely back‐drivable if pushed by an external force.

Each Leader Arm joint (6 total joints) will get its own AS5600 “servo casing,” wired back to a central I²C multiplexer + micro-controller.
