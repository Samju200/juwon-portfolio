import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071025] to-[#08203a] text-[#e6eef6] font-sans">
      <div className="max-w-[1100px] w-[95%] mx-auto my-10 p-7 rounded-2xl shadow-2xl bg-gradient-to-b from-white/5 to-white/0">
        {/* Header */}
        <header className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-2xl font-bold text-[#04202b]">
            JS
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Juwon Samuel Adeyemi</h1>
            <p className="text-[var(--muted)] mt-1">
              Software Engineer — Backend, Full-Stack & Blockchain
            </p>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] mt-2" />
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                Nigeria
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                +2348066776598
              </span>
              <a
                href="https://samju200.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:text-[var(--accent)]"
              >
                Portfolio
              </a>
              <a
                href="mailto:adeniyioluwajuwon@gmail.com"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:text-[var(--accent)]"
              >
                adeniyioluwajuwon@gmail.com
              </a>
              <a
                href="https://github.com/samju200"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:text-[var(--accent)]"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* About Me */}
            <section className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="text-[var(--muted)] text-sm">
                I build reliable backend systems and user-facing web
                applications. I specialise in secure custodial wallet designs,
                multi-asset trading backends, fiat rails, and integrations with
                payment & identity providers. I enjoy turning complex
                requirements into maintainable, testable code.
              </p>
              <div className="mt-3">
                <strong>Core strengths:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Backend Architecture",
                    "Blockchain Integrations",
                    "API Design",
                    "KYC & Payments",
                    "Performance Optimization",
                    "Mentoring & Leadership",
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-white/5 px-2 py-1 rounded-lg text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title:
                      "Senior Backend Engineer — Syarpa Digital Solutions Limited",
                    meta: "Hybrid, Nigeria — May 2025 — Present",
                    bullets: [
                      "Designed Rebble backend for multi-asset crypto trading and custodial wallet infrastructure (CELO, Polygon, ETH, BTC).",
                      "Implemented HD wallet derivation, hot/cold segregation, deposit sweeping, and on-chain monitoring with Ethers.js.",
                      "Built buy/sell order engine with real-time pricing and instant fiat settlements; integrated Hostcap/Palmpay/SmileID.",
                      "Integrated WhatsApp Business Cloud API for onboarding, KYC, and transactions.",
                    ],
                  },
                  {
                    title: "Full Stack Engineer & Lead — MoneyMarque",
                    meta: "Hybrid, Nigeria — Jan 2025 — Present",
                    bullets: [
                      "Led frontend development with Angular; architected secure APIs for Kwikee App.",
                      "Integrated Monnify, Mono, Paystack, IdentityPass and Periculum for payments and credit checks.",
                      "Mentored junior engineers and improved app performance and UX.",
                    ],
                  },
                  {
                    title: "Backend Engineer — TamPay",
                    meta: "Remote — Sep 2024 — Jan 2025",
                    bullets: [
                      "Built secure admin APIs for the Cellar Admin Panel and automated admin workflows via a Telegram bot.",
                    ],
                  },
                  {
                    title: "Full Stack Developer — Dufuna",
                    meta: "Remote — Jun 2021 — Dec 2024",
                    bullets: [
                      "Revamped platform from Yii2 to Vue.js; increased engagement by ~30%.",
                      "Implemented certificate downloads, email templates, and student features.",
                    ],
                  },
                  {
                    title: "Frontend Engineer — Fetch & Edukoya",
                    meta: "Remote roles — 2020–2023",
                    bullets: [
                      "Built user dashboards and UIs with React, Redux, and Bubble.",
                    ],
                  },
                  {
                    title:
                      "Environmental Chemist — Environmental Resources Managers Ltd",
                    meta: "Lagos — 2017 — 2023",
                    bullets: [
                      "Performed lab analyses and field investigations — analytical thinking applied to software engineering.",
                    ],
                  },
                ].map((job, i) => (
                  <article
                    key={i}
                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <h3 className="font-semibold text-base">{job.title}</h3>
                    <div className="text-[var(--muted)] text-xs mt-1">
                      {job.meta}
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-sm text-[var(--muted)] space-y-1">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-3">
                Education & Certifications
              </h2>
              <p className="text-[var(--muted)] text-sm">
                B.Tech Industrial Chemistry — Federal University of Technology,
                Akure — Second Class Upper (2015)
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-[var(--muted)] space-y-1">
                <li>Full-Stack Web Development — Dufuna (Nov 2020)</li>
                <li>Product Design — Dufuna (Mar 2021)</li>
                <li>Java Programming — Dufuna (Oct 2023)</li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <aside className="flex flex-col gap-5 lg:max-w-sm">
            <div className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p className="text-[var(--muted)] text-sm">
                Available for full-time or contract roles — open to remote and
                hybrid opportunities.
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="text-[var(--muted)]">Email:</span>{" "}
                  <a
                    href="mailto:adeniyioluwajuwon@gmail.com"
                    className="font-semibold"
                  >
                    adeniyioluwajuwon@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-[var(--muted)]">Phone:</span>{" "}
                  <span className="font-semibold">+2348066776598</span>
                </p>
                <p>
                  <span className="text-[var(--muted)]">Portfolio:</span>{" "}
                  <a
                    href="https://samju200.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    samju200.github.io/portfolio
                  </a>
                </p>
                <p>
                  <span className="text-[var(--muted)]">GitHub:</span>{" "}
                  <a
                    href="https://github.com/samju200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    github.com/samju200
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "NestJS",
                  "Angular",
                  "React",
                  "Vue",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Ethers.js",
                  "KMS & Security",
                  "Redis",
                  "Docker",
                ].map((s) => (
                  <span
                    key={s}
                    className="bg-white/5 px-2 py-1 rounded-lg text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--card)] p-5 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold mb-3">Selected Projects</h2>
              <div className="grid gap-3">
                {[
                  {
                    name: "Rebble (Syarpa)",
                    desc: "Multi-asset trading backend, custodial wallets, fiat rails, WhatsApp onboarding.",
                  },
                  {
                    name: "Kwikee App (MoneyMarque)",
                    desc: "Angular frontend and secure APIs for payments, KYC, and credit checks.",
                  },
                  {
                    name: "Dufuna Learning Platform",
                    desc: "Platform revamp from Yii2 to Vue; certificate downloads and email automation.",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <strong>{p.name}</strong>
                    <p className="text-xs text-[var(--muted)] mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="flex justify-between text-xs text-[var(--muted)] mt-6">
          <div>© Juwon Samuel Adeyemi — 2025</div>
          <div>Built with React & TailwindCSS</div>
        </footer>
      </div>
    </main>
  );
}
