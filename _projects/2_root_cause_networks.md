---
layout: page
title: Network-based root cause analysis
description: Finding the causes of efficiency losses on a high-precision production line with network science.
period: 2025
importance: 5
img: assets/img/projects/root_cause_cpg.png
img_fit: contain
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/root_cause_cpg.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Causal process graph of the simulated production line (from the IFAC paper).
</div>

**Research project, University of Luxembourg**

**Problem.** On a high-precision production line, losses in overall equipment effectiveness have many interacting causes, and engineers need to see which station and which signal drive them.

**Approach.** Temporal multiplex recurrence networks turn sensor time series into networks whose structure shows how the machine states interact. Combined with a causal process graph of the line, this makes the root-cause analysis transparent for the engineers who act on it.

**Paper.** Saretzky, F., Engel, T., & Ansari, F. (2025). Network-based Root Cause Identification to Improve OEE in High-Precision Manufacturing. _IFAC-PapersOnLine_, 59(10), 2415–2420. [doi.org/10.1016/j.ifacol.2025.09.406](https://doi.org/10.1016/j.ifacol.2025.09.406){:target="\_blank"}

**Tools.** Python, network science, recurrence analysis, causal graphs.
