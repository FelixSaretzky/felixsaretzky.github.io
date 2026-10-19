---
layout: page
title: Composite airbag case
description: A woven glass-fibre/PA6 case that replaces a steel knee-airbag case at half the mass, designed with explicit LS-DYNA simulation.
period: 12/2019 – 03/2020
importance: 1
img: assets/img/projects/airbag_case.png
category: simulation
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/airbag_case.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Explicit LS-DYNA simulation of the simplified composite case under the airbag deployment load.
</div>

**Bachelor's thesis, Saarland University of Applied Sciences, with Toyoda Gosei Europe (2020)**

**Question.** Can a knee-airbag case made of a woven glass-fibre/PA6 hybrid-yarn composite replace the deep-drawn steel case, even though the deployment of the airbag loads it within milliseconds?

**Approach.** No material data existed for the new fabric, so I developed the composite material model myself: a continuum damage model (LS-DYNA MAT58) with parameters derived from micromechanics, and evaluated it in the simulation. With explicit LS-DYNA simulations of the full deployment I compared laminate layups, checked failure indices for every layer and limited the opening of the case under load.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/airbag_case_failure.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Critical failure direction in the composite layers: in-plane shear, transverse or longitudinal.
</div>

**Results.** A quasi-isotropic layup reached about half the mass of the steel case without component failure and within the deformation limit. A thinner, lighter layup failed the deformation limit, which marked the boundary of the design space.

**Tools.** LS-DYNA (explicit, implicit modal analysis), composite damage modelling, CATIA.
