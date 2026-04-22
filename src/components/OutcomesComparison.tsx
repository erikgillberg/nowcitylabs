/**
 * OutcomesComparison — interactive island
 *
 * Compares the Now City Neighborhood (NCN) benchmark against a traditional
 * equivalent across six v1 metrics. All numbers are v1 illustrative values
 * grounded in Brand Bible directional claims and industry rules of thumb;
 * each will be backed with a primary-source citation as we ship v1.1.
 */
import { useState } from 'preact/hooks';

type MetricDirection = 'higher-is-better' | 'lower-is-better';

type Metric = {
  id: string;
  label: string;
  audience: string;
  summary: string;
  direction: MetricDirection;
  ncn: { value: string; note: string };
  traditional: { value: string; note: string };
  delta: string;
  method: string;
};

const METRICS: Metric[] = [
  {
    id: 'roi',
    label: 'Financial ROI',
    audience: 'Landowners · Operators · Capital',
    summary:
      'Unlevered IRR over the full hold period, including operating upside from integrated infrastructure and ground-floor activation.',
    direction: 'higher-is-better',
    ncn: {
      value: '12–16%',
      note: 'Uplift driven by faster absorption, stronger rents, lower op-ex.',
    },
    traditional: {
      value: '8–11%',
      note: 'Benchmark range for comparable mixed-use infill, PNW/CA.',
    },
    delta: '+300–500 bps',
    method:
      'NCN uplift modeled from Stack-driven cost savings, earlier stabilization, and ground-floor economic activation. v1.1: anchor with NCREIF NPI mixed-use subset.',
  },
  {
    id: 'timeline',
    label: 'Timeline to shovel-ready',
    audience: 'Landowners · Operators · Municipalities',
    summary:
      'Months from site control to entitlements complete and permits in hand — the period where most mixed-use projects bleed money and momentum.',
    direction: 'lower-is-better',
    ncn: {
      value: '24–30 mo',
      note: 'Carrying-capacity discovery and early agency alignment compress the back-end.',
    },
    traditional: {
      value: '36–48 mo',
      note: 'Typical large-site entitlement timeline for CA/PNW mixed-use.',
    },
    delta: '6–18 mo faster',
    method:
      'Comparison against internal case files + ULI PNW entitlement benchmarks for comparable-scale mixed-use infill.',
  },
  {
    id: 'cost-of-capital',
    label: 'Cost of capital',
    audience: 'Operators · Mission-aligned capital',
    summary:
      'Blended cost across the capital stack — debt, equity, and mission-aligned layers. Lower blended cost widens feasibility.',
    direction: 'lower-is-better',
    ncn: {
      value: '6.0–7.5%',
      note: 'LIHTC, MFTE, green-bond, and mission co-GP layers blended in where aligned.',
    },
    traditional: {
      value: '8.0–9.5%',
      note: 'Conventional merchant-build stack, senior debt + market-rate equity only.',
    },
    delta: '150–250 bps lower',
    method:
      'Blended WACC modeled using current (Q2 2026) market rates for senior debt and the subsidy/impact layers we structure into each stack.',
  },
  {
    id: 'carbon',
    label: 'Carbon (embodied + operational)',
    audience: 'Mission-aligned capital · Municipalities',
    summary:
      'Lifecycle carbon per dwelling unit, combining embodied (materials, construction) and operational (50-year use-phase) emissions.',
    direction: 'lower-is-better',
    ncn: {
      value: '≈ 40% lower',
      note: 'Industrialized construction, circular materials, electrified systems, district energy.',
    },
    traditional: {
      value: 'Baseline',
      note: 'Conventional wood-frame or concrete, mixed-gas HVAC, standard sourcing.',
    },
    delta: '≈ 40% reduction',
    method:
      'Directional target aligned with ULI Greenprint and RMI Zero-Carbon Building framework. v1.1: full LCA per project.',
  },
  {
    id: 'econ-dev',
    label: 'Economic development',
    audience: 'Municipalities · Operators · Capital',
    summary:
      'Local jobs created and small-business formation supported at stabilization — the ground-floor economy that pays rent, pays taxes, and keeps money in the community.',
    direction: 'higher-is-better',
    ncn: {
      value: '2–3× more',
      note: 'Experiential retail, flex, and small-biz space activated with curated local tenants.',
    },
    traditional: {
      value: 'Baseline',
      note: 'Typical mixed-use with under-programmed or chain-anchored ground floor.',
    },
    delta: '2–3× uplift',
    method:
      'Projected on NCN benchmark of 105,000 SF experiential retail + flex + small-biz space. Informed by Shuman local-multiplier research.',
  },
  {
    id: 'resilience',
    label: 'Resilience & insurability',
    audience: 'Municipalities · Capital · Operators',
    summary:
      'Ability to remain operational through grid outages, extreme-heat events, and climate-driven insurance market dislocation.',
    direction: 'higher-is-better',
    ncn: {
      value: 'Tier 1',
      note: 'District energy + storage, on-site water, passive thermal performance.',
    },
    traditional: {
      value: 'Tier 3',
      note: 'Single-point grid and water dependency; standard envelope.',
    },
    delta: 'Materially lower insurance friction',
    method:
      'Tiering aligned with FEMA/CRS community-rating framework and emerging carrier underwriting for climate-exposed CA/PNW markets.',
  },
];

