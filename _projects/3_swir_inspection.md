---
layout: page
title: Inspecting invisible adhesive joints
description: Short-wave infrared imaging and deep learning for quality checks in high-speed manufacturing.
period: 01/2022 – 07/2022
importance: 9
img: assets/img/projects/swir_inspection.png
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/swir_inspection.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Adhesive line between two layers of organic material, made visible in the short-wave infrared.
</div>

**Master's thesis, University of Luxembourg, with IMAtec (2022)**

**Problem.** In high-speed packaging production, an adhesive line between two organic materials has to be checked within milliseconds and without damaging the fragile product. In visible light the glue line cannot be seen.

**Approach.** Transmittance tests on the materials showed two absorption minima in the infrared. Based on them I built two measurement setups: a cheap one that simulates a backlight with a wavelength conversion foil, and one with an InGaAs camera in the short-wave infrared (SWIR) range, where the adhesive line appears with clear contrast. On an augmented industrial data set I trained and compared two single-stage object detectors, YOLOv5 and YOLOR, on the university's HPC cluster (NVIDIA V100).

**Results.** Both setups make the adhesive line measurable. YOLOv5 reached 51.3 mAP@0.5 at 12.5 ms per image and was faster and more accurate than YOLOR on this data.

**Tools.** PyTorch, YOLOv5, YOLOR, Roboflow, SWIR and industrial cameras, HPC.
