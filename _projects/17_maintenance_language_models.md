---
layout: page
title: Language models for maintenance
description: An offline assistant that answers operators' maintenance questions from machine documentation, with small models that run on site.
period: 2024
importance: 6
img: assets/img/projects/maintenance_chatbot.png
img_fit: contain
category: machine learning
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/maintenance_chatbot.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Offline prototype: the assistant summarises a machine's safety and maintenance manual.
</div>

**Project with IMAtec and Dropslab Technologies**

**Problem.** When a machine stops, the knowledge to fix it is spread over manuals, alarm lists, maintenance logs and the experience of a few technicians. Cloud chatbots are often not an option, because machine and process data must not leave the plant.

**Approach.** I built an offline assistant that indexes machine documentation with LlamaIndex and answers operators' questions locally, and fine-tuned small language models on maintenance data so that they run on site. The assistant is meant to work together with the failure forecasts: when a forecast crosses its threshold, the explanation of the forecast and the documentation are combined into concrete steps for the operator.

**Tools.** Python, LlamaIndex, small language models, QLoRA fine-tuning, Streamlit.
