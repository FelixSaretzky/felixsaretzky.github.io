---
layout: page
title: Image anomaly detection
description: Comparing unsupervised anomaly detection and supervised classification for visual quality checks on a high-speed line.
period: 2023
importance: 7
img: assets/img/projects/anomaly_heatmap.png
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/anomaly_heatmap.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Anomaly heat map: the model highlights where a product deviates from the good examples.
</div>

**Project with IMAtec, University of Luxembourg**

**Problem.** Products on a high-speed line have to be checked for shape defects at several stations, with a result in less than 100 ms. Defect types such as deformed or crushed shapes are rare and hard to define precisely.

**Approach.** I compared classical image processing (thresholds, image gradients, histograms) with unsupervised anomaly detection that learns from good and bad examples without pixel labels (PaDiM, STFPM and PatchCore via Anomalib), a supervised YOLOv5 classifier, and ResNet50 features with a support vector machine. t-SNE projections of the image features showed which defect classes separate cleanly and which need a sharper quality definition.

**Results.** PaDiM localised the defects with only a few hundred training images on a laptop CPU. The YOLOv5 classifier reached 93.8% top-1 accuracy over four classes at 73 ms per image on a CPU, within the time budget. The analysis also showed that some defect classes need a geometric quality definition, such as the measured area and parallelism of the shape, before a model can learn them reliably.

**Tools.** PyTorch, Anomalib, YOLOv5, ResNet50, scikit-learn, OpenCV.
