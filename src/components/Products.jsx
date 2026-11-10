import { categories, flavours, grades } from '../data.js';
import { Icon, icons } from './Icons.jsx';

export function Grades() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-head center rv">
          <div className="label">PRODUCT SPECIFICATION</div>
          <h2 className="h2">Makhana Grades &amp; Sizes</h2>
          <div className="ornament" aria-hidden="true">
            <span />
            <svg width="22" height="14" viewBox="0 0 22 14" fill="#4E7A2E">
              <path d="M10 13C10 6 6 2 1 1c0 6 3 11 9 12zM12 13c0-7 4-11 9-12 0 6-3 11-9 12z" />
            </svg>
            <span />
          </div>
          <p className="body">
            Graded by bead diameter in the traditional “Suta” system. Every lot is sorted to size so you receive
            consistent, uniform product.
          </p>
        </div>

        <div className="grades-grid">
          {grades.map((g) => (
            <article key={g.name} className={`grade-card lift rv${g.premium ? ' is-premium' : ''}`}>
              {g.premium && <span className="grade-flag">PREMIUM</span>}
              <div className="grade-visual" aria-hidden="true">
                <div className="grade-ring" />
                <div className="grade-bead" style={{ '--d': `${g.bead}px` }} />
              </div>
              <div className="grade-size">
                <span />
                {g.size}
                <span />
              </div>
              <h3 className="grade-name">{g.name}</h3>
              <p className="grade-pos">{g.position}</p>
              <div className="grade-rule" />
              <a href="#contact" className="grade-link">
                Request a Quote <Icon d={icons.arrow} size={16} width={2} />
              </a>
            </article>
          ))}
        </div>
        <p className="note center">
          Mixed lots, custom sorting and packing to buyer specifications available. Specification sheet on request.
        </p>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="section paper">
      <div className="container">
        <div className="section-head split rv">
          <div>
            <div className="label">PRODUCT RANGE</div>
            <h2 className="h2">Product Categories</h2>
          </div>
          <p className="body">
            Bulk, retail and private-label formats — from natural graded foxnuts to roasted, seasoned snacks.
          </p>
        </div>

        <div className="cat-grid">
          {categories.map((c) => (
            <article key={c.title} className="cat-card lift rv">
              {c.image ? (
                <img src={c.image} alt={c.title} className="cat-media" loading="lazy" />
              ) : (
                <div className="cat-media" style={{ background: c.panel }} aria-hidden="true" />
              )}
              <div className="cat-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <a href="#contact">Enquire →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="flavours rv">
          <div className="flavours-head">
            <div className="label">FLAVOUR RANGE</div>
            <div className="flavours-title">8 signature flavours</div>
          </div>
          <ul className="flavours-list">
            {flavours.map((f) => (
              <li key={f.name}>
                <span className="dot" style={{ background: f.color }} />
                {f.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
