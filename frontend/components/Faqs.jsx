import React, { useState } from "react";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqsData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React by running "npm install react" or "yarn add react" in your project directory.',
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React by running "npm install react" or "yarn add react" in your project directory.',
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React by running "npm install react" or "yarn add react" in your project directory.',
    },
  ];

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-white ml-32 my-10 text-2xl">Faqs</h2>
      {faqsData.map((faq, index) => (
        <div key={index} className="">
          <div className="w-full my-10">
            <div
              className="border-white border-y border-x-2 rounded-xl px-6 py-10 w-[80%] mx-auto"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              {expandedIndex === index && <p className="mt-20">{faq.answer}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
