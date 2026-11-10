import { founder } from '../data.js';
import { Icon, icons } from './Icons.jsx';

export default function About() {
  return (
    <section id="about" className="section paper">
      <div className="container about-inner">
        <div className="about-copy rv">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            ABOUT SURYA TRADERS
          </div>
          <h2 className="h2">An Indian merchant exporter, built on lasting partnerships</h2>
          <p className="body-lg">
            Surya Traders is an India-based merchant exporter specialising in premium makhana, marketed under our brand
            PURE GLOW. We work closely with trusted processors and suppliers in Bihar to source products to buyer
            specifications, and handle grading, packaging and export documentation end-to-end.
          </p>
          <blockquote className="vision">
            <div className="label">OUR VISION</div>
            <p>
              “Taking the goodness of Indian Makhana from its roots to global markets through quality, trust and reliable
              business partnerships.”
            </p>
          </blockquote>
          <div className="about-facts">
            <div>
              <div className="fact-title">Merchant Exporter</div>
              <div className="fact-sub">Sourcing to buyer specification</div>
            </div>
            <div>
              <div className="fact-title">PURE GLOW®</div>
              <div className="fact-sub">Our registered brand</div>
            </div>
            <div>
              <div className="fact-title">Govindpur, Dhanbad</div>
              <div className="fact-sub">Jharkhand, India</div>
            </div>
          </div>
        </div>

        <div className="about-card rv">
          <svg className="about-card-leaf" aria-hidden="true" viewBox="0 0 200 200" fill="none" stroke="#E2B93B" strokeWidth="1.2">
            <path d="M40 170C40 90 90 40 180 30c0 90-50 140-140 140z" />
            <path d="M40 170 120 90M70 140l40-6M90 118l36-4M60 150l4-36M84 126l2-34" />
          </svg>
          <div>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="#E2B93B" aria-hidden="true">
              <path d="M4 18v-5c0-4 2-7 6-8l.5 1.5C8 7.5 7.5 9.5 7.5 11H10v7zm10 0v-5c0-4 2-7 6-8l.5 1.5c-2.5 1-3 3-3 4.5H20v7z" />
            </svg>
            <p className="about-motto">Trust Beyond Trade</p>
            <div className="about-motto-sub">
              <span className="eyebrow-line" />
              From India to the World
            </div>
            <p className="about-card-text">
              Every lot we ship carries our name. We keep specifications clear, communication direct and commitments
              honoured — so that buyers can plan with confidence, season after season.
            </p>
          </div>
          <div className="founder">
            <img src={founder.photo} alt={founder.name} />
            <div>
              <div className="founder-name">{founder.name}</div>
              <div className="founder-role">{founder.role}</div>
              <a href="#contact" className="link-arrow">
                Talk to our export team <Icon d={icons.arrow} size={15} width={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
