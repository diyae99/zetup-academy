import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { whatsappHref } from '../data.js';
import { submitPreRegistration } from '../services/preRegistration.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';

const initialForm = {
  fullName: '',
  age: '',
  email: '',
  city: '',
  whatsapp: '',
  language: '',
  level: '',
  schedule: '',
  message: '',
};

export default function PreRegistrationForm({ t, isRtl }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setSubmitError('');

    try {
      await submitPreRegistration(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      const developmentMessage = import.meta.env.DEV
        ? ` ${error.message || 'Unknown submission error'}`
        : '';
      setSubmitError(`${t.form.error}${developmentMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="pre-inscription" className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-navy p-8 text-white shadow-premium">
          <SectionHeader
            light
            eyebrow={t.form.eyebrow}
            title={t.form.title}
            text={t.form.text}
          />
          <div className="mt-8 rounded-3xl bg-white/10 p-6">
            <p className="text-xl font-black">{t.form.questionTitle}</p>
            <p className="mt-3 leading-7 text-blue-100">
              {t.form.questionText}
            </p>
            <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6">
              <MessageCircle className={isRtl ? 'ml-2' : 'mr-2'} size={18} />
              {t.form.whatsapp}
            </ButtonLink>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-lightBlue p-4 shadow-soft ring-1 ring-blue-100 sm:p-5"
        >
          <div className="rounded-[1.5rem] bg-white p-5 sm:p-7">
            <h2 className="text-3xl font-black text-navy">{t.form.formTitle}</h2>
            <p className="mt-2 font-bold leading-7 text-slate-600">
              {t.form.helper}
            </p>

            {submitted && (
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 font-bold leading-7 text-green-800">
                {t.form.success}
              </div>
            )}

            {submitError && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold leading-7 text-red-800">
                {submitError}
              </div>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label={t.form.fields.fullName} name="fullName" value={form.fullName} onChange={updateField} />
              <Field label={t.form.fields.age} name="age" type="number" min="15" value={form.age} onChange={updateField} />
              <Field label={t.form.fields.email} name="email" type="email" value={form.email} onChange={updateField} />
              <Field label={t.form.fields.city} name="city" value={form.city} onChange={updateField} />
              <Field
                label={t.form.fields.whatsapp}
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={updateField}
              />
              <Select
                label={t.form.fields.language}
                name="language"
                value={form.language}
                onChange={updateField}
                options={t.form.options.language}
                chooseLabel={t.form.options.choose}
              />
              <Select
                label={t.form.fields.level}
                name="level"
                value={form.level}
                onChange={updateField}
                options={t.form.options.level}
                chooseLabel={t.form.options.choose}
              />
              <Select
                label={t.form.fields.schedule}
                name="schedule"
                value={form.schedule}
                onChange={updateField}
                options={t.form.options.schedule}
                chooseLabel={t.form.options.choose}
              />
              <div className="sm:col-span-2">
                <label className="block text-sm font-black text-slate-700" htmlFor="message">
                  {t.form.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
                  placeholder={t.form.placeholder}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-academyBlue px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <Send className={isRtl ? 'ml-2' : 'mr-2'} size={18} />
              {isSubmitting ? t.form.submitting : t.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, ...props }) {
  return (
    <div>
      <label className="block text-sm font-black text-slate-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-2 w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
        {...props}
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options, chooseLabel }) {
  return (
    <div>
      <label className="block text-sm font-black text-slate-700" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="mt-2 w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-academyBlue focus:ring-4 focus:ring-blue-100"
      >
        <option value="">{chooseLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
