import { useState } from 'react';
import { contact, countries, dialCodes, gradeOptions, products, whatsappLink } from '../data.js';
import { Icon, icons } from './Icons.jsx';

const initial = {
  name: '',
  company: '',
  country: '',
  email: '',
  dialCode: '+971',
  phone: '',
  product: '',
  grade: '',
  quantity: '',
  unit: 'MT',
  port: '',
  message: '',
};

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email.';
  else if (!emailOk(v.email)) e.email = 'Please enter a valid email address.';
  if (!v.country) e.country = 'Please select your country.';
  if (!v.product) e.product = 'Please select a product.';
  return e;
}

function buildMessage(v) {
  const t = (s) => s.trim();
  const lines = [
    'New export inquiry — PURE GLOW website',
    '',
    `Name: ${t(v.name)}`,
    t(v.company) ? `Company: ${t(v.company)}` : null,
    `Country: ${v.country}`,
    `Email: ${t(v.email)}`,
    t(v.phone) ? `Phone / WhatsApp: ${v.dialCode} ${t(v.phone)}` : null,
    `Product: ${v.product}`,
    v.grade ? `Grade / Size: ${v.grade}` : null,
    t(v.quantity) ? `Estimated quantity: ${t(v.quantity)} ${v.unit}` : null,
    t(v.port) ? `Destination port: ${t(v.port)}` : null,
    t(v.message) ? `\nMessage: ${t(v.message)}` : null,
  ];
  return lines.filter((l) => l !== null).join('\n');
}

function Field({ label, error, full, children, id }) {
  return (
    <div className={`field${full ? ' field-full' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState('');

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const errProps = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `f-${key}-error` : undefined,
  });

  const check = () => {
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.getElementById(`f-${Object.keys(e)[0]}`);
      if (first) first.focus();
      return false;
    }
    return true;
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!check()) return;
    window.open(whatsappLink(buildMessage(values)), '_blank', 'noopener');
    setSent('whatsapp');
  };

  const sendEmail = () => {
    if (!check()) return;
    const subject = `Export inquiry — ${values.product}${values.company ? ` — ${values.company}` : ''}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildMessage(values)
    )}`;
    setSent('email');
  };

  return (
    <section id="contact" className="section paper">
      <div className="container contact-inner">
        <form className="inquiry rv" onSubmit={sendWhatsApp} noValidate>
          <div className="label">EXPORT INQUIRY</div>
          <h2 className="h2 h2-sm">Request a Quote</h2>
          <p className="body">Tell us what you need — we'll come back with pricing on FOB or CIF terms.</p>

          <div className="form-grid">
            <Field label="Name *" id="f-name" error={errors.name}>
              <input id="f-name" className="pg-in" type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={set('name')} {...errProps('name')} />
            </Field>
            <Field label="Company Name" id="f-company">
              <input id="f-company" className="pg-in" type="text" autoComplete="organization" placeholder="Company / brand" value={values.company} onChange={set('company')} />
            </Field>
            <Field label="Country *" id="f-country" error={errors.country}>
              <select id="f-country" className="pg-in" value={values.country} onChange={set('country')} {...errProps('country')}>
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Email *" id="f-email" error={errors.email}>
              <input id="f-email" className="pg-in" type="email" autoComplete="email" placeholder="name@company.com" value={values.email} onChange={set('email')} {...errProps('email')} />
            </Field>
            <Field label="WhatsApp / Phone" id="f-phone">
              <span className="field-pair">
                <select className="pg-in pair-small" aria-label="Country code" value={values.dialCode} onChange={set('dialCode')}>
                  {dialCodes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <input id="f-phone" className="pg-in" type="tel" autoComplete="tel-national" placeholder="Number" value={values.phone} onChange={set('phone')} />
              </span>
            </Field>
            <Field label="Product Required *" id="f-product" error={errors.product}>
              <select id="f-product" className="pg-in" value={values.product} onChange={set('product')} {...errProps('product')}>
                <option value="">Select product</option>
                {products.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>
            <Field label="Grade / Size" id="f-grade">
              <select id="f-grade" className="pg-in" value={values.grade} onChange={set('grade')}>
                <option value="">Select grade</option>
                {gradeOptions.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>
            <Field label="Estimated Quantity" id="f-quantity">
              <span className="field-pair">
                <input id="f-quantity" className="pg-in" type="number" min="0" inputMode="decimal" placeholder="Quantity" value={values.quantity} onChange={set('quantity')} />
                <select className="pg-in pair-small" aria-label="Unit" value={values.unit} onChange={set('unit')}>
                  <option>MT</option>
                  <option>kg</option>
                </select>
              </span>
            </Field>
            <Field label="Destination Port" id="f-port" full>
              <input id="f-port" className="pg-in" type="text" placeholder="e.g. Jebel Ali, Rotterdam, New York" value={values.port} onChange={set('port')} />
            </Field>
            <Field label="Message" id="f-message" full>
              <textarea id="f-message" className="pg-in" placeholder="Packing, labelling, delivery timeline or other requirements" value={values.message} onChange={set('message')} />
            </Field>
          </div>

          <div className="form-foot">
            <span className="form-note">
              <Icon d={icons.clock} size={18} stroke="#B8901C" width={1.7} />
              Our export team replies within 24 hours.
            </span>
            <div className="form-buttons">
              <button type="button" className="btn btn-outline-dark" onClick={sendEmail}>
                <Icon d={icons.mail} size={18} />
                Send by Email
              </button>
              <button type="submit" className="btn btn-gold">
                Send Inquiry on WhatsApp
              </button>
            </div>
          </div>

          <p className="form-status" role="status" aria-live="polite">
            {sent === 'whatsapp' && 'WhatsApp has opened with your inquiry filled in — just press send.'}
            {sent === 'email' && 'Your email app has opened with your inquiry filled in — just press send.'}
          </p>
        </form>

        <aside className="contact-card rv">
          <div>
            <div className="label label-light">CONTACT</div>
            <h3 className="contact-title">Surya Traders</h3>
            <div className="contact-sub">Merchant Exporter &amp; Supplier</div>
          </div>
          <div className="contact-lines">
            <div className="contact-line">
              <Icon d={icons.pin} size={20} stroke="#E2B93B" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </div>
            <a className="contact-line" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon d={icons.phone} size={20} stroke="#E2B93B" />
              {contact.phone} (Phone / WhatsApp)
            </a>
            <a className="contact-line break" href={`mailto:${contact.email}`}>
              <Icon d={icons.mail} size={20} stroke="#E2B93B" />
              {contact.email}
            </a>
          </div>
          <div className="qr">
            <img src="/images/whatsapp-qr.png" alt="WhatsApp QR code — scan to chat" />
            <div>
              <div className="qr-title">Scan to Chat</div>
              <div className="qr-sub">Reach our export desk directly on WhatsApp.</div>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Map — Govindpur, Dhanbad"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="map-link"
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Govindpur, Dhanbad — Open in Maps ↗
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
