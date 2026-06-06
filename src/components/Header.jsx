import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navHrefs } from '../data.js';
import ButtonLink from './ButtonLink.jsx';

export default function Header({ t, currentLang, setCurrentLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = t.nav.links.map((label, index) => ({ label, href: navHrefs[index] }));

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-academyBlue text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2 text-xs font-black sm:text-sm lg:justify-between lg:px-8">
          <span>⚡ {t.topBar.offer}</span>
          <span>{t.topBar.duration}</span>
          <span>{t.topBar.limited}</span>
          <span className="rounded-full bg-academyYellow px-3 py-1 text-navy">{t.topBar.early}</span>
        </div>
      </div>

      <nav className="border-b border-blue-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" aria-label={t.nav.aria}>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-xl font-black text-academyYellow shadow-lg shadow-slate-900/15">
              Z
            </span>
            <span>
              <span className="block text-lg font-black leading-none tracking-tight text-navy">
                Zet Up Academy
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {t.nav.tagline}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-600 transition hover:text-academyBlue"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle currentLang={currentLang} setCurrentLang={setCurrentLang} />
            <ButtonLink href="#pre-inscription">{t.nav.cta}</ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 text-navy transition hover:bg-lightBlue lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-blue-50 bg-white px-4 pb-5 shadow-soft lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-lightBlue hover:text-academyBlue"
                >
                  {link.label}
                </a>
              ))}
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <LanguageToggle currentLang={currentLang} setCurrentLang={setCurrentLang} compact />
                <ButtonLink href="#pre-inscription" onClick={() => setIsOpen(false)}>
                  {t.nav.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function LanguageToggle({ currentLang, setCurrentLang, compact = false }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-blue-100 bg-lightBlue p-1 text-sm font-black text-navy ${
        compact ? 'w-full justify-center' : ''
      }`}
      aria-label="Language switcher"
    >
      {['fr', 'ar'].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setCurrentLang(lang)}
          className={`rounded-full px-3 py-2 uppercase transition ${
            currentLang === lang ? 'bg-white text-academyBlue shadow-sm' : 'text-slate-500 hover:text-navy'
          }`}
          aria-pressed={currentLang === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
