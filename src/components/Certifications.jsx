import { catalogueUrl, certificates } from '../data.js';
import { Icon, icons } from './Icons.jsx';

function CertBody({ c }) {
  return (
    <>
      <div className="cert-doc" aria-hidden="true">
        <div className="cert-paper">
          <span className="w70 dark" />
          <span />
          <span />
          <span className="w80" />
          <span className="seal" />
        </div>
      </div>
      <div className="cert-code">{c.code}</div>
      <div className="cert-name">{c.name}</div>
      <div className="cert-no">{c.number}</div>
      <div className="cert-action">{c.doc ? 'View document ↗' : 'Available on request'}</div>
    </>
  );
}

export function Certifications() {
  const anyDocs = certificates.some((c) => c.doc);
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-head center rv">
          <div className="label">CREDENTIALS</div>
          <h2 className="h2">Certifications &amp; Registrations</h2>
          <p className="body">
            {anyDocs ? 'Click any document to view the certificate.' : 'Copies of all certificates are shared with buyers on request.'}
          </p>
        </div>
        <div className="cert-grid">
          {certificates.map((c) =>
            c.doc ? (
              <a key={c.code} href={c.doc} target="_blank" rel="noopener noreferrer" className="cert lift rv">
                <CertBody c={c} />
              </a>
            ) : (
              <div key={c.code} className="cert rv">
                <CertBody c={c} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function Catalogue() {
  return (
    <section id="catalogue" className="catalogue">
      <div className="container">
        <div className="catalogue-card rv">
          <div className="catalogue-border" aria-hidden="true" />
          <div className="catalogue-copy">
            <div className="label label-light">CATALOGUE &amp; COMPANY PROFILE</div>
            <h2 className="h2 h2-light">Request Our Product Catalogue</h2>
            <p className="body body-light">
              Grades, packing options and our company profile — in one document for your buying team.
            </p>
            <div className="btn-row">
              {catalogueUrl ? (
                <a href={catalogueUrl} download className="btn btn-gold">
                  <Icon d={icons.download} size={18} width={2} />
                  Download Company Profile (PDF)
                </a>
              ) : (
                <a href="#contact" className="btn btn-gold">
                  <Icon d={icons.download} size={18} width={2} />
                  Request Company Profile (PDF)
                </a>
              )}
              <a href="#contact" className="btn btn-outline-light">
                Discuss Your Requirements
              </a>
            </div>
          </div>
          <img src="/images/brand-banner.jpg" alt="PURE GLOW — Trust Beyond Trade" className="catalogue-img" width="960" height="600" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
