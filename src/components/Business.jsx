import { reasons, regions, services, steps } from '../data.js';
import { Icon, icons } from './Icons.jsx';

export function Solutions() {
  return (
    <section id="solutions" className="section dark">
      <div className="container">
        <div className="section-head split rv">
          <div>
            <div className="label label-light">WHAT WE DO</div>
            <h2 className="h2 h2-light">Export &amp; Business Solutions</h2>
          </div>
          <p className="body body-light">
            One accountable partner from sourcing to shipment — for importers, distributors, supermarkets and brands.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service rv">
              <div className="icon-ring">
                <Icon d={s.icon} size={26} stroke="#E2B93B" width={1.5} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
          <div className="service service-cta">
            <div>
              <div className="label label-dark">PARTNER WITH US</div>
              <h3>Become Our Business Partner</h3>
            </div>
            <a href="#contact" className="btn btn-dark btn-sm">
              Start a conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section">
      <div className="container why-inner">
        <div className="why-intro rv">
          <div className="label">WHY SURYA TRADERS</div>
          <h2 className="h2">Why buyers choose PURE GLOW</h2>
          <p className="body">
            We keep the trade simple: the right product, clearly specified, correctly documented and delivered as agreed.
          </p>
          <a href="#contact" className="btn btn-green">
            Contact Our Export Team <Icon d={icons.arrow} size={18} width={2} />
          </a>
        </div>
        <div className="why-list">
          {reasons.map((r) => (
            <div key={r.n} className="why-item rv">
              <span className="why-num">{r.n}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="quality" className="section paper">
      <div className="container">
        <div className="section-head center rv">
          <div className="label">FROM POND TO PORT</div>
          <h2 className="h2">Quality &amp; Sourcing Process</h2>
        </div>
        <div className="process">
          <div className="process-line" aria-hidden="true" />
          <ol className="process-grid">
            {steps.map((s) => (
              <li key={s.n} className="step rv">
                <div className="step-icon">
                  <Icon d={s.icon} size={30} stroke="#E2B93B" width={1.5} />
                </div>
                <div className="step-n">STEP {s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="center-row">
          <span className="pill-note">
            <Icon d={icons.flask} size={18} stroke="#B8901C" width={1.7} />
            Lab test reports available on request.
          </span>
        </div>
      </div>
    </section>
  );
}

export function Markets() {
  return (
    <section id="markets" className="section darker">
      <div className="container">
        <div className="section-head center rv">
          <div className="label label-light">GLOBAL REACH</div>
          <h2 className="h2 h2-light h2-italic">From India to the World</h2>
          <p className="body body-light">
            Shipping PURE GLOW makhana from Bihar to importers and distributors across five continents.
          </p>
        </div>
        <div className="markets-inner">
          <div className="markets-map rv">
            <img src="/images/world-map.svg" alt="Dotted world map with export routes from Bihar, India" loading="lazy" />
          </div>
          <div className="markets-regions rv">
            {regions.map((r) => (
              <div key={r.region}>
                <div className="label label-light">{r.region}</div>
                <ul className="chips">
                  {r.countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
