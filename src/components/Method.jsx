import { methodIcons } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Method({ t }) {
  return (
    <section className="bg-lightBlue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader centered eyebrow={t.method.eyebrow} title={t.method.title} />

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-blue-100 lg:block" />
          {t.method.steps.map((step, index) => {
            const Icon = methodIcons[index];
            return (
              <article
                key={step.title}
                className="relative rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-blue-100 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-academyBlue text-white shadow-lg shadow-blue-700/25">
                  <Icon size={24} />
                </span>
                <span className="mt-6 inline-flex rounded-full bg-academyYellow px-3 py-1 text-sm font-black text-navy">
                  {t.method.stepLabel} {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-black text-navy">{step.title}</h3>
                <p className="mt-2 font-bold leading-7 text-slate-600">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
