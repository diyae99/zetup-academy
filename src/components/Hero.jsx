import { ArrowRight, CheckCircle2, MessageCircle, PlayCircle } from 'lucide-react';
import heroImage from '../assets/zet-up-hero.png';
import { heroFloatingIcons, whatsappHref } from '../data.js';
import ButtonLink from './ButtonLink.jsx';

export default function Hero({ t, isRtl }) {
  return (
    <section id="accueil" className="academy-pattern overflow-hidden bg-lightBlue">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-academyBlue shadow-sm">
            <PlayCircle size={18} />
            {t.hero.badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            {t.hero.titleBeforeFirst} <span className="text-academyBlue">{t.hero.firstHighlight}</span>{' '}
            {t.hero.titleMiddle} <span className="text-academyBlue">{t.hero.secondHighlight}</span>{' '}
            {t.hero.titleAfter}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {t.hero.subtitle}
          </p>

          <p className="arabic mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-xl font-black text-navy shadow-sm ring-1 ring-blue-100">
            {t.hero.slogan}
          </p>

          <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
            {t.hero.bullets.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm">
                <CheckCircle2 className="flex-none text-academyBlue" size={20} />
                <span className="text-sm font-black text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#pre-inscription">
              {t.hero.buttons.reserve}
              <ArrowRight className={isRtl ? 'mr-2 rotate-180' : 'ml-2'} size={18} />
            </ButtonLink>
            <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" variant="light">
              <MessageCircle className={isRtl ? 'ml-2' : 'mr-2'} size={18} />
              {t.hero.buttons.whatsapp}
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-[2rem] bg-academyYellow/80 blur-sm lg:block" />
          <div className="absolute -bottom-7 -left-7 hidden h-36 w-36 rounded-full bg-academyBlue/15 lg:block" />

          <div className="relative rounded-[2.2rem] bg-white p-4 shadow-premium ring-1 ring-blue-100">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-navy">
              <img
                src={heroImage}
                alt="Étudiant en ligne avec laptop"
                className="aspect-[4/3] w-full object-cover opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/30 to-transparent p-5 pt-24 text-white">
                <p className="text-sm font-bold text-academyYellow">{t.hero.visualKicker}</p>
                <p className="mt-1 text-2xl font-black">{t.hero.visualTitle}</p>
              </div>
            </div>

            <div className="pointer-events-none hidden lg:block">
              {t.hero.floatingCards.map(({ label, sub }, index) => {
                const Icon = heroFloatingIcons[index];
                const positions = [
                  '-left-8 top-12',
                  '-right-8 top-20',
                  '-left-5 bottom-28',
                  '-right-5 bottom-24',
                ];
                return (
                  <div
                    key={label}
                    className={`absolute ${positions[index]} w-48 rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-soft backdrop-blur`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-lightBlue text-academyBlue">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-black text-navy">{label}</span>
                        <span className="block text-xs font-bold text-slate-500">{sub}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
              {t.hero.floatingCards.map(({ label, sub }, index) => {
                const Icon = heroFloatingIcons[index];
                return (
                <div
                  key={label}
                  className="rounded-2xl border border-blue-100 bg-lightBlue p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-academyBlue shadow-sm">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-navy">{label}</span>
                      <span className="block text-xs font-bold text-slate-500">{sub}</span>
                    </span>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
