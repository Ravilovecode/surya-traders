import { catalogueUrl, registrations } from '../data.js';
import { Icon, icons } from './Icons.jsx';

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <svg className="hero-rays" aria-hidden="true" viewBox="0 0 600 600" fill="none" stroke="#E2B93B" strokeWidth="1">
          <g transform="translate(300 330)">
            <path d="M0-80V-300M40-78 110-280M-40-78-110-280M75-62 200-230M-75-62-200-230M100-35 270-140M-100-35-270-140M110 0 300-40M-110 0-300-40" />
          </g>
        </svg>

        <div className="container hero-inner">
          <div className="hero-copy rv">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              MAKHANA • FOXNUTS — FROM BIHAR, INDIA
            </div>
            <h1 className="hero-title">
              Premium Indian <em>Makhana</em> for Global Markets
            </h1>
            <p className="hero-lead">
              PURE GLOW by Surya Traders — sourcing, grading and exporting high-quality foxnuts from Bihar, India to
              importers, distributors and private-label partners worldwide.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-gold btn-lg">
                Get Bulk Pricing <Icon d={icons.arrow} size={18} width={2} />
              </a>
              <a
                href={catalogueUrl || '#catalogue'}
                className="btn btn-outline-light btn-lg"
                {...(catalogueUrl ? { download: true } : {})}
              >
                <Icon d={icons.download} size={18} width={1.8} stroke="#E2B93B" />
                Download Catalogue
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>ORIGIN</dt>
                <dd>Bihar, India</dd>
              </div>
              <div>
                <dt>GRADES</dt>
                <dd>4 – 7 Suta</dd>
              </div>
              <div>
                <dt>TERMS</dt>
                <dd>FOB / CIF</dd>
              </div>
            </dl>
          </div>

          <div className="hero-media rv">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-frame">
              <img src="/images/makhana-bowl.jpg" alt="White puffed makhana in a wooden bowl" />
              <div className="hero-badge">
                <Icon d={icons.leaf} size={30} stroke="#B8901C" width={1.5} />
                <div>
                  <div className="hero-badge-title">
                    PURE GLOW<sup>®</sup>
                  </div>
                  <div className="hero-badge-sub">Hand-graded foxnuts · Bihar</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg className="hero-wave" aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0 60 C 360 10 760 100 1440 30 L1440 90 L0 90 Z" fill="#FBF8F0" />
          <path d="M0 60 C 360 10 760 100 1440 30" fill="none" stroke="#C9A227" strokeWidth="2" />
        </svg>
      </section>

      <section aria-label="Registrations" className="trust">
        <div className="container trust-inner">
          <span className="trust-label">REGISTERED &amp; COMPLIANT</span>
          <ul className="trust-list">
            {registrations.map((r) => (
              <li key={r} className="trust-pill">
                <span className="trust-check">
                  <Icon d={icons.check} size={15} stroke="#E2B93B" width={2} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
