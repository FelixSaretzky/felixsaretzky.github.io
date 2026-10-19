---
layout: page
title: Recognising surgical instruments
description: Object detection and data fusion that help staff pre-sort surgical instruments and pack sterilisation trays.
period: 09/2022 – 11/2022
importance: 8
img: assets/img/projects/instrument_measurement.png
img_fit: contain
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/instrument_recognition.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Demo workstation: the camera detects the instruments on the table and shows them on screen.
</div>

**Proof of concept at Dropslab Technologies for a medical technology manufacturer (September to November 2022)**

**Problem.** Before sterilisation, staff sort used surgical instruments and pack them into trays. Many instruments look almost identical: the same shape in different lengths, or the same length with only a small difference at the tip. Manual sorting is slow and error-prone.

**Data.** We built and annotated our own image data sets of the instruments:

| Data set | Classes | Images (train / val / test) | Annotation   | Augmentation                                                             |
| -------- | ------- | --------------------------- | ------------ | ------------------------------------------------------------------------ |
| v1       | 8       | 330 / 20 / 14               | bounding box | none                                                                     |
| v2       | 16      | 2,200 / 729 / 767           | bounding box | none                                                                     |
| v2 aug.  | 16      | 11,000 / 729 / 767          | bounding box | yes                                                                      |
| v3       | 16      | 11,000 / 729 / 767          | polygon      | flip, rotation, grayscale, hue, saturation, brightness, exposure, mosaic |
| v4       | 16      | 8,200 / 467 / 240           | polygon      | flip, rotation, grayscale, hue, saturation, brightness, exposure         |

**Model selection.** On the small first data set, YOLOv5 small reached 0.940 mAP@0.5 (YOLOv5 nano 0.738, YOLOv7 small 0.456), so we continued with YOLOv5. On the larger data set without augmentation it reached 0.578 mAP@0.5. Inference on an NVIDIA Jetson Nano took about 700 ms per image.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/instrument_measurement.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Data fusion: object detection classifies the instrument, a pose-based measurement adds its length and width, and together they identify the exact article in the database.
</div>

**Results and data fusion.** The detector recognised the main instrument classes reliably (100% in the final test), but only 56% of the sub-classes, and polygon annotation brought no significant gain over bounding boxes. Image-based deep learning alone cannot separate nearly identical instruments. We therefore fused several sources: the detected class, an image-based measurement of length and width (pose estimation, a pixel-to-millimetre ratio and adaptive thresholding, which makes edge detection work on reflective metal) and the article data from the database. The detector was connected to an iOS app and the warehouse system, and a demo workstation showed pre-sorting and tray packing.

**Tools.** PyTorch, YOLOv5, YOLOv7, OpenCV, NVIDIA Jetson, Intel RealSense, iOS integration.
