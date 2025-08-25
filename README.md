# 🌐 NLKI: Lightweight Natural Language Knowledge Integration Framework

📌 Official project website for our EMNLP Findings 2025 paper:  
**“NLKI: A Lightweight Natural Language Knowledge Integration Framework for Improving Small VLMs in Commonsense VQA Tasks”**

---

## 🔗 Links
- 📄 [Paper (EMNLP Findings 2025)](https://arxiv.org/abs/XXXX.XXXXX)  
- 🌍 [Project Website](https://beingdutta.github.io/NLKI-Project-Page-EMNLP-2025-Findings/)  
- 💻 [Code Repository](https://github.com/beingdutta/NLKI-Lightweight-Natural-Language-Knowledge-Integration-Framework)  

---

## 📝 Abstract
*Commonsense visual–question answering* often hinges on knowledge missing from the image or the question.  
Small vision–language models (sVLMs) such as ViLT, VisualBERT, and FLAVA lag behind their larger generative counterparts.  
We present **NLKI**, an end-to-end framework that:  
1. Retrieves natural language facts  
2. Prompts an LLM to craft explanations  
3. Feeds both signals to sVLMs  

Our approach improves accuracy by **up to 7%** across CRIC, AOKVQA, and e-SNLI-VE, and with noise-robust training adds another **2.5–5.5%** gain — allowing **250M-parameter models** to rival medium-sized VLMs.

---

## ✨ Citation
If you use NLKI, please cite our work:

```bibtex
@inproceedings{dutta2025nlki,
  title={NLKI: A Lightweight Natural Language Knowledge Integration Framework for Improving Small VLMs in Commonsense VQA Tasks},
  author={Dutta, Aritra and Mukherjee, Swapnanil and Ghosal, Deepanway and Aditya, Somak},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP},
  year={2025}
}
