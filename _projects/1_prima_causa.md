---
layout: page
title: PriMa-Causa
description: A causal foundation model that ranks maintenance actions by their effect on production-line performance.
period: 02/2023 – 09/2026
importance: 2
img: assets/img/projects/prima_causa.png
img_fit: contain
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/prima_causa.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The PriMa-Causa loop: an operational problem at the machine becomes a formal causal query, the model estimates the effect of each action, and the operator receives a ranked action.
</div>

**Ph.D. project, University of Luxembourg, with IMAtec and TU Wien (2023 to 2026)**

**Problem.** Maintenance decisions need the effect of an action, not a forecast. Production data are observational, so a model can predict accurately and still recommend the wrong action, and classical causal estimators need a dedicated study for every case.

**Approach.** PriMa-Causa is a tabular causal foundation model: a transformer that is pre-trained once on one million synthetic tasks generated from structural causal models. It answers a new "what if" question in a single forward pass and returns a full predictive distribution. A parametric production-line simulator provides the true effect of every intervention, so the model can be checked against known ground truth. Process knowledge can be added in three levels, from no graph to a fully known process graph.

**Results.** PriMa-Causa chooses maintenance actions with a lower decision error than predictive baselines, most clearly when data are sparse and overlap is weak. A partially known process graph reduces the error further, and the model transfers to real industrial data without retraining.

**Paper.** Saretzky, F., Andersen, L., Engel, T., & Ansari, F. (2026). Integrating a Causal Foundation Model into a Prescriptive Maintenance Framework for Optimising Production-Line OEE. _Procedia CIRP_, 146, 78–83. [doi.org/10.1016/j.procir.2026.03.207](https://doi.org/10.1016/j.procir.2026.03.207){:target="\_blank"}

**Thesis.** The full dissertation is available on arXiv ([arxiv.org/abs/2610.31147](https://arxiv.org/abs/2610.31147){:target="\_blank"}) and in ORBilu, the University of Luxembourg repository ([orbilu.uni.lu/handle/10993/69383](https://orbilu.uni.lu/handle/10993/69383){:target="\_blank"}).

**Code.** [github.com/FelixSaretzky/PriMaCausa](https://github.com/FelixSaretzky/PriMaCausa){:target="\_blank"}. The source code, training configuration and pre-trained weights will be published once the dissertation is out.

**Tools.** PyTorch, synthetic data generation, TabPFN, TabICL, DoWhy, EconML.
