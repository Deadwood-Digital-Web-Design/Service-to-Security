import { useState, type FormEvent } from 'react';
import { collectFields, submitLead, type Fields } from '@/lib/submitForm';

/**
 * Drop-in submit handling for any <form>.
 *
 *   const { handleSubmit, sending, error } = useLeadForm('Contact form', () => setSubmitted(true));
 *   <form onSubmit={handleSubmit}> ... </form>
 *
 * `extra` adds fields that aren't inputs in the form (e.g. which guide was picked, or
 * state-driven forms that build their own payload).
 */
export function useLeadForm(
  formName: string,
  onSuccess: () => void,
  extra?: () => Fields,
  fromState = false,
) {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setSending(true);
    setError('');
    // fromState: the caller's `extra()` is the whole payload (state-driven forms)
    const fields = fromState ? (extra?.() ?? {}) : { ...collectFields(form), ...(extra?.() ?? {}) };
    const result = await submitLead(formName, fields);
    setSending(false);
    if (result.ok) onSuccess();
    else setError('error' in result ? result.error : '');
  };

  return { handleSubmit, sending, error };
}
