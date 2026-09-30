---
layout: post
title: Tabular foundation models, from my AI Austria talk
date: 2026-09-30
description: Slides, the hands-on notebook, and a reading list on tabular foundation models and what they mean for maintenance.
tags: [tabular-foundation-models, maintenance]
categories: talk
related_posts: false
---

**TL;DR.** Tabular foundation models do for tables what in-context learning does for text. You hand over labelled rows, and one forward pass answers the query rows. There is no training on your data and no hyperparameter search. This post collects the slides, the notebook and the papers from my talk at the [AI Austria GenAI Community, Codeforce Edition](https://www.meetup.com/ai-austria/events/316278162/){:target="_blank"} on 30 September 2026.

## What the talk covered

Three parts. First, what a tabular foundation model is and how it differs from a large language model. Second, why prescriptive maintenance needs more than a good prediction, and how a causal foundation model answers "what if" questions while the line stands still. Third, a live notebook in which TabICL and a random forest compete on hand-drawn data and on a maintenance benchmark.

## Slides and notebook

Slides and the hands-on notebook follow here after the talk.

## Start here

- C. Molnar: [Tabular Foundation Models](https://tabularfoundationmodels.com){:target="_blank"}, a free online book with runnable examples. The best entry point.
- N. Hollmann et al.: [Accurate predictions on small data with a tabular foundation model](https://www.nature.com/articles/s41586-024-08328-6){:target="_blank"}, Nature 2025. TabPFN v2, the paper that made the field visible.
- J. Qu et al.: [TabICLv2: A better, faster, scalable, and open tabular foundation model](https://arxiv.org/abs/2602.11139){:target="_blank"}, ICML 2026. The open model used in the notebook.
- A. Pfefferle et al.: [nanoTabPFN](https://arxiv.org/abs/2511.03634){:target="_blank"}, a TabPFN in under 500 lines that you can pre-train yourself in minutes.

## How it works

- S. Müller et al.: [Transformers Can Do Bayesian Inference](https://arxiv.org/abs/2112.10510){:target="_blank"}, ICLR 2022. Prior-data fitted networks, the idea behind all of these models.
- N. Hollmann et al.: [TabPFN: A Transformer That Solves Small Tabular Classification Problems in a Second](https://arxiv.org/abs/2207.01848){:target="_blank"}, ICLR 2023. The first tabular foundation model.
- T. Nagler: [Statistical Foundations of Prior-Data Fitted Networks](https://arxiv.org/abs/2305.11097){:target="_blank"}, ICML 2023. Why a forward pass can approximate Bayesian inference.
- J. Qu et al.: [TabICL: A Tabular Foundation Model for In-Context Learning on Large Data](https://arxiv.org/abs/2502.05564){:target="_blank"}, ICML 2025.

## Code to play with

- [TabICL](https://github.com/soda-inria/tabicl){:target="_blank"}: open weights, scikit-learn API, runs on a laptop.
- [TabPFN](https://github.com/PriorLabs/TabPFN){:target="_blank"} by Prior Labs, with the [TabPFN-3.5 technical report](https://arxiv.org/abs/2609.17895){:target="_blank"}.
- [nanoTabPFN](https://github.com/automl/nanoTabPFN){:target="_blank"} and [TFM-Playground](https://github.com/automl/TFM-Playground){:target="_blank"}: small, readable implementations to learn from.
- [modded-nanoTabPFN](https://github.com/borawhocodess/modded-nanotabpfn){:target="_blank"}: the pre-training speedrun, from 74 minutes to under one minute on one GPU ([paper](https://arxiv.org/abs/2606.03681){:target="_blank"}).
- [NVIDIA structured-data-models](https://github.com/NVIDIA/structured-data-models){:target="_blank"}: one GPU-native API for TabICLv2, Kumo Tabular, TabFM and the relational model KumoRelational, released with the [Kumo Tabular announcement](https://huggingface.co/blog/nvidia/kumo-tabular){:target="_blank"}.
- Google [TabFM](https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/){:target="_blank"}, also available in BigQuery.
- [drawdata](https://github.com/koaning/drawdata){:target="_blank"} and [marimo](https://marimo.io){:target="_blank"}, the tools behind the drawing demo.

## Benchmarks

- [TabArena](https://tabarena.ai){:target="_blank"}: the living leaderboard for tabular machine learning ([paper](https://arxiv.org/abs/2506.16791){:target="_blank"}).

## Tabular foundation models for maintenance

- R. Theiler et al.: [Towards Unified and Data-Efficient Prognostics and Health Management with Tabular Foundation Models](https://arxiv.org/abs/2606.05481){:target="_blank"}, 2026.
- C. Li et al.: [Small data challenges for intelligent prognostics and health management: a review](https://doi.org/10.1007/s10462-024-10820-4){:target="_blank"}, Artificial Intelligence Review 2024.

## From prediction to decision

- J. Robertson et al.: [Do-PFN: In-Context Learning for Causal Effect Estimation](https://arxiv.org/abs/2506.06039){:target="_blank"}, 2025.
- Y. Ma et al.: [Foundation Models for Causal Inference via Prior-Data Fitted Networks](https://arxiv.org/abs/2506.10914){:target="_blank"}, 2025.
- M. Doutreligne and G. Varoquaux: [How to select predictive models for decision-making or causal inference](https://doi.org/10.1093/gigascience/giaf016){:target="_blank"}, GigaScience 2025.

## My work

- F. Saretzky et al.: [Integrating a Causal Foundation Model into a Prescriptive Maintenance Framework for Optimising Production-Line OEE](https://arxiv.org/abs/2512.00969){:target="_blank"}, arXiv 2026.
- M. Orošnjak, F. Saretzky, S. Kędziora: [Prescriptive Maintenance: A Systematic Literature Review and Exploratory Meta-Synthesis](https://doi.org/10.3390/app15158507){:target="_blank"}, Applied Sciences 2025.
- F. Saretzky, T. Engel, F. Ansari: [Network-based Root Cause Identification to Improve OEE in High-Precision Manufacturing](https://doi.org/10.1016/j.ifacol.2025.09.406){:target="_blank"}, IFAC-PapersOnLine 2025.
- [ProductionLineSimulator](https://github.com/FelixSaretzky/ProductionLineSimulator){:target="_blank"}: synthetic production lines with causal ground truth, as used to pre-train PriMa-Causa.
