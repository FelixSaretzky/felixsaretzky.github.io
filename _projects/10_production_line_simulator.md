---
layout: page
title: Production Line Simulator
description: A parametric production-line simulator with known causal structure, built as ground truth for causal machine learning.
period: 2023 – 2026
importance: 4
img: assets/img/projects/production_line_simulator.png
img_fit: contain
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/production_line_simulator.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example causal process graph: sensors grouped by station, with the causal links between them.
</div>

**Part of my Ph.D. at the University of Luxembourg**

**Problem.** Causal estimates on real production data cannot be checked, because the true effect of a maintenance action is never observed. Without ground truth it is impossible to say whether a causal model is right.

**Approach.** The simulator generates production lines as causal process graphs: stations, sensors and the causal links between them, with configurable structure and data conditions. Because the mechanism is known, it returns the true effect of every intervention, and new tasks can be generated at will. It served as the evaluation ground truth for PriMa-Causa.

**Code.** [github.com/FelixSaretzky/ProductionLineSimulator](https://github.com/FelixSaretzky/ProductionLineSimulator){:target="\_blank"}. The source code will be published once the dissertation is out.

**Tools.** Python, structural causal models, synthetic data generation.
