---
title: Machine Learning
summary: Find associations and making models from clinical data.
tags:
- medicine
- software
- hardware
date: "2019-12-05T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: 

image:
  caption: 
  focal_point: Smart
---

## 1. [Machine Learning Immediate Recurrence of Atrial Fibrillation (IRAF) Susceptibility](https://github.com/vishhvaan/ml-iraf-analysis)
Immediate Recurrence of Atrial Fibrillation (IRAF) occurs after synchronized cardioversion with a prevalence of 5-26%. [[1]] Recurrence decreases cardioversion efficacy and puts patients through the unnecessary risk of unsuccessful cardioversion. Better knowledge of patient susceptibility factors will allow clinicians to pre-treat these patients to reduce IRAF incidence. This project aims to shed more light on IRAF susceptibility factors through analysis of a cardioversion database.

| Weight           | Feature             |
|------------------|---------------------|
| 0.0910 ± 0.0273  | Amiodarone          |
| 0.0376 ± 0.0452  | Flecainide          |
| 0.0351 ± 0.0342  | Sotalol             |
| 0.0220 ± 0.0207  | Dofetelide          |
| 0.0180 ± 0.0169  | Digoxin             |
| 0.0108 ± 0.0078  | Beta Blocker        |
| 0.0098 ± 0.0218  | Ca+ channel blocker |
| 0.0063 ± 0.0155  | Disopyramide        |
| 0.0050 ± 0.0083  | Propafenone         |
| 0.0031 ± 0.0340  | None                |
| 0.0002 ± 0.0003  | Phenytoin           |
| 0.0001 ± 0.0005  | Mexiletine          |
| 0 ± 0.0000       | Fentanyl            |
| 0 ± 0.0000       | Lidocaine           |
| -0.0001 ± 0.0081 | Quinidine           |
| -0.0025 ± 0.0018 | Moricizine          |
| -0.0034 ± 0.0284 | Procainamide        |

<!--{{< figuresimp src="shap.png" position="center" style="max-height: 600px ; padding:20px ; width: auto; height: auto;" >}}-->
&nbsp;
&nbsp;
## 2. Identifying tumors subtypes using large public datasets using computer vision

This project uses Keras in TensorFlow to analyze with CT and MRI data from large public imaging datasets to predict the boundaries of tumors. Datasets are labeled with boundaries and these are used to train the model. The model is further cross validated across multiple imaging datasets from hospitals across the nation. 

Computer vision is poised to fundamentally impact the field of Radiology as AI-based techniques are incorporated into the Electronic Medical Record (EMR) and programs that Radiologists and Radiation Oncologists use to demarcate tumor boundaries. 




[1]: https://deepblue.lib.umich.edu/bitstream/handle/2027.42/72654/j.1540-8167.2003.02415.x.pdf?sequence=1&isAllowed=y
