import { supabase } from '../lib/supabaseClient.js';

export async function fetchRegistrations() {
  const { data, error } = await supabase
    .from('pre_registrations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function updateRegistration(id, updates) {
  const payload = {
    ...updates,
    updated_at: new Date().toISOString(),
  };

  if (updates.contacted === true) {
    payload.last_contacted_at = new Date().toISOString();
    payload.status = updates.status || 'contacted';
  }

  if (updates.confirmed === true) {
    payload.confirmed_at = new Date().toISOString();
    payload.status = updates.status || 'confirmed';
  }

  const { data, error } = await supabase
    .from('pre_registrations')
    .update(payload)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
