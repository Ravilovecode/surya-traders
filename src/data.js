// All website content lives here. Edit this file to update text, numbers and links.

export const contact = {
  phone: '+91 98355 78540',
  phoneHref: 'tel:+919835578540',
  whatsappNumber: '919835578540', // digits only, used for wa.me links
  email: 'export.suryatraders@gmail.com',
  addressLines: ['Govindpur, Dhanbad,', 'Jharkhand – 828109, India'],
  mapQuery: 'Govindpur, Dhanbad, Jharkhand 828109',
  gst: '20GUMPD7087J1ZB',
  iec: 'GUMPD7087J',
};

export const whatsappLink = (text) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Social profiles: paste the full URL. An empty value hides that icon.
export const social = {
  linkedin: '',
  instagram: '',
  facebook: '',
};

// Put your PDF in the /public folder (e.g. public/surya-traders-catalogue.pdf)
// and set this to '/surya-traders-catalogue.pdf'. While empty, the
// download buttons take visitors to the inquiry form instead.
export const catalogueUrl = '';

export const founder = {
  name: 'Ankit Dubey',
  role: 'Founder · [Designation]',
  photo: '/images/founder.jpg',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Export Solutions', href: '#solutions' },
  { label: 'Quality & Sourcing', href: '#quality' },
  { label: 'Markets', href: '#markets' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const registrations = ['IEC', 'APEDA', 'FSSAI', 'MSME', 'GST', 'DGFT', 'ICEGATE'];

export const grades = [
  { name: '4 Suta', size: '12–15 MM', position: 'Regular / Economical', bead: 62, premium: false },
  { name: '5 Suta', size: '15–18 MM', position: 'Standard', bead: 78, premium: false },
  { name: '6 Suta', size: '18–21 MM', position: 'Premium', bead: 94, premium: true },
  { name: '7 Suta', size: 'ABOVE 21 MM', position: 'Extra Large / Premium', bead: 112, premium: true },
];

// `image`: path to a photo in /public/images. Empty shows a coloured panel.
export const categories = [
  {
    title: 'Raw Makhana',
    text: 'Natural, unroasted popped foxnuts supplied in bulk, graded by size.',
    image: '',
    panel: 'repeating-linear-gradient(45deg,#8B5E3C 0 2px,#A57650 2px 9px)',
  },
  {
    title: 'Handpicked Makhana',
    text: 'Hand-sorted for uniform size and colour — suited to premium retail.',
    image: '',
    panel: 'radial-gradient(circle at 30% 30%,#2F6B3E,#14532D 70%)',
  },
  {
    title: 'Regular Makhana',
    text: 'A consistent everyday grade for wholesale, food service and repacking.',
    image: '/images/makhana-bowl.jpg',
    panel: '#E9E3D2',
  },
  {
    title: 'Flavoured Makhana',
    text: 'Roasted and seasoned, in retail-ready packs or under your private label.',
    image: '',
    panel: 'radial-gradient(circle at 70% 30%,#E8A54B,#B5541E 75%)',
  },
];

export const flavours = [
  { name: 'Peri Peri', color: '#C2410C' },
  { name: 'Spanish Tomato', color: '#B91C1C' },
  { name: 'Cheese & Herbs', color: '#CA8A04' },
  { name: 'Salt & Pepper', color: '#57534E' },
  { name: 'Lemon Mint', color: '#65A30D' },
  { name: 'Tandoori', color: '#9A3412' },
  { name: 'Cream & Onion', color: '#D6CCB0' },
  { name: 'Chilli Lime', color: '#4D7C0F' },
];

export const services = [
  {
    title: 'Bulk Makhana Supply',
    text: 'Consistent, graded lots in bulk packing for importers and wholesalers.',
    icon: 'M8 4h8l-1.5 3c3 1.5 4.5 4.5 4.5 8a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5c0-3.5 1.5-6.5 4.5-8zM9.5 7h5',
  },
  {
    title: 'International Export Services',
    text: 'FOB and CIF shipments, coordinated end-to-end to your destination port.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18',
  },
  {
    title: 'Retail-Ready Packaging',
    text: 'Consumer packs prepared for supermarket and retail shelves.',
    icon: 'M6 7h12l-1 14H7zM9 7a3 3 0 0 1 6 0',
  },
  {
    title: 'Private Label Solutions',
    text: 'Your brand on our product — packed to your artwork and specifications.',
    icon: 'M3 12V4h8l10 10-8 8zM7.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
  },
  {
    title: 'Customised Packaging',
    text: 'Pack sizes, materials and labelling matched to each market.',
    icon: 'M3 7l9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10',
  },
  {
    title: 'Buyer-Specific Sourcing',
    text: 'Grade, size and quality sourced to your exact requirement.',
    icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4M11 8v6M8 11h6',
  },
  {
    title: 'Long-Term Supply Partnerships',
    text: 'Planned, repeat supply programmes for distributors and brands.',
    icon: 'M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1',
  },
];

export const reasons = [
  { n: '01', title: 'Direct sourcing from Bihar', text: 'Sourced from Bihar — the heart of India’s makhana production.' },
  { n: '02', title: 'Careful grading & sorting', text: 'Lots sorted by Suta size for uniform, consistent quality.' },
  { n: '03', title: 'Hygienic handling & packaging', text: 'Clean handling and food-grade packing to protect freshness.' },
  { n: '04', title: 'Transparent pricing', text: 'Clear, itemised quotations on FOB and CIF terms.' },
  { n: '05', title: 'Complete export documentation', text: 'Invoices, packing lists and shipping documents handled end-to-end.' },
  { n: '06', title: 'Responsive communication', text: 'Direct, prompt replies on WhatsApp and email.' },
];

export const steps = [
  {
    n: '01',
    title: 'Sourcing from Bihar',
    text: 'Makhana procured from the producing regions of Bihar.',
    icon: 'M12 20v-8M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 10c0-3 2-5 6-5 0 3-2 5-6 5z',
  },
  {
    n: '02',
    title: 'Supplier & processor coordination',
    text: 'Working with trusted processors to meet your specification.',
    icon: 'M8 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM16 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 19c0-3 2.5-5 5-5s5 2 5 5M11 19c0-3 2.5-5 5-5s5 2 5 5',
  },
  {
    n: '03',
    title: 'Grading & sorting',
    text: 'Sized by Suta and sorted for colour and uniformity.',
    icon: 'M6 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18.5 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM3 19h18',
  },
  {
    n: '04',
    title: 'Quality inspection',
    text: 'Lots checked before packing against agreed parameters.',
    icon: 'M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5',
  },
  {
    n: '05',
    title: 'Hygienic packing',
    text: 'Packed in bulk or retail formats with correct labelling.',
    icon: 'M3 7l9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10',
  },
  {
    n: '06',
    title: 'Export documentation & dispatch',
    text: 'Documents prepared and cargo dispatched to port.',
    icon: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5',
  },
];

export const regions = [
  { region: 'GCC', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Other GCC'] },
  { region: 'AFRICA', countries: ['Africa'] },
  { region: 'EUROPE', countries: ['United Kingdom', 'Germany', 'Netherlands', 'France'] },
  { region: 'NORTH AMERICA', countries: ['USA', 'Canada'] },
  { region: 'ASIA-PACIFIC', countries: ['Australia', 'Southeast Asia'] },
];

// `doc`: path to a scanned certificate in /public (e.g. '/certificates/iec.pdf').
// Empty shows "Available on request" instead of a link.
export const certificates = [
  { code: 'IEC', name: 'Importer Exporter Code', number: 'GUMPD7087J', doc: '' },
  { code: 'APEDA', name: 'Agri-Export Development Authority', number: '[Reg. No.]', doc: '' },
  { code: 'FSSAI', name: 'Food Safety & Standards Authority', number: '[Licence No.]', doc: '' },
  { code: 'MSME', name: 'Ministry of MSME, Govt. of India', number: '[Udyam No.]', doc: '' },
  { code: 'GST', name: 'Goods & Services Tax', number: '20GUMPD7087J1ZB', doc: '' },
  { code: 'DGFT', name: 'Directorate General of Foreign Trade', number: '[Reg. No.]', doc: '' },
  { code: 'ICEGATE', name: 'Indian Customs EDI Gateway', number: '[Reg. No.]', doc: '' },
];

export const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain',
  'Kenya', 'Nigeria', 'South Africa', 'United Kingdom', 'Germany', 'Netherlands',
  'France', 'United States', 'Canada', 'Australia', 'Singapore', 'Malaysia',
  'Indonesia', 'Thailand', 'Other',
];

export const dialCodes = ['+971', '+966', '+974', '+968', '+965', '+973', '+44', '+49', '+31', '+33', '+1', '+61', '+65', '+60', '+62', '+66', '+254', '+234', '+27', '+91'];

export const products = ['Raw Makhana', 'Handpicked Makhana', 'Regular Makhana', 'Flavoured Makhana', 'Private Label'];

export const gradeOptions = [
  '4 Suta (12–15 mm)',
  '5 Suta (15–18 mm)',
  '6 Suta (18–21 mm)',
  '7 Suta (above 21 mm)',
  'Not sure — please advise',
];
