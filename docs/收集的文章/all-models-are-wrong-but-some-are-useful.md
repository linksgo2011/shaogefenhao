---
title: All models are wrong, but some are useful
toc: true
from: https://www.lacan.upc.edu/admoreWeb/2018/05/all-models-are-wrong-but-some-are-useful-george-e-p-box/
permalink: /reprint/all-models-are-wrong-but-some-are-useful/
categories: 
  - 收集的文章
sidebar: auto
date: 2022-02-05 11:05:51
---

“All models are wrong, but some are useful” is a famous quote often attributed to the British statistician George E. P. Box. Many people in the field of statistics try to develop theoretical models aiming to predict the behaviour of a certain process, for instance the selling trend of a product or the number of tourists in a city. Thus, the idea of this quote is that every single model will be wrong, meaning that it will never represent the exact real behaviour. Having said that, even if a model cannot describe exactly the reality it could be very helpful if it is close enough.

Computational mechanics can be considered the field which includes all the AdMoRe projects. Similarly than in statistics, we also aim to predict the response of a certain system but now using computational tools such as the finite element method or other numerical methods. Therefore, it could also be applied this idea that we will never be able to develop a numerical tool that perfectly describes the reality in all cases. That may seem obvious or trivial but I think it is very interesting and important to bear in mind, even when you spend months developing a numerical tool completely immersed in your code.

Since we are working with computers, it is relatively easy to reach impressive accuracy when doing simple operations and hence, we tend to demand ridiculous errors to our simulations. However, this high accuracy may be completely useless if the numerical model does not represent the reality. For example, there is no point in requiring to your code an accuracy of order 10-5 if your model is an approximation of the real behaviour with an inherent error of 10-2. Moreover, even if the method used is very accurate, you may not need a very small error depending on the application you are working with. For example, in civil engineering, your code may ensure you that the optimum thickness of your concrete foundation is 2.2315 meters, while there is no way that this will be executed due to the lack of accuracy of the tools in situ when building this foundation. Then, this would lead to a worthless computational effort to obtain such an accurate result.

To conclude, as far as I am concerned it is equally important to develop a good numerical method than knowing how to interpret the results. And here is where the human interaction is more needed, knowing how to read the results given by a code depending on the application, situation and objective you are working on.
