import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { programMeta } from '../data.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Programs({ t, isRtl }) {
  return (
    <section id="programmes" className="bg-lightBlue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          eyebrow={t.programs.eyebrow}
          title={t.programs.title}
          text={t.programs.text}
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {t.programs.cards.map((program, index) => {
            const { icon: Icon, gradient } = programMeta[index];
            return (
              <article
                key={program.title}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-blue-100 transition duration-200 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className={`relative min-h-48 bg-gradient-to-br ${gradient} p-7 text-white`}>
                  <div className="moroccan-grid absolute inset-0 opacity-50" />
                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-50">
                        {program.tag}
                      </span>
                      <h3 className="mt-6 text-3xl font-black">{program.title}</h3>
                    </div>
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-academyBlue shadow-lg">
                      <Icon size={30} />
                    </span>
                  </div>
                  <div className="absolute -bottom-8 right-8 grid h-20 w-20 place-items-center rounded-3xl bg-academyYellow text-center text-sm font-black text-navy shadow-lg">
                    {t.programs.durationBadge}
                  </div>
                </div>

                <div className="p-6 pt-12 sm:p-8 sm:pt-12">
                  <p className="text-lg font-bold leading-8 text-slate-700">{program.description}</p>
                  <div className="mt-7 grid gap-3">
                    {program.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 flex-none text-academyBlue" size={21} />
                        <span className="font-bold leading-7 text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <ButtonLink href="#pre-inscription" variant="blue" className="mt-8 w-full">
                    {program.button}
                    <ArrowRight className={isRtl ? 'mr-2 rotate-180' : 'ml-2'} size={18} />
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
