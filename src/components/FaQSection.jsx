import { Check, Plus } from 'lucide-react';
import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I choose which websites to get links from?",
      answer: "Unfortunately, high-quality link building doesn’t work this way. That said, you can give us a list of ideal websites you’d like to appear on, and we can keep an eye out for any opportunities."
    },
    {
      question: "Can I choose what anchor text to use?",
      answer: "As we work with publications that have higher editorial standards, the anchor text will be up to the editor. We can guarantee that it will be relevant to your content and niche."
    },
    {
      question: "Do you guarantee links to pages with a certain domain ranking or page authority?",
      answer: "While we regularly build links to sites with 80-90+ DA, we don’t set a minimum as we’ve found this can limit opportunities that can increase your rankings. If we find a DA60 site with lots of great traffic and content that’s relevant, we don’t want to turn down this opportunity because of an arbitrary standard. Because of the nature of our link vetting process and the type of publications we target, you can expect most links to be anywhere from DA60-90."
    },
    {
      question: "Who will be my point of contact?",
      answer: "You’ll be assigned a strategist who will get to know your company and content. This person will visit your site every day so they can be up to date on your latest content and identify any opportunities for new links. You can always reach out to ask a question, get an update, chat strategy, or discuss new pages that you want to prioritize."
    },
    {
      question: "How long will it take to see results?",
      answer: "As you may know, any new SEO efforts will take between 3-6 months to start showing results. To identify our impact, we isolate the growth, ranking increases, and traffic increases after we started building links compared to the time before we began building links."
    },
    {
      question: "Can you guarantee the #1 spot on Google?",
      answer: "Absolutely not – and no self-respecting link-building agency ever should. While we can help boost your site’s domain authority and help pages rank better in the search results, no one can guarantee a specific ranking."
    },
    {
      question: "How old is the content you're getting links from?",
      answer: "It depends. In some cases, we get editors who hand us articles they are planning to publish and ask us if we have any resources that we can add. In others, we delve into the personalized shortlist of publications we’ve assembled for your company and look for relevant content. We guarantee content will not be older than 2 years old, so we can ensure the page will still get crawled regularly."
    }
  ];

  return (
    <div className="bg-orange-50 py-16 mt-40 px-4">
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
                <div className="mt-4 text-gray-600 text-base pl-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action at bottom */}
        <div className="bg-primary rounded-lg mt-12 py-8 px-6 text-center">
          <h3 className="text-2xl max-sm:text-lg font-bold text-white mb-6">
            Still have questions?
          </h3>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-950 font-semibold py-3 px-8 max-sm:py-2 max-sm:px-4 rounded-md transition-colors">
            Request Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
