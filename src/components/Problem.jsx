import { CheckCircle2, GraduationCap, Laptop, LineChart, Users } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

export default function Problem({ t }) {
  return (
    <section id="pourquoi-nous" className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-academyBlue/10" />
          <div className="relative rounded-[2.5rem] bg-navy p-6 text-white shadow-premium">
            <div className="moroccan-grid absolute inset-0 rounded-[2.5rem] opacity-70" />
            <div className="relative">
              <div className="rounded-[2rem] bg-white p-5 text-navy">
                <div className="grid aspect-[4/3] place-items-center rounded-[1.5rem] bg-lightBlue">
                  <div className="grid w-full max-w-xs gap-4 p-5">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-academyYellow text-navy">
                          <Laptop size={22} />
                        </span>
                        <div>
                          <p className="text-sm font-black">{t.why.visual.live}</p>
                          <p className="text-xs font-bold text-slate-500">{t.why.visual.home}</p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto w-10/12 rounded-2xl bg-academyBlue p-4 text-white shadow-sm">
                      <div className="flex items-center gap-3">
                        <GraduationCap size={24} className="text-academyYellow" />
                        <p className="font-black">{t.why.visual.beginner}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <Users className="text-academyBlue" size={23} />
                        <LineChart className="text-academyYellow" size={24} />
                        <span className="text-sm font-black">{t.why.visual.progress}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="arabic mt-5 text-center text-xl font-black text-academyYellow">
                {t.why.visual.slogan}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            text={t.why.text}
          />
          <div className="mt-8 grid gap-4">
            {t.why.bullets.map((point) => (
              <div key={point} className="flex items-start gap-4 rounded-2xl bg-lightBlue p-4">
                <CheckCircle2 className="mt-0.5 flex-none text-academyBlue" size={22} />
                <p className="font-black leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
