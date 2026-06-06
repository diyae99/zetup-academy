import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function FAQ({ t, isRtl }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-lightBlue py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader centered eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <div className="mt-10 grid gap-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="rounded-3xl bg-white shadow-sm ring-1 ring-blue-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-7 ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-navy sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`flex-none text-academyBlue transition ${isOpen ? 'rotate-180' : ''}`}
                    size={22}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-blue-50 px-5 pb-5 sm:px-7">
                    <p className="pt-4 font-bold leading-7 text-slate-600">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
