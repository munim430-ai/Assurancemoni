import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
} from 'recharts'
import PageHeader from '../components/PageHeader'
import {
  rmgExportGrowth,
  buyerCountries,
  macroRisks,
  groupPositioning,
  realEstateMacro,
  type RiskStatus,
} from '../data/industry'

// ── helpers ──────────────────────────────────────────────────────────────────

const statusColor: Record<RiskStatus, string> = {
  critical: '#ef4444',
  warning:  '#f59e0b',
  stable:   '#22c55e',
}

const statusLabel: Record<RiskStatus, string> = {
  critical: 'Critical',
  warning:  'Monitor',
  stable:   'Stable',
}

function LiveRate() {
  const [rate, setRate] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json())
      .then((d) => setRate(d?.rates?.BDT ?? null))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <span className="animate-pulse">—</span>
  if (rate === null) return <span>—</span>
  return <span>৳{rate.toFixed(2)}</span>
}

// ── custom tooltip for area chart ────────────────────────────────────────────

function ExportTooltip({ active, payload, label }: { active?: boolean; payload?: {value: number}[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-black/10 bg-white px-4 py-3 shadow-lg">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-instrument-serif text-xl text-foreground">
        ${payload[0].value.toFixed(2)}B
      </p>
    </div>
  )
}

// ── page ─────────────────────────────────────────────────────────────────────

export default function IndustryIntelligence() {
  return (
    <div className="relative w-full">
      <PageHeader
        eyebrow="Market intelligence"
        title="Industry Intelligence"
        subtitle="Macro-economic context for Bangladesh's RMG sector — the forces shaping every production decision, buyer negotiation, and compliance investment."
      />

      {/* ── A: Live macro stat strip ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="rounded-2xl border border-black/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Global rank</p>
            <p className="mt-3 font-instrument-serif text-5xl text-foreground">#2</p>
            <p className="mt-2 text-sm text-muted">RMG exporter worldwide after China</p>
          </div>

          {/* Stat 2 */}
          <div className="rounded-2xl border border-black/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">FY 2023–24 exports</p>
            <p className="mt-3 font-instrument-serif text-5xl text-foreground">$47.39B</p>
            <p className="mt-2 text-sm text-muted">Total RMG export value (EPB)</p>
          </div>

          {/* Stat 3 — live */}
          <div className="rounded-2xl border border-black/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Live · 1 USD
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            </p>
            <p className="mt-3 font-instrument-serif text-5xl text-foreground">
              <LiveRate />
            </p>
            <p className="mt-2 text-sm text-muted">Real-time BDT rate via open.er-api.com</p>
          </div>

          {/* Stat 4 */}
          <div className="rounded-2xl border border-black/10 bg-red-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-red-600">LDC transition</p>
            <p className="mt-3 font-instrument-serif text-5xl text-red-600">2026</p>
            <p className="mt-2 text-sm text-red-600/70">
              Bangladesh exits LDC status — EU EBA duty-free access changes
            </p>
          </div>
        </div>
      </section>

      {/* ── B: Export growth chart ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Bangladesh RMG</p>
            <h2
              className="mt-2 font-instrument-serif text-3xl text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.8px' }}
            >
              Ten years of export growth
            </h2>
          </div>
          <p className="text-xs text-muted">
            Source: BGMEA / EPB &nbsp;·&nbsp; USD billions
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 p-4 sm:p-8">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={rmgExportGrowth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="exportGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#000000" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#000000" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: '#6F6F6F' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(v: number) => `$${v}B`}
                tick={{ fontSize: 11, fill: '#6F6F6F' }}
                axisLine={false}
                tickLine={false}
                width={50}
              />
              <Tooltip content={<ExportTooltip />} />
              {/* COVID annotation */}
              <ReferenceLine
                x="FY20"
                stroke="rgba(239,68,68,0.4)"
                strokeDasharray="4 2"
                label={{ value: 'COVID-19', position: 'top', fontSize: 10, fill: '#ef4444' }}
              />
              {/* Post-pandemic annotation */}
              <ReferenceLine
                x="FY22"
                stroke="rgba(34,197,94,0.4)"
                strokeDasharray="4 2"
                label={{ value: 'Order surge', position: 'top', fontSize: 10, fill: '#22c55e' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#000000"
                strokeWidth={2}
                fill="url(#exportGradient)"
                dot={{ r: 3, fill: '#000', strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#000', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ── C: Buyer country breakdown ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Chart */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Export destination</p>
            <h2
              className="mb-6 mt-2 font-instrument-serif text-3xl text-foreground"
              style={{ letterSpacing: '-0.8px' }}
            >
              Where Bangladesh sells
            </h2>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={buyerCountries}
                layout="vertical"
                margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0,0,0,0.06)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tickFormatter={(v: number) => `${v}%`}
                  tick={{ fontSize: 11, fill: '#6F6F6F' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="country"
                  tick={{ fontSize: 11, fill: '#6F6F6F' }}
                  axisLine={false}
                  tickLine={false}
                  width={115}
                />
                <Tooltip
                  formatter={(v) => [`${v ?? ''}%`, 'Share']}
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="share" radius={[0, 4, 4, 0]}>
                  {buyerCountries.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? '#000000' : index === 1 ? '#3f3f3f' : '#b0b0b0'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Insight text */}
          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="font-instrument-serif text-xl text-foreground">
                EU concentration risk
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                60% of Bangladesh's RMG exports flow to the EU. When Bangladesh loses EBA
                (Everything But Arms) duty-free access in 2026, every factory exporting to
                EU buyers faces immediate tariff exposure — unless GSP+ is secured.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="font-instrument-serif text-xl text-foreground">
                US market opportunity
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The US is Bangladesh's second-largest buyer at 18%, yet Bangladesh pays
                ~15.6% MFN tariffs while CAFTA-DR partners (Honduras, El Salvador, Guatemala)
                pay zero. A Bangladesh-US FTA would be transformative — but none is imminent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── D: Macro risk cards ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Boardroom priorities</p>
        <h2
          className="mb-8 mt-2 font-instrument-serif text-3xl text-foreground sm:text-4xl"
          style={{ letterSpacing: '-0.8px' }}
        >
          Macro risk monitor
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {macroRisks.map((risk) => (
            <div
              key={risk.label}
              className="rounded-2xl border border-white/10 bg-foreground p-6 text-background"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {risk.label}
                  </p>
                  <p className="mt-2 font-instrument-serif text-2xl text-white">
                    {risk.headline}
                  </p>
                </div>
                <span
                  className="mt-1 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: `${statusColor[risk.status]}20`,
                    color: statusColor[risk.status],
                  }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: statusColor[risk.status] }}
                  />
                  {statusLabel[risk.status]}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{risk.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── E: Assurance Moni positioning ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="rounded-3xl border border-black/10 p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Competitive position</p>
          <h2
            className="mb-10 mt-2 font-instrument-serif text-3xl text-foreground sm:text-4xl"
            style={{ letterSpacing: '-0.8px' }}
          >
            Where Assurance Moni Group stands
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: numbers */}
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                Our footprint
              </p>
              <dl className="space-y-5">
                {[
                  { dt: 'Direct employees',     dd: `${groupPositioning.employees.toLocaleString()}+` },
                  { dt: 'Share of BD workforce', dd: '~0.24% of 4.2M RMG workers' },
                  { dt: 'Factory locations',     dd: groupPositioning.factoryLocations.join(' · ') },
                  { dt: 'Exporting since',       dd: String(groupPositioning.exportingSince) },
                  { dt: 'Established',           dd: String(groupPositioning.established) },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex justify-between border-b border-black/8 pb-5">
                    <dt className="text-sm text-muted">{dt}</dt>
                    <dd className="text-sm font-medium text-foreground">{dd}</dd>
                  </div>
                ))}
              </dl>

              {/* Certifications */}
              <div className="mt-8 flex flex-wrap gap-2">
                {groupPositioning.certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-black/15 px-3 py-1 text-xs text-foreground"
                  >
                    {c}
                  </span>
                ))}
                {groupPositioning.awards.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-foreground px-3 py-1 text-xs text-background"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: buyer language */}
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                What international buyers see
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Compliance-ready',
                    body: 'WRAP-certified and BSCI-audited facilities meet the minimum bar for European and North American brand programmes. Post-Rana Plaza, this is a non-negotiable filter.',
                  },
                  {
                    title: 'Proven track record',
                    body: 'TOP SUPPLIER recognition from Karstadt Quelle AG (Germany) is a tier-1 European buyer credential. 30+ years of continuous export operation is institutional reliability, not luck.',
                  },
                  {
                    title: 'Decentralised risk',
                    body: '9 factories across Gazipur, Savar, and Uttara means no single facility failure stops a buyer\'s order. Sourcing directors price that into supplier preference.',
                  },
                  {
                    title: 'Full-cycle capability',
                    body: 'Integrated printing and packaging (Moni Printers & Packages) shortens lead times and removes a dependency that other RMG suppliers carry as a risk.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="rounded-xl bg-black/[0.03] p-5">
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── F: Real estate kicker ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Second act</p>
          <h2
            className="mt-2 font-instrument-serif text-3xl text-foreground sm:text-4xl"
            style={{ letterSpacing: '-0.8px' }}
          >
            Real estate macro context
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {realEstateMacro.map(({ stat, label, context }) => (
            <div key={label} className="rounded-2xl border border-black/10 p-6">
              <p className="font-instrument-serif text-4xl text-foreground">{stat}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
              <p className="mt-1 text-sm text-muted">{context}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Data sourced from BGMEA, EPB, World Bank, and Bangladesh Bank. Exchange rate live via open.er-api.com.
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/concerns"
            className="inline-block rounded-full bg-foreground px-12 py-4 text-base text-background transition-transform duration-200 hover:scale-[1.03]"
          >
            Explore Our Concerns
          </Link>
        </div>
      </section>
    </div>
  )
}
