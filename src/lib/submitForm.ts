// ─────────────────────────────────────────────────────────────────────────────
//  FORM DELIVERY SETUP  (one-time, 2 minutes)
//
//  1. Go to https://web3forms.com, enter the email that should receive leads
//     (mthomas@krs.insure), and copy the Access Key they email back.
//  2. Paste it between the quotes below and push.
//
//  The key is meant to be public: it can only send mail to that one address.
//  Until a key is set, forms fall back to opening the visitor's email app
//  (mailto), which only works for people who have one set up.
// ─────────────────────────────────────────────────────────────────────────────
export const WEB3FORMS_ACCESS_KEY = '';

export const CONTACT_EMAIL = 'mthomas@krs.insure';

export type Fields = Record<string, string>;
export type SubmitResult = { ok: true; mode: 'sent' | 'mailto' } | { ok: false; error: string };

const clean = (s: string) => s.replace(/\*/g, '').replace(/\s+/g, ' ').trim();

type FieldEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// Most forms on this site have no name/id on their inputs, so use the visible label text.
const labelFor = (el: FieldEl): string => {
  const direct = (el as HTMLInputElement).labels?.[0]?.textContent;
  const sibling = el.parentElement?.querySelector('label')?.textContent;
  return clean(direct || sibling || '');
};

/** Reads every field in a form into { "Label": "value" }. */
export function collectFields(form: HTMLFormElement): Fields {
  const out: Fields = {};
  const used = new Map<string, number>();

  Array.from(form.elements).forEach((node) => {
    const el = node as FieldEl;
    const tag = el.tagName;
    if (tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') return;
    const type = (el as HTMLInputElement).type;
    if (['submit', 'button', 'reset', 'hidden', 'password', 'file'].includes(type)) return;
    if (type === 'radio' && !(el as HTMLInputElement).checked) return;

    let key = labelFor(el) || el.getAttribute('name') || el.id || (el as HTMLInputElement).placeholder || '';
    if (!key) key = type === 'email' ? 'Email' : tag.toLowerCase();
    key = clean(key);

    const value =
      type === 'checkbox' ? ((el as HTMLInputElement).checked ? 'Yes' : 'No') : el.value.trim();
    if (!value) return;

    const n = (used.get(key) ?? 0) + 1;
    used.set(key, n);
    out[n === 1 ? key : `${key} (${n})`] = value;
  });

  return out;
}

const findField = (fields: Fields, test: RegExp) =>
  Object.entries(fields).find(([k]) => test.test(k))?.[1];

function openMailto(subject: string, fields: Fields) {
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Sends a lead to the business. Returns ok:false (with a message to show the visitor) on failure. */
export async function submitLead(formName: string, fields: Fields): Promise<SubmitResult> {
  const subject = `Website: ${formName}`;

  if (!WEB3FORMS_ACCESS_KEY) {
    openMailto(subject, fields);
    return { ok: true, mode: 'mailto' };
  }

  const first = findField(fields, /^first name/i);
  const last = findField(fields, /^last name/i);
  const name = findField(fields, /^(full )?name$/i) || [first, last].filter(Boolean).join(' ') || undefined;
  const email = findField(fields, /e-?mail/i);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...fields,
        ...(name ? { name } : {}),
        ...(email ? { email } : {}),
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: 'Service To Security Website',
        botcheck: '',
      }),
    });
    const data = await res.json().catch(() => ({}) as { success?: boolean });
    if (res.ok && data.success) return { ok: true, mode: 'sent' };
  } catch {
    // network error: fall through to the message below
  }
  return {
    ok: false,
    error: `Sorry, we couldn't send that. Please try again, or email us directly at ${CONTACT_EMAIL}.`,
  };
}
