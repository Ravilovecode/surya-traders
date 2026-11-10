// Small stroke icons. Decorative by default (aria-hidden).
export function Icon({ d, size = 20, stroke = 'currentColor', width = 1.6, fill = 'none', className, style }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

export const icons = {
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  mail: ['M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'm3 7 9 6 9-6'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  download: ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'],
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  check: 'm5 12 4.5 4.5L19 7',
  pin: ['M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7v5l3 2'],
  flask: ['M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3', 'M7.5 15h9'],
  leaf: ['M5 19C5 10 11 5 20 4c0 9-5 15-14 15z', 'M5 19 13 11'],
  linkedin: ['M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z', 'M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7'],
  instagram: ['M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M17.5 6.5v.01'],
  facebook: 'M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z',
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
};

export function WhatsAppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
      <path d="M9 9c0 3 2.5 6 6 6l1-1.5-2-1-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1-2z" fill="#fff" strokeWidth="1" />
    </svg>
  );
}

export function SocialLinks({ social, className = 'social' }) {
  const items = [
    ['linkedin', 'LinkedIn'],
    ['instagram', 'Instagram'],
    ['facebook', 'Facebook'],
  ].filter(([key]) => social[key]);
  if (!items.length) return null;
  return (
    <div className={className}>
      {items.map(([key, label]) => (
        <a key={key} href={social[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon d={icons[key]} size={16} />
        </a>
      ))}
    </div>
  );
}
