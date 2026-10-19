---
layout: page
title: CFD case studies
description: Four flow and heat transfer cases in ANSYS Fluent and CFX, from meshing to validation.
period: 2019
importance: 4
img: assets/img/projects/cfd_case.gif
category: simulation
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/cfd_mesh.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Mesh of one of the flow cases in ANSYS.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/projects/cfd_case.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Transient simulation of a brake disk heating up (ANSYS).">
  </div>
</div>
<div class="caption">
  Transient simulation of a brake disk heating up (ANSYS).
</div>

**Course projects, Saarland University of Applied Sciences (2019)**

**Cases.**

- Charge air cooler: steady, compressible flow with a porous-media model.
- Brake disk: transient simulation with rotating parts and heat transfer.
- Counter-flow heat exchanger: conjugate heat transfer, with the simulated heat flux checked against a hand calculation.
- Kitchen extractor hood: a rotating fan modelled with a moving reference frame.

**Methods.** Structured and unstructured meshing with boundary layers, RANS turbulence modelling (realizable k-ε) with wall treatment based on y+, coupled solver settings, batch runs from journal files, and post-processing of transient results.

**Tools.** ANSYS ICEM CFD, Fluent, CFX, CFD-Post.
