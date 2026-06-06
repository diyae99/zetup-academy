import { Lock, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (authError) {
      setError('Email ou mot de passe incorrect.');
      return;
    }

    navigate('/admin/dashboard', { replace: true });
  }

  return (
    <main dir="ltr" className="min-h-screen bg-lightBlue px-4 py-12 text-left text-navy">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full rounded-[2rem] bg-white p-7 shadow-premium">
          <div className="mb-7 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-academyYellow">
              <Lock size={26} />
            </span>
            <h1 className="mt-5 text-3xl font-black">Admin Login</h1>
            <p className="mt-2 font-bold text-slate-500">Zet Up Academy dashboard</p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-800">
              {error}
            </div>
          )}

          <label className="block text-sm font-black text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
          />

          <label className="mt-5 block text-sm font-black text-slate-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-blue-100 px-4 py-3 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-academyBlue px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <LogIn className="mr-2" size={18} />
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </main>
  );
}
