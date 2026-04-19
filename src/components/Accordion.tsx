"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-800">{item.title}</span>
            <span className="text-gray-400 text-2xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}