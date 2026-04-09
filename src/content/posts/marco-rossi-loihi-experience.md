---
title: "My Experience Working with Intel Loihi at INI"
date: 2024-03-15
author: marco-rossi
summary: Reflections on using neuromorphic hardware for my thesis project — the surprises, the debugging, and why event-driven computing is the future.
tags: [neuromorphic, hardware, thesis]
---

Working with Intel Loihi for my thesis was one of the most rewarding (and frustrating) experiences of my time at INI. Here are some thoughts for anyone considering neuromorphic hardware for their project.

## Getting Started

The learning curve is steep. Forget everything you know about PyTorch — Lava (Intel's neuromorphic framework) thinks in terms of processes and message passing, not tensors and backprop. Budget at least two weeks just to get comfortable with the paradigm.

## The Surprises

What surprised me most was the power efficiency. Running our spiking network on Loihi consumed **10x less energy** than the GPU equivalent. For robotics applications where you need real-time control on a power budget, this is a game-changer.

## Debugging Tips

If your spikes look wrong, check your refractory periods first. I lost a full week to a bug where my refractory period was set to 1 timestep instead of 10 — the network was firing way too fast and the downstream neurons couldn't keep up.

## Would I Recommend It?

Absolutely, but go in with realistic expectations. It's research-grade hardware, not a polished dev kit. Talk to the Sensors Group early — they have institutional knowledge that will save you weeks.
