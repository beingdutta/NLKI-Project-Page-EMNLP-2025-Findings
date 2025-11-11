# 🌐 NLKI: Lightweight Natural Language Knowledge Integration Framework

📌 Official project website for our EMNLP Findings 2025 paper:  
**“NLKI: A Lightweight Natural Language Knowledge Integration Framework for Improving Small VLMs in Commonsense VQA Tasks”**

---

## 🔗 Links
- 📄 [Paper (EMNLP Findings 2025)](https://arxiv.org/abs/2508.19724)  
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
@inproceedings{dutta-etal-2025-nlki,
    title = "{NLKI}: A Lightweight Natural Language Knowledge Integration Framework for Improving Small {VLM}s in Commonsense {VQA} Tasks",
    author = "Dutta, Aritra  and
      Mukherjee, Swapnanil  and
      Ghosal, Deepanway  and
      Aditya, Somak",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2025",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-emnlp.557/",
    doi = "10.18653/v1/2025.findings-emnlp.557",
    pages = "10543--10563",
    ISBN = "979-8-89176-335-7",
    abstract = "Commonsense visual{--}question answering often hinges on knowledge that is missing from the image or the question. Small vision-language models (sVLMs) such as ViLT, VisualBERT, and FLAVA therefore lag behind their larger generative counterparts. To study the effect of careful commonsense knowledge integration on sVLMs, we present an end-to-end framework (NLKI) that (i) retrieves natural language facts, (ii) prompts an LLM to craft natural language explanations, and (iii) feeds both signals to sVLMs across two commonsense VQA datasets (CRIC, AOKVQA) and a visual-entailment dataset (e-SNLI-VE). Facts retrieved using a fine-tuned ColBERTv2 and an object information-enriched prompt yield explanations that largely cut down hallucinations while lifting the end-to-end answer accuracy by up to 7{\%} (across three datasets), making FLAVA and other models in NLKI match or exceed medium-sized VLMs such as Qwen-2 VL-2B and SmolVLM-2.5B. As these benchmarks contain 10{--}25{\%} label noise, additional finetuning using noise-robust losses (such as symmetric cross-entropy and generalised cross-entropy) adds another 2.5{\%} in CRIC and 5.5{\%} in AOKVQA. Our findings expose when LLM-based commonsense knowledge beats retrieval from commonsense knowledge bases, how noise-aware training stabilises small models in the context of external knowledge augmentation, and why parameter-efficient commonsense reasoning is now within reach for 250M models."
}
