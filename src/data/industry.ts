// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRY INTELLIGENCE DATA
// Sources: BGMEA (Bangladesh Garment Manufacturers & Exporters Association),
// EPB (Export Promotion Bureau, Bangladesh), World Bank, Bangladesh Bureau of
// Statistics. Figures in USD billions unless noted.
// ─────────────────────────────────────────────────────────────────────────────

export const rmgExportGrowth = [
  { year: 'FY15', value: 25.49, annotation: '' },
  { year: 'FY16', value: 28.09, annotation: '' },
  { year: 'FY17', value: 28.14, annotation: '' },
  { year: 'FY18', value: 30.61, annotation: '' },
  { year: 'FY19', value: 34.13, annotation: '' },
  { year: 'FY20', value: 27.95, annotation: 'COVID-19' },
  { year: 'FY21', value: 31.45, annotation: '' },
  { year: 'FY22', value: 42.61, annotation: 'Post-pandemic surge' },
  { year: 'FY23', value: 46.99, annotation: '' },
  { year: 'FY24', value: 47.39, annotation: '' },
]

export const buyerCountries = [
  { country: 'European Union', share: 60.3, value: 28.6 },
  { country: 'United States',  share: 18.1, value: 8.6  },
  { country: 'United Kingdom', share: 10.8, value: 5.1  },
  { country: 'Canada',         share: 3.2,  value: 1.5  },
  { country: 'Japan',          share: 2.1,  value: 1.0  },
  { country: 'Others',         share: 5.5,  value: 2.6  },
]

export type RiskStatus = 'critical' | 'warning' | 'stable'

export type MacroRisk = {
  label: string
  status: RiskStatus
  headline: string
  detail: string
}

export const macroRisks: MacroRisk[] = [
  {
    label: 'EU LDC Graduation',
    status: 'critical',
    headline: '2026 deadline',
    detail:
      'Bangladesh exits Least Developed Country status in 2026. Duty-free EU access under the "Everything But Arms" (EBA) scheme ends. GSP+ qualification requires ratifying 27 international conventions — negotiations are ongoing.',
  },
  {
    label: 'US Tariff Exposure',
    status: 'critical',
    headline: '~15.6% MFN rate',
    detail:
      'Bangladesh garments face a ~15.6% US MFN (Most Favoured Nation) tariff vs. 0% for CAFTA-DR and CPTPP partners. No bilateral free-trade agreement is in place.',
  },
  {
    label: 'Minimum Wage Pressure',
    status: 'warning',
    headline: 'Tk 12,500 / month',
    detail:
      'November 2023: RMG minimum wage raised to Tk 12,500 — a 56.25% increase from Tk 8,000. Translates to sustained labour-cost headwind on per-unit margins.',
  },
  {
    label: 'USD / BDT Volatility',
    status: 'warning',
    headline: 'BDT –25% since 2022',
    detail:
      'The Bangladeshi Taka depreciated ~25% against the USD between 2022 and 2024. Revenue is invoiced in USD; labour and overhead costs are in BDT — a short-term margin tailwind with structural uncertainty.',
  },
]

export const groupPositioning = {
  established: 1979,
  factories: 8,
  employees: 10000,
  bdRmgWorkforce: 4200000,
  certifications: ['WRAP Certified', 'ISO 9001:2000', 'BSCI Audited (Status: Good)'],
  awards: ['TOP SUPPLIER — Karstadt Quelle AG, Germany'],
  exportMarkets: ['European Union', 'United States', 'Asia'],
  factoryLocations: ['Gazipur', 'Savar', 'Uttara, Dhaka'],
  exportingSince: 1993,
}

export const realEstateMacro = [
  {
    stat: '21M+',
    label: 'Dhaka population',
    context: 'Fastest-growing megacity in South Asia',
  },
  {
    stat: 'Banani',
    label: 'Prime corridor',
    context: 'Gulshan–Banani–Baridhara: highest land values in Bangladesh',
  },
  {
    stat: '2003',
    label: 'Assurance Developments est.',
    context: 'ISO certified; serving premium residential & commercial buyers',
  },
]

export const tickerItems = [
  'Bangladesh · World\'s #2 RMG Exporter',
  'FY 2023-24 Exports: $47.39 Billion',
  'Assurance Moni Group · Est. 1979 · 10,000+ Employees',
  'TOP SUPPLIER · Karstadt Quelle AG, Germany',
  'Exporting to EU, USA & Asia since 1993',
  'WRAP Certified · ISO 9001 · BSCI Audited',
  'EU LDC Transition: 2026 — actively monitoring',
]
