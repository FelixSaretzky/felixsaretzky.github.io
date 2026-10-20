---
layout: page
title: RULix
description: A foundation model for zero-shot remaining useful life prediction, pre-trained only on synthetic run-to-failure data.
period: 2026
importance: 3
img: assets/img/projects/rulix_card.gif
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-4 mt-3 mt-md-0 text-center">
    <img src="{{ '/assets/img/projects/rulix_cauldron.gif' | relative_url }}" class="img-fluid" style="max-width: 200px;" alt="A cauldron over a small fire; health-index curves rise from it and fall to their failure points.">
  </div>
</div>
<div class="caption">
  Like Obelix, RULix fell into the cauldron as a baby: pre-trained once on synthetic run-to-failure data, it never needs fine-tuning.
</div>

**Joint work with Andreas Pauly (TU Dortmund, equal contribution), University of Luxembourg**

**Problem.** Knowing when a machine will fail lets maintenance be planned instead of improvised. Data-driven forecasts of the remaining useful life need run-to-failure histories, but production machines rarely provide them: preventive maintenance stops degradation before failure, and fleets are small.

**Approach.** RULix is a prognostic foundation model that is pre-trained only on synthetic run-to-failure data. The prior lets a latent health index degrade as a stochastic differential equation and generates the sensor signals through structural causal graphs unrolled over time. An xLSTM encoder embeds sliding sensor windows and predicts the health state, the degradation dynamics and the remaining useful life. The model is evaluated zero-shot, without any training on the target data, on the C-MAPSS and N-CMAPSS turbofan benchmarks.


**Paper.** Saretzky, F., Pauly, A., Engel, T., & Rehof, J. RULix: A Foundation Model for Zero-Shot Remaining Useful Life Prediction. Preprint, currently under review at the 60th CIRP Conference on Manufacturing Systems (CIRP CMS 2027).

**Code.** [github.com/FelixSaretzky/RULix](https://github.com/FelixSaretzky/RULix){:target="\_blank"}

**Tools.** PyTorch, xLSTM, stochastic differential equations, structural causal models, synthetic data generation.
