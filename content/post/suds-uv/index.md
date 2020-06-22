---
title: 'The design of a UV-C Tower for Point-of-Care Decontamination of Personal Protective Equipment'
subtitle: 'The SUDS (Synchronous UV Decontamination System) is a tool that can deliver more than $4J/cm^2$ of UV energy to N95 masks and other facepiece Respirators that healthcare workers and clinicians use during the care of those infected by nCoV-2019. It is rapidly deployable, safe, and easy for healthcare workers in the front line to take adcantage of. I believe that it will be better than re-using masks in the setting of mask shortages.'
summary: This is a tool that can help frontline healthcare workers decontaminate their masks and other protective gear of virus particles in the setting of the COVID-19 pandemic.
authors:
tags:
- medicine
- hardware
categories: []
date: "2020-06-22T00:00:00Z"
lastmod: "2020-06-22T00:00:00Z"
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

In the face of rampant mask shortages within the healthcare environment due to the COVID-19 pandemic, a group of us at the lab met with with Case Western Reserve's think[box] to create something that could help our colleagues at the front lines: a device that can perform point-of-care decontaminations of the masks quickly, cheaply, and effectively.

{{< gallery >}}

#### A bit of background: 
Our reserves of Filtering Facepiece Respirators (FFRs) are running low because clinicians need to use them in every interaction with nCoV-2019 positive patients within acute care settings. Other types of barrier protection are simply insufficient since aerosolization of virus particles during procedures (like intubation) can bypass lesser respirators. As the number of patients infected with nCoV-2019 continues to rise, healthcare workers have been urged to reuse their masks to limit shortage at the expense of their own safety. This response has been especially severe in large community and rural health centers who have to accommodate large patient volumes and don't have robust equipment supply chains respectively.

The CDC has offered guidance to hospitals regarding safe reuse of FFRs in a [bulletin](https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/decontamination-reuse-respirators.html). Research into a variety of decontamination methods is effective summarized but vaporous hydrogen peroxide (VHP), ultraviolet germicidal irradiation (UVGI), and moist heat are noted to be the most promising methods for decontamination. Due to dose-independence, mask tolerance, and efficacy ( $>10^6$ reduction in virus particles), many hospitals have chosen vaporous hydrogen peroxide as their decontamination method. However, this method is most suited for applications of scale where the safety of generating cold vapors of hydrogen peroxide can be assured.

{{< figuresimp src="bsc.jpg" alt="BSC" position="right" style="float: right;width: 30%;padding: 0px;" >}}

UVGI is not without its own caveats. UV energy is readily dispersed by air and many UV bulbs tend to degenerate significantly over time. As a byproduct, manufacturer bulb specifications rarely indicate real-world UV performance unless the bulb is new. However, our fascination arose when we noticed that UV is easier to implement and therefore easier to deploy en masse. Looking around the lab, we found many idle biosafety cabinets (such as the one to the right), fitted with UV lights, and un-used due to lockdown measures. After some measurements at a couple of our cabinets, we published a [pre-print]({{< ref "publication/uv_preprint/index.md" >}}) to help medical centers with idle biosafety cabinets disinfect their masks. From our calculations, if masks are left at the base of the work area, 4.3 hours of exposure per side are required to reach $1J/cm^2$ and meet CDC recommendations.

Looking further, we wanted a way to reduce both decontamination time and produce a way for healthcare workers to do ad hoc decontaminations on their floors and units. 

## Engineering

We started with a design where users would drop their used masks into the machine where it would be moved with a conveyor belt to an outlet during which it would be exposed to UV irradiation on both sides of the masks.

{{< figure src="conveyorbelt.jpg" alt="BSC" position="right" caption="Initial conveyor belt design" width="400px">}}


## Efficacy

We have been trying to make it as easy as possible for people to get their hands on the designs and impliment the box themselves. We have released the designs and results of the testing that we did on Github. 
