import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Problem from './components/Problem.jsx';
import Programs from './components/Programs.jsx';
import Pricing from './components/Pricing.jsx';
import Method from './components/Method.jsx';
import PreRegistrationForm from './components/PreRegistrationForm.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { translations } from './data.js';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminLogin from './pages/AdminLogin.jsx';

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('zet-up-lang');
      return savedLang === 'ar' ? 'ar' : 'fr';
    } catch {
      return 'fr';
    }
  });
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    try {
      localStorage.setItem('zet-up-lang', currentLang);
    } catch {
      // Ignore storage failures so the switcher still works for the current session.
    }
    document.documentElement.lang = currentLang;
    document.documentElement.dir = t.dir;
  }, [currentLang, t.dir]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage t={t} isRtl={isRtl} currentLang={currentLang} setCurrentLang={setCurrentLang} />}
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage({ t, isRtl, currentLang, setCurrentLang }) {
  return (
    <div className={`min-h-screen bg-white text-navy ${isRtl ? 'text-right' : 'text-left'}`}>
      <Header t={t} currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <main>
        <Hero t={t} isRtl={isRtl} />
        <About t={t} />
        <Problem t={t} />
        <Programs t={t} isRtl={isRtl} />
        <Pricing t={t} />
        <Method t={t} />
        <PreRegistrationForm t={t} isRtl={isRtl} />
        <FAQ t={t} isRtl={isRtl} />
        <FinalCTA t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
