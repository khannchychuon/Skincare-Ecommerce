import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is this project about?",
      answer:
        "This is a study project demonstrating modern React development with Tailwind CSS, focusing on creating interactive UI components.",
    },
    {
      question: "What technologies were used?",
      answer:
        "Built with React, Tailwind CSS for styling, and using React hooks for state management. The animations use CSS transitions.",
    },
    {
      question: "How is the FAQ component implemented?",
      answer:
        "It uses React state to track which item is expanded, with smooth CSS transitions for the expanding/collapsing effect.",
    },
    {
      question: "Are you planning to add more features?",
      answer:
        "Yes, potential future improvements will add more as I continue learning.",
    },
    {
      question: "How long did it take to build this project?",
      answer:
        "The development took approximately two months from conception to completion.",
    },
    {
      question: "Can I use this code in my own project?",
      answer:
        "Feel free to contect us for more information about this project.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4f4f] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-[#2f4f4f] max-w-2xl mx-auto">
            Everything you need to know about our study project
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`mb-3 rounded-lg transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white shadow-sm border border-gray-200"
                  : "bg-white border border-[#696969]-100"
              }`}
            >
              <button
                className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-90"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
