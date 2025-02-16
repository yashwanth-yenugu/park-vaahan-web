import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does ParkVaahan's parking space rental work?",
    answer:
      "ParkVaahan connects property owners who have unused parking spaces with people looking for monthly parking in Bangalore and Hyderabad. Space owners can list their vacant spots and earn passive income, while users can find convenient, affordable parking solutions in their preferred locations.",
  },
  {
    question: "How much can I earn by renting out my parking space?",
    answer:
      "Earnings vary based on your location, space type, and demand in your area. Prime locations in business districts or near metro stations typically command higher rates. You set your own monthly rental price, and we'll help you optimize it based on market rates in your area.",
  },
  {
    question: "How do monthly bookings and payments work?",
    answer:
      "Users can book parking spaces on a monthly basis through our platform. Payments are processed securely at the beginning of each rental period. Space owners receive their earnings directly to their registered bank account, making it a hassle-free passive income source.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We verify both space owners and renters. All parking spaces are located within secure, gated communities or private properties. We maintain proper documentation and agreements for each rental, and our platform includes features for reporting and resolving any issues.",
  },
  {
    question: "What types of parking spaces can I list?",
    answer:
      "You can list any private parking space you own - whether it's in an apartment complex, gated community, or commercial building. The space should be easily accessible and available for long-term rental.",
  },
  {
    question: "Which cities does ParkVaahan currently operate in?",
    answer:
      "We currently operate in Bangalore and Hyderabad, focusing on areas with high parking demand such as business districts, residential hubs, and metro station vicinity. We plan to expand to other major Indian cities soon.",
  },
  {
    question: "What happens if there's damage to my vehicle or property?",
    answer:
      "Our rental agreements include clear terms about liability and responsibility. We recommend both parties to document the condition of the space/vehicle at the start of the rental period. Additionally, we can help facilitate communication and resolution between parties if any issues arise.",
  },
  {
    question: "Can I cancel my listing or booking?",
    answer:
      "Space owners can modify or remove their listings with proper notice period to existing renters. For renters, cancellation policies vary based on the rental agreement and timing of the cancellation. Check our terms of service for detailed cancellation policies.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2]">
              <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
              Common Questions
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-white">Frequently Asked </span>
              <span className="text-[#80b7f2]">Questions</span>
            </h2>
          </div>

          <dl className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 border-white/10 rounded-lg shadow-lg overflow-hidden"
              >
                <dt>
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="text-lg font-medium text-[#80b7f2]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#80b7f2] transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
