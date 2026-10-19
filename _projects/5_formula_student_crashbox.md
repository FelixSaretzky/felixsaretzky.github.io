---
layout: page
title: Formula Student crash box
description: An aluminium impact attenuator for a Formula Student race car, simulated in LS-DYNA.
period: 2019
importance: 3
img: assets/img/projects/crashbox.gif
category: simulation
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/crashbox_model.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Finite element model of the aluminium crash box.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/projects/crashbox.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Impact test in LS-DYNA: the 300 kg impactor crushes the crash box.">
  </div>
</div>
<div class="caption">
  Impact test in LS-DYNA: the 300 kg impactor crushes the crash box.
</div>

**Saarland University Formula Student team (2019)**

**Task.** A Formula Student car needs an impact attenuator that absorbs the energy of a frontal impact within the limits set by the competition rules.

**Approach.** We developed an aluminium crash box and simulated the impact test with a 300 kg rigid impactor in LS-DYNA: solid mesh, piecewise linear plasticity, automatic contacts between impactor, crash box and ground, and boundary conditions that leave the impactor free only in the direction of impact.

**Tools.** LS-DYNA, LS-PrePost.