const BENCHMARK = {
  units: '760',
  retail: '105,000 SF',
  green: '95,000 SF',
};

export default function OutcomesComparison() {
  const [openMethod, setOpenMethod] = useState<string | null>(null);

  return (
    <div class="rounded-3xl border border-forest-700/10 bg-white p-6 shadow-sm md:p-10">
      {/* Header */}
      <div class="mb-8 grid gap-6 md:grid-cols-12 md:items-end">
        <div class="md:col-span-7">
          <div class="eyebrow mb-3">Outcomes comparison</div>
          <h2 class="font-display text-3xl text-forest-700 md:text-4xl">
            The Now City Neighborhood vs. a traditional equivalent
          </h2>
          <p class="prose-body mt-4">
            Six v1 metrics, shown side by side. Every number comes with a
            method and a citation path. Nine more metrics roadmapped below.
          </p>
        </div>
        <div class="rounded-2xl border border-forest-700/10 bg-cream-50 p-5 md:col-span-5">
          <div class="eyebrow mb-2">NCN benchmark</div>
          <dl class="grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt class="text-stone-500">Units</dt>
              <dd class="font-display text-xl text-forest-700">{BENCHMARK.units}</dd>
            </div>
            <div>
              <dt class="text-stone-500">Retail / flex</dt>
              <dd class="font-display text-xl text-forest-700">{BENCHMARK.retail}</dd>
            </div>
            <div>
              <dt class="text-stone-500">Green / civic</dt>
              <dd class="font-display text-xl text-forest-700">{BENCHMARK.green}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Metrics */}
      <div class="space-y-4">
        {METRICS.map((m) => {
          const isOpen = openMethod === m.id;
          return (
            <article
              key={m.id}
              class="overflow-hidden rounded-2xl border border-forest-700/10 bg-cream-50"
            >
              <div class="grid gap-0 md:grid-cols-12">
                {/* Metric label */}
                <div class="border-b border-forest-700/10 p-6 md:col-span-4 md:border-b-0 md:border-r">
                  <div class="eyebrow">{m.audience}</div>
                  <h3 class="mt-2 font-display text-xl text-forest-700">{m.label}</h3>
                  <p class="mt-3 text-sm leading-relaxed text-stone-600">{m.summary}</p>
                </div>

                {/* Traditional */}
                <div class="border-b border-forest-700/10 p-6 md:col-span-3 md:border-b-0 md:border-r">
                  <div class="text-xs font-medium uppercase tracking-wider text-stone-500">
                    Traditional
                  </div>
                  <div class="mt-2 font-display text-3xl text-stone-700">
                    {m.traditional.value}
                  </div>
                  <p class="mt-2 text-xs leading-relaxed text-stone-500">{m.traditional.note}</p>
                </div>

                {/* NCN */}
                <div class="border-b border-forest-700/10 bg-forest-700 p-6 text-cream md:col-span-3 md:border-b-0">
                  <div class="text-xs font-medium uppercase tracking-wider text-copper-200">
                    Now City
                  </div>
                  <div class="mt-2 font-display text-3xl text-cream">{m.ncn.value}</div>
                  <p class="mt-2 text-xs leading-relaxed text-cream/75">{m.ncn.note}</p>
                </div>

                {/* Delta */}
                <div class="p-6 md:col-span-2">
                  <div class="text-xs font-medium uppercase tracking-wider text-copper-400">
                    Δ
                  </div>
                  <div class="mt-2 font-display text-xl leading-tight text-forest-700">
                    {m.delta}
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenMethod(isOpen ? null : m.id)}
                    aria-expanded={isOpen}
                    class="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest-700 underline decoration-copper-400 decoration-2 underline-offset-4 hover:text-copper-400"
                  >
                    {isOpen ? 'Hide method' : 'Method'}
                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </div>
              </div>

              {isOpen && (
                <div class="border-t border-forest-700/10 bg-white p-6 text-sm leading-relaxed text-stone-700">
                  <div class="eyebrow mb-2">How this is calculated</div>
                  <p>{m.method}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Roadmap */}
      <div class="mt-10 rounded-2xl border border-dashed border-forest-700/20 bg-cream-50 p-6 md:p-8">
        <div class="eyebrow mb-3">v1.1 roadmap · 9 additional metrics</div>
        <p class="prose-body">
          As we complete additional projects and ground additional claims in
          primary data, we'll add:
        </p>
        <ul class="mt-5 grid gap-2 text-sm text-stone-700 md:grid-cols-3">
          <li>• Property value appreciation</li>
          <li>• Social impact</li>
          <li>• Health impact</li>
          <li>• Quality of life</li>
          <li>• Resource efficiency</li>
          <li>• Collective bargaining</li>
          <li>• Economies of scale</li>
          <li>• VMT (vehicle miles traveled)</li>
          <li>• Commute time</li>
        </ul>
      </div>
    </div>
  );
}
