import { trustIcons } from '../data.js';

export default function About({ t }) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {t.trustCards.map(({ title, text }, index) => {
            const Icon = trustIcons[index];
            return (
            <article
              key={title}
              className="group rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-lightBlue text-academyBlue transition group-hover:bg-academyBlue group-hover:text-white">
                  <Icon size={25} />
                </span>
                <span>
                  <h3 className="text-xl font-black text-navy">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </span>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
