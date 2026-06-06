import {
  CheckCircle2,
  LogOut,
  PhoneCall,
  RefreshCw,
  Search,
  Users,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient.js';
import { fetchRegistrations, updateRegistration } from '../services/adminRegistrations.js';

const statusOptions = ['new', 'contacted', 'confirmed', 'cancelled'];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [savingId, setSavingId] = useState('');

  async function loadRegistrations() {
    setIsLoading(true);
    setError('');
    try {
      setRegistrations(await fetchRegistrations());
    } catch (loadError) {
      setError(loadError.message || 'Impossible de charger les inscriptions.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRegistrations();
  }, []);

  const filteredRegistrations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return registrations.filter((registration) => {
      const matchesStatus = statusFilter === 'all' || registration.status === statusFilter;
      const matchesSearch =
        !normalizedSearch ||
        [registration.full_name, registration.phone, registration.email]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedSearch));

      return matchesStatus && matchesSearch;
    });
  }, [registrations, search, statusFilter]);

  const kpis = useMemo(() => buildKpis(registrations), [registrations]);

  async function saveUpdate(id, updates) {
    setSavingId(id);
    setError('');
    try {
      const updated = await updateRegistration(id, updates);
      setRegistrations((current) =>
        current.map((registration) => (registration.id === id ? updated : registration))
      );
    } catch (updateError) {
      setError(updateError.message || 'Mise à jour impossible.');
    } finally {
      setSavingId('');
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  }

  return (
    <main dir="ltr" className="min-h-screen bg-lightBlue text-left text-navy">
      <header className="border-b border-blue-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-academyBlue">
              Zet Up Academy
            </p>
            <h1 className="mt-1 text-3xl font-black">Admin Dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={loadRegistrations}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-100 bg-lightBlue px-5 text-sm font-black text-navy transition hover:bg-white"
            >
              <RefreshCw className="mr-2" size={17} />
              Actualiser
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 text-sm font-black text-white transition hover:bg-[#09265d]"
            >
              <LogOut className="mr-2" size={17} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-800">
            {error}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard title="Total registrations" value={kpis.total} icon={Users} />
          <KpiCard title="Today registrations" value={kpis.today} icon={Users} />
          <KpiCard title="This week registrations" value={kpis.thisWeek} icon={Users} />
          <KpiCard title="Confirmation rate" value={`${kpis.confirmationRate}%`} icon={CheckCircle2} />
          <KpiCard title="New leads" value={kpis.newLeads} icon={Users} />
          <KpiCard title="Contacted leads" value={kpis.contactedLeads} icon={PhoneCall} />
          <KpiCard title="Confirmed leads" value={kpis.confirmedLeads} icon={CheckCircle2} />
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-soft ring-1 ring-blue-100">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-black">Inscriptions</h2>
              <p className="mt-1 font-bold text-slate-500">
                {filteredRegistrations.length} résultat(s)
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_220px] lg:w-[520px]">
              <label className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by name, phone, or email"
                  className="w-full rounded-2xl border border-blue-100 py-3 pl-11 pr-4 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-2xl border border-blue-100 px-4 py-3 font-bold outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
              >
                <option value="all">All statuses</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[1100px] border-separate border-spacing-y-3 text-left">
              <thead>
                <tr className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  <th className="px-4">Lead</th>
                  <th className="px-4">Contact</th>
                  <th className="px-4">Program</th>
                  <th className="px-4">Status</th>
                  <th className="px-4">Flags</th>
                  <th className="px-4">Notes</th>
                  <th className="px-4">Created</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="rounded-2xl bg-lightBlue p-6 text-center font-black">
                      Chargement...
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((registration) => (
                    <RegistrationRow
                      key={registration.id}
                      registration={registration}
                      isSaving={savingId === registration.id}
                      onSave={saveUpdate}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function KpiCard({ title, value, icon: Icon }) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-black text-navy">{value}</p>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lightBlue text-academyBlue">
          <Icon size={24} />
        </span>
      </div>
    </article>
  );
}

function RegistrationRow({ registration, isSaving, onSave }) {
  const [notes, setNotes] = useState(registration.notes || '');

  useEffect(() => {
    setNotes(registration.notes || '');
  }, [registration.notes]);

  return (
    <tr className="bg-white shadow-sm ring-1 ring-blue-100">
      <td className="rounded-l-2xl px-4 py-4 align-top">
        <p className="font-black text-navy">{registration.full_name}</p>
        <p className="mt-1 text-sm font-bold text-slate-500">{registration.city || '-'}</p>
      </td>
      <td className="px-4 py-4 align-top">
        <p className="font-bold">{registration.phone || '-'}</p>
        <p className="mt-1 text-sm text-slate-500">{registration.email || '-'}</p>
      </td>
      <td className="px-4 py-4 align-top">
        <p className="font-bold">{registration.preferred_language || '-'}</p>
        <p className="mt-1 text-sm text-slate-500">{registration.level || '-'}</p>
      </td>
      <td className="px-4 py-4 align-top">
        <select
          value={registration.status || 'new'}
          onChange={(event) => onSave(registration.id, { status: event.target.value })}
          disabled={isSaving}
          className="rounded-xl border border-blue-100 px-3 py-2 font-bold outline-none focus:border-academyBlue"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4 py-4 align-top">
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={Boolean(registration.contacted)}
              onChange={(event) => onSave(registration.id, { contacted: event.target.checked })}
              disabled={isSaving}
            />
            Contacted
          </label>
          <label className="inline-flex items-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={Boolean(registration.confirmed)}
              onChange={(event) => onSave(registration.id, { confirmed: event.target.checked })}
              disabled={isSaving}
            />
            Confirmed
          </label>
        </div>
      </td>
      <td className="px-4 py-4 align-top">
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          onBlur={() => {
            if (notes !== (registration.notes || '')) {
              onSave(registration.id, { notes });
            }
          }}
          rows="3"
          className="w-64 rounded-xl border border-blue-100 px-3 py-2 text-sm outline-none focus:border-academyBlue"
          placeholder="Add notes..."
        />
      </td>
      <td className="rounded-r-2xl px-4 py-4 align-top text-sm font-bold text-slate-500">
        {formatDate(registration.created_at)}
      </td>
    </tr>
  );
}

function buildKpis(registrations) {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  const total = registrations.length;
  const confirmedLeads = registrations.filter(
    (registration) => registration.status === 'confirmed' || registration.confirmed
  ).length;

  return {
    total,
    today: registrations.filter((registration) => new Date(registration.created_at) >= startOfToday)
      .length,
    thisWeek: registrations.filter((registration) => new Date(registration.created_at) >= startOfWeek)
      .length,
    newLeads: registrations.filter((registration) => registration.status === 'new').length,
    contactedLeads: registrations.filter(
      (registration) => registration.status === 'contacted' || registration.contacted
    ).length,
    confirmedLeads,
    confirmationRate: total ? Math.round((confirmedLeads / total) * 100) : 0,
  };
}

function formatDate(value) {
  if (!value) {
    return '-';
  }

  return new Intl.DateTimeFormat('fr-MA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}
