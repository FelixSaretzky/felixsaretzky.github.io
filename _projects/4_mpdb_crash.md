---
layout: page
title: Euro NCAP MPDB crash simulation
description: Setting up the 2020 Euro NCAP barrier test in LS-DYNA and comparing it with car-to-car crashes.
period: 04/2019 – 08/2019
importance: 2
img: assets/img/projects/mpdb_crash.gif
category: simulation
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="{{ '/assets/img/projects/mpdb_crash.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Simulated car-to-car crash">
  </div>
</div>
<div class="caption">
  Simulated 50% offset car-to-car crash of the Toyota Yaris and Honda Accord models.
</div>

**Student project (team of three), Saarland University of Applied Sciences, with Toyoda Gosei Europe (2019)**

**Question.** From 2020, Euro NCAP replaced the frontal offset test with the mobile progressive deformable barrier (MPDB). Does a crash into this barrier represent a real crash between two cars?

**Approach.** We set up the MPDB test in LS-DYNA (explicit, MPP) with public finite element models of a Toyota Yaris and a Honda Accord. We first verified the barrier model against reference force-displacement data, then ran rigid-wall, MPDB and 50% offset car-to-car crashes at 50 km/h. Every run was checked for energy balance (kinetic, internal and hourglass energy) and added mass, with runtimes of 20 to 100 hours on up to 32 cores.

**Results.** The MPDB reproduces a car-to-car crash with a moderate deviation when both cars have a similar mass and front structure, and deviates more when they do not. As part of the project we also prepared an LS-DYNA crash-box exercise for teaching.

**Tools.** LS-DYNA, LS-PrePost, Linux workstation (CentOS).
