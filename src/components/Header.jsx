import { useEffect, useState } from 'react';
import { contact, nav, social } from '../data.js';
import { Icon, icons, SocialLinks } from './Icons.jsx';

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = nav.map((n) => n.href.slice(1));

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-contacts">
          <a href={contact.phoneHref}>
            <Icon d={icons.phone} size={15} stroke="#E2B93B" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Icon d={icons.mail} size={15} stroke="#E2B93B" />
            {contact.email}
          </a>
        </div>
        <div className="topbar-right">
          <span className="topbar-tag">MAKHANA • FOXNUTS</span>
          <SocialLinks social={social} className="topbar-social" />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={close}>
          <img src="/images/logo.png" alt="PURE GLOW logo" className="brand-logo" />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-by">BY</span>
            <span className="brand-name">Surya Traders</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'is-active' : undefined}
              aria-current={active === item.href.slice(1) ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-gold btn-sm header-cta" href="#contact">
            Request a Quote
          </a>
          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon d={open ? icons.close : icons.menu} size={22} width={1.8} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={active === item.href.slice(1) ? 'is-active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <a href="#contact" className="btn btn-gold btn-block" onClick={close}>
              Request a Quote
            </a>
            <a href={`https://wa.me/${contact.whatsappNumber}`} className="btn btn-outline-light btn-block" target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.phone}
            </a>
          </div>
          <p className="mobile-menu-tagline">Trust Beyond Trade</p>
        </div>
      )}
    </header>
  );
}
