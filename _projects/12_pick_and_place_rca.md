---
layout: page
title: "Supervision: Pick-and-place simulation for root cause analysis"
description: A master's thesis that built a simulated assembly line to test root cause methods with known faults.
period: 2024
importance: 2
img: assets/img/projects/pick_and_place.gif
category: teaching and supervision
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="{{ '/assets/img/projects/pick_and_place.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Two delta robots pick parts from three conveyors in the simulated assembly line.">
  </div>
</div>
<div class="caption">
  Simulated assembly line with two delta robots and three conveyors (CoppeliaSim). Image: J. F. Brás Loureiro.
</div>

**Master's thesis and technical report by José Francisco Brás Loureiro, University of Luxembourg (2024). I supervised the thesis, with Prof. Dr. Thomas Engel as academic supervisor.**

**Problem.** Data-driven root cause methods are mostly tested on IT systems or synthetic data. On a real production line you can observe faults, but you cannot trigger them on purpose to see whether a method finds the cause.

**Approach.** The student built a pick-and-place assembly line in CoppeliaSim with two delta robots, three conveyors, cameras and an end-of-line quality check, with realistic noise on part sizes, air supply, robot speed and conveyor speed. Faults such as an air leak or an out-of-tolerance part are injected as interventions, which gave 64 interventional and 8 normal runs. Four root cause methods from PyRCA were compared on an expert causal graph.

**Results.** The best method (hypothesis testing) ranked the true cause first in 75% of the cases within about 200 ms, and stayed robust when edges were missing from the causal graph. The time lag between products on the line turned out to be the main challenge.

**Code.** [github.com/brjo0501/Master-Thesis_Code](https://github.com/brjo0501/Master-Thesis_Code){:target="\_blank"}

**Tools.** CoppeliaSim, Python, ZeroMQ, PyRCA, causal-learn.
