// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF CONTENT
// Edit this file to drop in your exact, verified company copy, contact details,
// management names, and gallery images. Every page reads from here.
// ─────────────────────────────────────────────────────────────────────────────

export const company = {
  name: 'Assurance Moni Group',
  tagline: 'Excellence in Garments, Real Estate, and Beyond.',
  shortDescription:
    "Driving Bangladesh's export industry forward. From ready-made garments to printing, packages, and real estate development, Assurance Moni Group delivers uncompromising quality.",
  established: '1979',
  email: 'info@assurancemonigroup.com',
  phone: '+8809606 333 444',
  address: '65/B, Kemal Ataturk Avenue, Banani, Dhaka-1213, Bangladesh',
}

export const about = {
  heading: 'About Us',
  lead:
    'Assurance Moni Group started its journey in 1987, built on a single conviction: transparent, honest, and win-win relationships with buyers backed by excellent service delivery.',
  paragraphs: [
    'Our focus is on quality rather than quantity. We are committed to produce at the highest level and never compromise quality with quantity. We have earned a reputation for being a maker of quality: Assurance Moni Group ensures strict quality control measures where each product goes through a series of thorough scrutiny. We have achieved ISO 9001:2000 Standard Certificate, WRAP Certified, and BSCI Standard Audit (Status-Good).',
    'The maiden business unit of Assurance Moni Group commenced its journey in 1979 with a treadle machine in a small shed at New Paltan, Azimpur. It is now equipped with modern and sophisticated machines and high-tech printing technology, employing more than 200 employees. Starting with Moni Sweater Ltd. in 1993, the garments units expanded to 8 in number, currently creating employment for more than 6,000 people.',
    'Under the praiseworthy leadership of Mr. Gaus Uddin Khan, the garments units became one of the top exporters of RMG in Bangladesh, significantly contributing to national foreign currency earnings. For this contribution, Mr. Gaus has been recognised as a Commercially Important Person (CIP) by the Government of Bangladesh for a number of years. With a vision to cater to commercial and residential housing needs, Assurance Developments Ltd. was established in 2003, becoming one of the leading real estate companies in the country.',
  ],
  stats: [
    { value: '1979', label: 'Year established' },
    { value: '6,000+', label: 'Employees' },
    { value: 'CIP', label: 'Govt. recognised exporter' },
  ],
}

export const chairman = {
  heading: 'Profile of the Chairman',
  name: 'Gaus Uddin Khan',
  title: 'Chairman & Managing Director',
  photo: '/chairman.jpg',
  message: [
    'A tremendous energetic and outstanding charismatic personality with amiable disposition, Mr. Gaus Uddin Khan is the Chairman & Managing Director of Assurance Moni Group. He is a man with distinctive vision, dynamism, commitment, and innovative ideas. He comes from a very prominent and highly respectable Muslim family of Nawabganj Upazila, Dhaka, born on March 14, 1955.',
    'After completing his graduation from the University of Dhaka in 1975, Mr. Khan engaged himself in business rather than seeking a government career. He established a Printing & Packaging business named Moni Printers & Packages Limited in 1979. Assurance Moni Group is today a synonym of quality — be it Ready Made Garments, Printing & Packaging, or the Housing arena. All these are possible due to his innovative ideas, tireless efforts, perseverance, and dedication.',
    'RMG products of Assurance Moni Group are exported to many countries across the world including Europe, America, and Asia, earning significant amounts of foreign currency. More than 10,000 people work with this group on its direct payroll. Mr. Khan has been recognised as a Commercially Important Person (CIP) by the National Board of Revenue for the years 2005 and 2006, and is a member of the Bangladesh Chamber of Industries (BCI) and the Federation of Bangladesh Chambers of Commerce and Industry (FBCCI).',
  ],
}

export type Manager = {
  name: string
  role: string
  photo: string
}

export const management: Manager[] = [
  {
    name: 'Amzad Hossain',
    role: 'Executive Director',
    photo: '/executive-amzad-hossain.webp',
  },
  {
    name: 'Rezina Gaus',
    role: 'Vice Chairman',
    photo: '/vice-chairman-rezina.jpg',
  },
  {
    name: 'Gaus Uddin Khan',
    role: 'Chairman & Managing Director',
    photo: '/chairman.jpg',
  },
]

export type Concern = {
  slug: string
  name: string
  summary: string
  body: string[]
  highlights: string[]
}

