import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Pricing({ t }) {
  return (
    <section id="packs" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader centered eyebrow={t.pricing.eyebrow} title={t.pricing.title} />

        <div className="mx-auto mt-12 grid max-w-5xl gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-premium">
            <Sparkles className="text-academyYellow" size={34} />
            <h3 className="mt-6 text-3xl font-black">{t.pricing.sideTitle}</h3>
            <p className="mt-5 leading-8 text-blue-100">
              {t.pricing.sideText}
            </p>
            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-academyYellow">
                {t.pricing.noteLabel}
              </p>
              <p className="mt-2 font-bold leading-7 text-white">
                {t.pricing.note}
              </p>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] bg-lightBlue p-5 shadow-soft ring-1 ring-blue-100">
            <div className="absolute right-6 top-6 rounded-full bg-academyYellow px-4 py-2 text-sm font-black text-navy shadow-sm">
              {t.pricing.badge}
            </div>
            <div className="rounded-[1.5rem] bg-white p-7 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 pt-10 sm:pt-0">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lightBlue text-academyBlue">
                  <ShieldCheck size={25} />
                </span>
                <div>
                  <h3 className="text-2xl font-black text-navy">{t.pricing.packName}</h3>
                  <p className="text-sm font-bold text-slate-500">{t.pricing.packSub}</p>
                </div>
              </div>
              <p className="mt-7 text-5xl font-black text-academyBlue">{t.pricing.price}</p>
              <p className="mt-1 font-black text-slate-500">{t.pricing.period}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.pricing.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 flex-none text-academyBlue" size={21} />
                    <p className="font-bold leading-7 text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <ButtonLink href="#pre-inscription" className="mt-8 w-full">
                {t.pricing.cta}
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
