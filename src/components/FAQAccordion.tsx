import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-100 border border-slate-100 bg-white rounded-2xl shadow-sm overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="transition-colors duration-200">
            <button
              id={`faq-btn-${index}`}
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-5 md:p-6 flex items-start gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-med-accent/30"
              aria-expanded={isOpen}
            >
              <span className="text-med-accent mt-1 flex-shrink-0">
                <HelpCircle className="w-5 h-5" />
              </span>
              <span className="flex-grow font-sans font-medium text-slate-800 text-sm md:text-base leading-relaxed">
                {item.question}
              </span>
              <span
                className={`text-slate-400 mt-1 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-med-accent" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-slate-50/30"
                >
                  <div className="px-5 pb-6 pl-14 md:px-6 md:pb-6 md:pl-14 text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
