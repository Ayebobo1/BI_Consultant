import React from "react";
import { BarChart3, PieChart, TrendingUp, Users, ClipboardList, Mail, Phone, Calendar, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";

const BRAND = {
  name: "Jon Doe Insights",
  tagline: "Turning local data into local decisions",
  email: "jon@jondoeinsights.com",
  phone: "(XXX) XXX-XXXX",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN",
  calendly: "https://calendly.com/YOUR-CALENDLY/intro-call",
  ctaPrimary: "Book a 15‑min intro",
  ctaSecondary: "See sample dashboards",
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium ring-1 ring-emerald-200">{children}</span>
);
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-slate-200 ${className}`}>{children}</div>
);
const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-6">
      {kicker && <p className="uppercase tracking-widest text-xs text-slate-500 mb-2">{kicker}</p>}
      {title && <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-6">{title}</h2>}
      {children}
    </div>
  </section>
);

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 opacity-95" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-white">
        <Badge><ShieldCheck className="h-4 w-4" /> DMV‑focused BI consultant</Badge>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
          {BRAND.name}: <span className="text-emerald-300">{BRAND.tagline}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200 text-lg">
          I build no‑nonsense dashboards in Power BI & Excel that show you exactly what’s working—sales, customers, inventory, and marketing—without new software or IT lift.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3">
            <Calendar className="h-5 w-5" /> {BRAND.ctaPrimary}
          </a>
          <a href="#dashboards" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/30">
            <BarChart3 className="h-5 w-5" /> {BRAND.ctaSecondary}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> {BRAND.email}</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {BRAND.phone}</span>
        </div>
      </div>
    </div>
  );
}

function ValueGrid() {
  const items = [
    { icon: <TrendingUp className="h-6 w-6"/>, title: "Revenue clarity", text: "See top‑selling items, peak hours, and promo ROI at a glance." },
    { icon: <Users className="h-6 w-6"/>, title: "Customer retention", text: "Find repeat buyers, average LTV, and the channels bringing them in." },
    { icon: <ClipboardList className="h-6 w-6"/>, title: "Ops & inventory", text: "Track stock, avoid stockouts, and align purchasing with demand." },
  ];
  return (
    <Section id="benefits" kicker="Benefits" title="What you get—fast, visual, actionable">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-3 text-emerald-600">{it.icon}<h3 className="font-semibold text-lg">{it.title}</h3></div>
            <p className="mt-3 text-slate-600">{it.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Dashboards() {
  const dashes = [
    { name: "Sales & Menu Performance", icon: <BarChart3 className="h-5 w-5"/>, bullets: ["Top items, AOV, orders", "Day × hour heatmap", "Dine‑in vs delivery split"] },
    { name: "Customer Insights & Retention", icon: <Users className="h-5 w-5"/>, bullets: ["New vs returning", "LTV & frequency", "Acquisition channels"] },
    { name: "Event & Promotion Impact", icon: <Calendar className="h-5 w-5"/>, bullets: ["Revenue by event type", "Promo ROI", "Online vs door sales"] },
    { name: "Inventory & Cost Control", icon: <ClipboardList className="h-5 w-5"/>, bullets: ["Low‑stock alerts", "COGS % of revenue", "Supplier timeliness"] },
    { name: "Marketing & Social", icon: <PieChart className="h-5 w-5"/>, bullets: ["Engagement → revenue", "Campaign rankings", "Click → buy funnel"] },
  ];
  return (
    <Section id="dashboards" kicker="Templates" title="Five plug‑and‑play dashboards (fully customizable)">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dashes.map((d, i) => (
          <Card key={i} className="p-6 flex flex-col">
            <div className="flex items-center gap-2 text-slate-900 font-semibold"><span className="text-emerald-600">{d.icon}</span> {d.name}</div>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-emerald-700 text-sm"><CheckCircle2 className="h-4 w-4"/> Tailored to your POS & spreadsheets. No new software required.</div>
          </Card>
        ))}
      </div>
      <div className="mt-6"><a href={BRAND.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3"><Rocket className="h-5 w-5"/> Book a live demo</a></div>
    </Section>
  );
}

function Process() {
  const steps = [
    { n: 1, title: "Quick discovery", text: "15‑minute call to confirm goals, data sources, and quick wins." },
    { n: 2, title: "Prototype in 72h", text: "You’ll see a working draft using your exports (or my realistic sample data)." },
    { n: 3, title: "Iterate & automate", text: "Tighten visuals + set refresh (email or live dashboard)." },
    { n: 4, title: "Handover & training", text: "You get the files, documentation, and a short Loom walkthrough." },
  ];
  return (
    <Section id="process" kicker="How it works" title="A simple, no‑surprises process">
      <div className="grid md:grid-cols-4 gap-5">
        {steps.map((s) => (
          <Card key={s.n} className="p-6">
            <div className="text-emerald-600 font-bold text-xl">{s.n.toString().padStart(2, "0")}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Proof() {
  const items = [
    "Cut weekly reporting time by 80% (restaurant group)",
    "Identified $42k in annual waste via dead inventory (retail)",
    "+18% lift in repeat orders after customer segmentation (e‑comm)",
  ];
  return (
    <Section id="proof" kicker="Proof" title="Real outcomes from simple dashboards">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((t, i) => (
          <Card key={i} className="p-6">
            <p className="text-slate-800">{t}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" kicker="About" title="Hi, I’m Jon—your fractional BI partner in the DMV">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <Card className="p-6">
          <p className="text-slate-700 leading-relaxed">
            I help owners and managers trade spreadsheet chaos for simple, decision‑ready dashboards. I’m hands‑on, fast, and focused on business impact—not jargon. If you use Excel, Google Sheets, QuickBooks, Toast, Square, Shopify, or simple CSVs, we can make dashboards that actually move the needle.
          </p>
          <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
            <li>Power BI, Excel, SQL, Python</li>
            <li>Restaurant, retail, nonprofit, and event analytics</li>
            <li>No long contracts—pilot in 2 weeks, keep what works</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">What I deliver</h3>
          <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
            <li>Five customizable dashboard templates (see above)</li>
            <li>Brand‑matched visuals + your KPIs</li>
            <li>Automation so reports run themselves</li>
          </ul>
          <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold">Connect on LinkedIn →</a>
        </Card>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="Let’s talk" title="Book a free 15‑minute consult">
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <Card className="p-6 md:col-span-2">
          <form name="contact" method="POST" data-netlify="true" className="grid sm:grid-cols-2 gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <input className="rounded-xl ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" name="name" placeholder="Your name" required />
            <input className="rounded-xl ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" name="email" placeholder="Email" type="email" required />
            <input className="rounded-xl ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:col-span-2" name="business" placeholder="Business name (optional)" />
            <textarea className="rounded-xl ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:col-span-2" name="message" placeholder="What would you like to improve?" rows={4} />
            <div className="sm:col-span-2 flex gap-3">
              <button className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3" type="submit">Send message</button>
              <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 ring-1 ring-slate-200"><Calendar className="h-5 w-5"/> {BRAND.ctaPrimary}</a>
            </div>
          </form>
        </Card>
        <Card className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Contact</h3>
            <p className="mt-3 text-slate-700 flex items-center gap-2"><Mail className="h-4 w-4"/> {BRAND.email}</p>
            <p className="mt-2 text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4"/> {BRAND.phone}</p>
            <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-emerald-700"><Users className="h-4 w-4"/> LinkedIn</a>
          </div>
          <div className="text-sm text-slate-500">Response within 1 business day.</div>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#benefits" className="hover:text-slate-900">Benefits</a>
          <a href="#dashboards" className="hover:text-slate-900">Dashboards</a>
          <a href="#process" className="hover:text-slate-900">Process</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function BIConsultantLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <ValueGrid />
      <Dashboards />
      <Process />
      <Proof />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