export const concerns: Concern[] = [
  {
    slug: 'ready-made-garments',
    name: 'Ready Made Garments',
    summary:
      'Export-oriented sweater and apparel manufacturing built for international buyers who demand compliance, consistency, and on-time delivery.',
    body: [
      'Starting with Moni Sweater Ltd. in 1993, our garments units expanded to 8 in number and now create employment for more than 6,000 people. Operating across decentralised factories in Gazipur, Savar, and Uttara, we manufacture and export Lambswool and wool sweaters maintaining 100% international compliance.',
      'Our products are highly appreciated by European importers, and the company has been awarded TOP SUPPLIER status from Karstadt Quelle AG, Germany — a leading importer in Europe. With 3,000 knitting machines and 1,200 linking machines across 9+ factories, we manage the full production cycle from sampling to bulk shipment in-house.',
    ],
    highlights: [
      'Woven & knit sweater production',
      'WRAP certified, BSCI audited',
      'Exported to Europe, America & Asia',
      'TOP SUPPLIER — Karstadt Quelle AG, Germany',
    ],
  },
  {
    slug: 'printing-packages',
    name: 'Printing & Packages',
    summary:
      'Commercial printing and packaging solutions — cartons, labels, tags, and trims — that protect, present, and move products to market.',
    body: [
      'Moni Printers & Packages Limited commenced its journey in 1979 and is now equipped with modern machines and high-tech printing technology, employing more than 200 employees. The company holds a printing portfolio of more than 500 renowned brands including ACI Limited, Renata Limited, Sanofi-Aventis, IBN Sina Pharmaceuticals, Nuvista Pharma, Kallol Industries, and Opsonin Pharma.',
      'We also work with national institutions including the National Curriculum & Textbook Board, Bangladesh Technical Education Board, Bangladesh Open University, Bangladesh Shilpakala Academy, Bangladesh Shishu Academy, and Nazrul Institute. Our press houses three double-colour Roland Offset machines, four single-colour machines, seven Dye-Cutting machines, one Auto Dye-Cutting Machine, and two automatic Folding-Gluing Machines.',
    ],
    highlights: [
      'Cartons & corrugated packaging',
      'Labels, tags & trims',
      '500+ brand printing portfolio',
      'Serving pharma, education & export sectors',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    summary:
      'Thoughtful residential and commercial development that creates lasting spaces to live and work — ISO certified and built on trust.',
    body: [
      'With a vision to cater to the commercial and residential housing needs of the country, Mr. Gaus Uddin Khan established Assurance Developments Ltd. in 2003. Starting with a small staff, the company has grown to become one of the leading real estate companies in Bangladesh, earning ISO Certification and a reputation for quality and timely delivery.',
      "We procure only the best of locations, materials, and personnel — all dedicated to making our clients' dream homes a concrete reality. Our dedication is continued with lifetime service, because we value our clients' trust in us. We focus on durable construction, considered design, and locations that hold their value — building places that communities are proud to call home.",
    ],
    highlights: [
      'Residential & commercial development',
      'ISO certified operations',
      'Quality construction & timely delivery',
      'Prime locations across Dhaka',
    ],
  },
]

// Gallery — real images downloaded from assurancemonigroup.com
export type GalleryItem = { src: string; caption: string }

export const gallery: GalleryItem[] = [
  { src: '/gallery/rmg-facility-1.jpg', caption: 'RMG production facility' },
  { src: '/gallery/rmg-facility-2.jpg', caption: 'Garments factory floor' },
  { src: '/gallery/rmg-facility-3.jpg', caption: 'Knitting operations' },
  { src: '/gallery/rmg-facility-5.jpg', caption: 'Sweater manufacturing' },
  { src: '/gallery/rmg-facility-6.jpg', caption: 'RMG finished goods' },
  { src: '/gallery/rmg-product-1.jpg', caption: 'Sweater — Style 1' },
  { src: '/gallery/rmg-product-2.jpg', caption: 'Sweater — Style 2' },
  { src: '/gallery/rmg-product-3.jpg', caption: 'Sweater — Style 3' },
  { src: '/gallery/rmg-product-4.jpg', caption: 'Sweater — Style 4' },
  { src: '/gallery/rmg-product-5.jpg', caption: 'Sweater — Style 5' },
  { src: '/gallery/rmg-product-6.jpg', caption: 'Sweater — Style 6' },
  { src: '/gallery/rmg-product-7.jpg', caption: 'Sweater — Style 7' },
  { src: '/gallery/rmg-product-8.jpg', caption: 'Sweater — Style 8' },
  { src: '/gallery/rmg-product-9.jpg', caption: 'Sweater — Style 9' },
  { src: '/gallery/rmg-product-10.jpg', caption: 'Sweater — Style 10' },
  { src: '/gallery/printers-facility-1.jpg', caption: 'Moni Printers — press floor' },
  { src: '/gallery/printers-facility-2.jpg', caption: 'Printing operations' },
  { src: '/gallery/printers-facility-3.jpg', caption: 'Packaging production' },
  { src: '/gallery/printers-facility-4.jpg', caption: 'Printing press machinery' },
  { src: '/gallery/printers-facility-5.jpg', caption: 'Finished print products' },
  { src: '/gallery/printers-product-1.jpg', caption: 'Printed carton — sample 1' },
  { src: '/gallery/printers-product-2.jpg', caption: 'Printed carton — sample 2' },
  { src: '/gallery/printers-product-3.jpg', caption: 'Printed carton — sample 3' },
  { src: '/gallery/printers-product-4.jpg', caption: 'Packaging — sample 4' },
  { src: '/gallery/printers-product-5.jpg', caption: 'Packaging — sample 5' },
  { src: '/gallery/assu-1.jpeg', caption: 'Assurance Developments — project 1' },
  { src: '/gallery/assu-2.jpeg', caption: 'Assurance Developments — project 2' },
  { src: '/gallery/assu-3.jpg', caption: 'Assurance Developments — project 3' },
  { src: '/gallery/home-slider-01.jpg', caption: 'Assurance Moni Group' },
  { src: '/gallery/home-slider-02.jpg', caption: 'Group overview' },
  { src: '/gallery/home-slider-03.jpg', caption: 'Our facilities' },
  { src: '/gallery/home-slider-04.jpg', caption: 'Operations' },
]

export const careers = {
  heading: 'Career',
  lead:
    'We grow by investing in people. Assurance Moni Group currently employs more than 10,000 people across its garments, printing, and real estate divisions. If you are driven, dependable, and ready to build, we would like to hear from you.',
  note: 'Send your CV to the email below with the position you are interested in.',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Corporate Management', to: '/corporate-management' },
  { label: 'Our Concerns', to: '/concerns' },
  { label: 'Industry Intelligence', to: '/industry-intelligence' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const heroVideoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'
