import { ArrowRight } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';

export default function FinalCTA({ t }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy shadow-premium">
        <div className="moroccan-grid relative px-6 py-14 text-center sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-academyBlue/70 via-navy/95 to-navy" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-academyYellow px-4 py-2 text-sm font-black text-navy">
              {t.finalCta.badge}
            </span>
            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mt-5 text-lg font-bold leading-8 text-blue-100">
              {t.finalCta.subtitle}
            </p>
            <ButtonLink href="#pre-inscription" className="mt-8">
              {t.finalCta.button}
              <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
