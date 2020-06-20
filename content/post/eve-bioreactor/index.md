---
title: 'A low-cost, open source, self-contained bacterial EVolutionary biorEactor (EVE)'
subtitle: 'The EVolutionary biorEactor is a tool to study the evolution of drug resistance in bacteria. The paths that identical organisms take to achieve resistance to the same drug differs due to the inherent randomness of evolution. By monitoring the phenotypes (and potentially also genotypes) of multiple cultures grown in similar conditions, we can get an idea of which evolutionary paths occur most frequently and target drugs consequently.'
summary: The EVolutionary biorEactor is a tool to study the evolution of drug resistance in bacteria.
authors:
- vishhvaan
tags:
- medicine
- software
- hardware
categories: []
date: "2016-04-20T00:00:00Z"
lastmod: "2019-04-17T00:00:00Z"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: ''
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

# Set captions for image gallery.
---
The fine details of an evolving population’s journey to drug resistance is typically lost in experiments where only the start and end of this journey are investigated thoroughly. Morbidostats and other bioreactors are a way to counter this dilemma by following the population’s changes closely over time. These machines can  monitor one (or several) optical parameters of a culture to gain insights into growth as well as precisely control the concentration of drug inside of this culture. Questions about population dynamics and evolution are particularly suited for these bioreactors. For instance, in a high-throughput version of the machine, evolutionary replicates of the same experiment can be used to test the repeatability of a particular evolutionary process.

Automated culture devices are difficult to build for many labs dedicated to biological or computation questions due to the large capital needed to develop a system from scratch that is comparable to those described in literature. This unmet need both outside and within our lab (Theory Division) was the rationale behind engineering an open source framework for a system of bioreactors controlled by one microcomputer. Taken together, this system is dubbed the EVolutioary biorEactor (EVE) and we’ve described it in this paper found in bioRxiv. While meant to help scientists answer biological questions, the system also has the added benefit of introducing students (high-school or college) to concepts of evolution. We envisioned interdisciplinary teams of students working together to construct the machine, install the software, and run growth experiments on harmless strains of E. coli. This practical knowledge and sense of building open source technology can be useful tools students can apply regardless of their field of interest. 

With a system of bioreactors, we can run multiple experiments simultaneously or the same experiment many times. These bioreactors, which we call culture units (CUs), and accessory electronics are controlled by a circuit board which in turn is controlled by a singular Raspberry Pi. This paradigm keeps costs low while allowing for flexibility of both the hardware and the software. 

While the system is installed on Linux and primarily uses Python to perform all its functions, we wanted non-programmers and less computer-savvy users to be able to install the software painlessly. For maximal functionality, we implemented a web interface that can be accessed by many users. Furthermore, during experiments, users can also navigate to a plot server (run with Dash by plotly) to see how their experiments are progressing. The CU hardware addresses and experimental parameters can be defined by the configuration file. This file can be edited through the web interface or through the Linux command line with the configuration editor. The software is completely open source and can be found  with instructions on the GitHub. 

We define clear protocols and hardware to setup experiments within the paper. These protocols were inspired by those of the Kishony and Khalil lab. Pictures of the completed components are useful for users attempting to build the hardware themselves.

We demonstrate basic triplicate bacterial growth curves along with temperature sensor data during the experiment. This is an easy experiment for students to perform and is also useful as a test of the hardware prior to performing experiments.

The experiment utilizes ampicillin as the selective agent in the EVE. This experiment is remarkable since it clearly demonstrates the development of resistance to ampicillin over the course of three days. This experiment demonstrates the control algorithm proposed by the Toprak paper. Other selection algorithms are also available within the software.

My lab and I believe that this framework will allow many scientific groups and students to learn about evolution through the lens of biotechnology. The open source nature of the project encourages collaboration and shared development between all the users of the system. The hardware and software design will continue to improve over time as users continue to use and modify this framework to answer their specific scientific questions.

