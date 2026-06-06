const quickLinks = [
  { href: '#accueil' },
  { href: '#programmes' },
  { href: '#packs' },
  { href: '#pre-inscription' },
];

export default function Footer({ t }) {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-academyYellow text-xl font-black text-navy">
              Z
            </span>
            <span className="text-xl font-black">Zet Up Academy</span>
          </div>
          <p className="arabic mt-4 text-lg font-black text-academyYellow">لغتك الجديدة… بدايتها من هنا.</p>
          <p className="mt-4 leading-7 text-blue-100">
            {t.footer.description}
          </p>
        </div>

        <FooterColumn title={t.footer.quickLinksTitle}>
          {quickLinks.map((link, index) => (
            <a key={link.href} href={link.href} className="text-blue-100 transition hover:text-white">
              {t.footer.quickLinks[index]}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title={t.footer.programsTitle}>
          {t.footer.programs.map((program) => (
            <a key={program} href="#programmes" className="text-blue-100 transition hover:text-white">
              {program}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title={t.footer.contactTitle}>
          <p className="text-blue-100">WhatsApp: +212 XXXXXXXXX</p>
          <p className="text-blue-100">Email: contact@zetupacademy.com</p>
          <p className="text-blue-100">Instagram: @zetupacademy</p>
          <p className="text-blue-100">{t.footer.location}</p>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link, index) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {t.footer.quickLinks[index]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm font-bold">{children}</div>
    </div>
  );
}
