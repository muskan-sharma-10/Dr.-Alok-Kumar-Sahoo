export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is a hair transplant?",
    answer:
      "Hair transplantation is a surgical procedure where hair follicles from the donor site are moved to a bald or balding part of the body called the recipient site.",
  },
  {
    id: "faq-2",
    category: "Procedure",
    question: "How long does a hair transplant procedure take?",
    answer:
      "This varies, but generally, a hair transplant procedure lasts between 4-8 hours.",
  },
  {
    id: "faq-3",
    category: "Procedure",
    question: "Does a hair transplant hurt?",
    answer:
      "Since it is done under local anesthesia, most patients do not feel much discomfort at all during the procedure. There might be some mild pain in the time following the operation, but that can usually be controlled by pain medication.",
  },
  {
    id: "faq-4",
    category: "Recovery",
    question: "How long is the initial recovery period?",
    answer:
      "The initial recovery period is normally 1-2 weeks, but several months may be needed before the transplanted hair grows fully and the final result is seen.",
  },
  {
    id: "faq-5",
    category: "Results",
    question: "Are the results of a hair transplant permanent?",
    answer:
      "Generally, yes, because the transplanted follicles are resistant to DHT, the hormone responsible for hair loss.",
  },
  {
    id: "faq-6",
    category: "Candidacy",
    question: "Can anyone get a hair transplant?",
    answer:
      "Not everyone is a candidate. Ideal candidates are those with stable hair loss and sufficient donor hair.",
  },
  {
    id: "faq-7",
    category: "Safety",
    question: "What are the risks of a hair transplant?",
    answer:
      "Risks of the procedure include infection, scarring, unnatural-looking hair growth, and temporary hair shedding known as “shock loss”.",
  },
];
