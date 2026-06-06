import { contactIcons, whatsappHref } from '../data.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Contact({ t }) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-lightBlue p-6 shadow-soft ring-1 ring-blue-100 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              text={t.contact.text}
            />
            <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" className="mt-7">
              {t.contact.button}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.contact.items.map(({ label, value }, index) => {
              const Icon = contactIcons[index];
              return (
              <div key={label} className="rounded-3xl bg-white p-5 shadow-sm">
                <Icon className="text-academyBlue" size={24} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 break-words text-lg font-black text-navy">{value}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
