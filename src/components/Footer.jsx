import { contact, social, whatsappLink } from '../data.js';
import { SocialLinks, WhatsAppIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src="/images/brand-banner.jpg" alt="PURE GLOW — Trust Beyond Trade" className="footer-logo" width="960" height="600" loading="lazy" />
              <p>PURE GLOW® by Surya Traders — premium Indian makhana, from India to the world.</p>
            </div>
            <nav aria-label="Quick links">
              <div className="label label-light">QUICK LINKS</div>
              <a href="#about">About</a>
              <a href="#solutions">Export Solutions</a>
              <a href="#quality">Quality &amp; Sourcing</a>
              <a href="#markets">Markets</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </nav>
            <nav aria-label="Products">
              <div className="label label-light">PRODUCTS</div>
              <a href="#products">Makhana Grades (4–7 Suta)</a>
              <a href="#products">Raw Makhana</a>
              <a href="#products">Handpicked Makhana</a>
              <a href="#products">Regular Makhana</a>
              <a href="#products">Flavoured Makhana</a>
              <a href="#solutions">Private Label</a>
            </nav>
            <div className="footer-contact">
              <div className="label label-light">CONTACT</div>
              <span>{contact.addressLines.join(' ')}</span>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="break">
                {contact.email}
              </a>
              <SocialLinks social={social} className="footer-social" />
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              GST: {contact.gst} · IEC: {contact.iec}
            </span>
            <span>© {new Date().getFullYear()} Surya Traders. All rights reserved.</span>
          </div>
        </div>
      </footer>

      <a href={whatsappLink()} className="wa-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={30} />
      </a>
    </>
  );
}
