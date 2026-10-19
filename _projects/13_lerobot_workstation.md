---
layout: page
title: LeRobot workstation
description: Open-source robot arms for pick-and-place and inspection, controlled by AI agents through MCP and MQTT.
period: 2026
importance: 1
img: assets/img/projects/lerobot_arms.jpg
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lerobot_arms.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Two 3D-printed LeRobot arms next to the printer that produces their parts.
</div>

**Project at Dropslab Technologies**

**Goal.** Show how low-cost, open-source robot arms can take over simple handling and inspection tasks on the shop floor, and how AI agents can control them safely.

**Approach.** We built a workstation with two 3D-printed robot arms based on the open-source LeRobot stack, several cameras and an edge computer. The arms are exposed through the Model Context Protocol (MCP), so an AI agent can call robot skills such as pick-and-place or an inspection as tools, and they report their state over MQTT like any other machine on the line.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lerobot_workstation.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The full workstation with cameras, sensor dashboard and 3D printer.
</div>

**Tools.** LeRobot, Python, MCP, MQTT, cameras, 3D printing.
