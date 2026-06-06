import { supabase } from '../lib/supabaseClient.js';

export async function submitPreRegistration(form) {
  const payload = {
    full_name: form.fullName.trim(),
    phone: form.whatsapp.trim(),
    email: form.email.trim(),
    city: form.city.trim(),
    preferred_language: form.language,
    level: form.level,
    message: form.message.trim() || null,
    status: 'new',
  };

  // Future backend changes should stay here so the landing page UI remains unchanged.
  const { error } = await supabase.from('pre_registrations').insert([payload]);

  if (error) {
    console.error('Supabase insert error:', error);
    throw error;
  }

  return {
    ok: true,
    mode: 'supabase',
  };
}
