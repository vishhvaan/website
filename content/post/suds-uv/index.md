---
title: 'The design of a UV-C Tower for Point-of-Care Decontamination of Personal Protective Equipment'
subtitle: 'The SUDS (Synchronous UV Decontamination System) is a tool that can deliver more than $2J/cm^2$ of UV energy per minute to N95 masks and other facepiece Respirators that healthcare workers and clinicians use during the care of those infected by nCoV-2019. It is rapidly deployable, safe, and easy for healthcare workers in the front line to take advantage of. This system offers an alternative to potentially hazardous reuse of masks in the setting of shortages.'
summary: This is a tool that can help front-line healthcare workers decontaminate their masks of virus particles in the setting of the COVID-19 pandemic where mask shortages are widespread.
authors:
tags:
- medicine
- hardware
- maker
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
Our reserves of Filtering Facepiece Respirators (FFRs) are running low because clinicians need to use them in every interaction with nCoV-2019 positive patients within acute care settings. Other types of barrier protection are simply insufficient since aerosolization of virus particles during procedures (like intubation) can bypass lesser respirators. As the number of patients infected with nCoV-2019 continues to rise, healthcare workers have been urged to reuse their masks to limit shortage at the expense of their own safety. This response has been especially severe in large community and rural health centers who accommodate large patient volumes and don't have robust equipment supply chains respectively.

The CDC has offered guidance to hospitals regarding safe reuse of FFRs in a [bulletin](https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/decontamination-reuse-respirators.html). Research into a variety of decontamination methods is effective summarized but vaporous hydrogen peroxide (VHP), ultraviolet germicidal irradiation (UVGI), and moist heat are noted to be the most promising methods for decontamination. Due to relative dose-independence, notable mask tolerance, and rapid efficacy ( $>10^6$ reduction in virus particles after one cycle), many hospitals have chosen vaporous hydrogen peroxide as their decontamination method. However, this method is most suited for applications of scale where the safety of generating cold vapors of hydrogen peroxide can be assured.

{{< figuresimp src="bsc.jpg" alt="BSC" position="right" style="float: right;width: 30%;padding: 0px; min-width: 200px; " >}}

UVGI is not without its own caveats. UV energy is readily dispersed by air and many UV bulbs tend to degenerate significantly over time. As a byproduct, manufacturer bulb specifications rarely indicate real-world UV performance unless the bulb is new. However, our fascination arose when we noticed that UV is easier to implement and therefore easier to deploy en masse. Looking around the lab, we found many idle biosafety cabinets (such as the one to the right), fitted with UV lights, and un-used due to lockdown measures. After some measurements at a couple of our cabinets, we published a [pre-print]({{< ref "publication/uv_preprint/index.md" >}}) to help medical centers with idle biosafety cabinets disinfect their masks. From our calculations, if masks are left at the base of the work area, 4.3 hours of exposure per side are required to reach $1J/cm^2$ and meet CDC recommendations.

Looking further, we wanted a way to reduce both decontamination time and produce a way for healthcare workers to do ad hoc decontaminations on their floors and units rather than coordinating batch decontamination of their masks with VHP. 

### Engineering

We started with a design where users would drop their used masks into the machine where it would be moved with a conveyor belt to an outlet, during which it would be exposed to UV irradiation on both sides of the masks.

{{< figure src="conveyorbelt.jpg" alt="BSC" position="right" caption="Initial conveyor belt design" width="400px">}}

After teaming up with think[box], prototype 1 was built using quartz rods to ensure all parts of the mask (even the points resting on the belt) get UV radiation.

{{< figuresimptwo  src="protov1.JPG" src2="v1withmask.gif" style="max-height: 300px ; padding:20px ; width: auto; height: auto;" position="center" caption="Prototype version 1 with conveyor belt design" captionStyle="text-align: center;" >}}

{{< figuresimp src="fanonpv1.jpg" position="right" style="float: right;width: 18%;padding: 0px; min-width: 200px; " >}}
During testing to characterize UV output from the bulbs, bulb temperature was observed to played a dominant role on UV output. Ventilation was to be desired and a lateral box design prevented easy solutions. We also wanted to increase the amount of UV exposure the mask was getting to significantly reduce the amount of time the mask would need to be in the box.

Version 2 was an improvement on multiple fronts. More bulbs (and therefore UV output), temperature sensor incorporation, door switch which activated the UV bulbs, and fans that activated based on temperature within the box. Communication between the electronics was accomplished with an Arduino Nano.

{{< figuresimp src="v2op.gif" position="center" style="max-height: 600px ; padding:20px ; width: auto; height: auto;" >}}

Version 3 improved cable management and physical construction of the box. ePTFE sheets lined the door and walls to increase UV reflection onto the mask.

{{< gallery album="pv3">}}

Version 4 yet again iterated on the material of the box, this time to an aluminum composite which does not have pores and is able to withstand the rigorous material standards to allow for cleaning within hospitals. It also employed relays (timed and standard) for control circuity, eliminating the need for the Arduino.

{{< gallery album="pv4">}}

<br/><br/>

Commercial UV-C test strips became saturated within a matter of seconds within the box. This meant that we were hitting the upper limit of detection of the test strips very quickly. The strips we were using in our tests get saturated at $1J/cm^2$.

{{< gallery album="striptests">}}

<br/><br/>

{{< figuresimp src="schematic.png" position="center" style="max-height: 350px ; padding:20px ; width: auto; height: auto;" >}}

The schematic depicts a circuit with easily attainable parts and straight-forward wiring. CR-1 represents a standard relay while TR-1 represents timed relays.

### Efficacy
Our prototypes converged on a deliverable -- the SUDS (Synchronous UV-C Decontamination System). Next, we sought help for biological validation of the system. A team at Cleveland's Veterans Affairs Medical Center volunteered to perform testing with bacteriophages, bacteria, and spores.

As part their testing, they would apply a biological sample to various points of the mask, measure concentrations of a pathogen of interest, place the mask in the SUDS for a predetermined time of exposure, and finally re-measure the concentration of the pathogen of interest. The primary endpoint of this testing is magnitude of pathogen reduction. 

This biological testing is yet on-going and will be disseminated as soon as it becomes available.

### Summary

Within 60 seconds, we are achieving energy outputs of at least $2J/cm^2$ delivered to the mask, surpassing CDC recommendations for mask reuse. This is accomplished with a simple circuit and many commonly attainable parts. SUDS decontamination is not only a utility to American hospitals during the COVID pandemic, but also to hospitals around the world during future epidemics when FFR shortages are a daily reality.

Even with high UV power output, further testing is needed to ensure that adequate amounts of UVGI are reaching the inner portions of the mask. Biologic testing will definitively answer questions about device efficacy by testing a clinical relevant endpoint: survival of virus particles after SUDS decontamination.

All of our findings and additional discussion is available in our [pre-print]({{< ref "publication/suds_preprint/index.md" >}}) manuscript of the device. 

We aim to make it as easy as possible for hospitals and makers to download the designs and implement the box themselves. The designs, bill of materials, and results of the testing are on [Github](https://github.com/TheoryDivision/SUDS). Additional details about the engineering behind the box can be found in the technical document. 

**Shout-out to the team: Badar J Kayani, Davis T Weaver, Eshan S King, Emily Dolson, Nikhil Krishnan, Julia Pelesko, Michael J Scott, Masahiro Hitomi, Jacob G. Scott, Ian Charnas**
