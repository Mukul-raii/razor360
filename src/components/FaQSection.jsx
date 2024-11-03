
import { Check, Plus } from 'lucide-react';
import React, { useState } from 'react';
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I choose which websites to get links from?",
      answer: "Answer to the question goes here."
    },
    {
      question: "Can I choose what anchor text to use?",
      answer: "Answer to the question goes here."
    },
    {
      question: "Do you guarantee links to pages with a certain domain ranking or page authority?",
      answer: "Answer to the question goes here."
    },
    {
      question: "Who will be my point of contact?",
      answer: "Answer to the question goes here."
    },
    {
      question: "How long will it take to see results?",
      answer: "Answer to the question goes here."
    },
    {
      question: "Can you guarantee the #1 spot on Google?",
      answer: "Answer to the question goes here."
    },
    {
      question: "How old is the content you're getting links from?",
      answer: "Answer to the question goes here."
    }
  ];

  return (
    <div className="bg-orange-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-950 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 py-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-purple-950">{faq.question}</span>
                <span className="bg-yellow-500 p-1 rounded">
                  <Plus className="w-4 h-4" 
                    style={{ 
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600 pl-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action at bottom */}
        <div className="bg-primary rounded-lg mt-12 py-8 px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Still have questions?
          </h3>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-950 font-semibold py-3 px-8 rounded-md transition-colors">
            Request Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
