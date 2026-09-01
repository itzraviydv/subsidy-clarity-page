import { createFileRoute } from "@tanstack/react-router";
import { Phone, Video, Check, ArrowRight } from "lucide-react";
import logo from "@/assets/apni-subsidy-logo.png";

/*
 * EDITABLE CONTENT — update text, prices, and payment/booking links here.
 * Set each `href` to your payment or booking link when ready.
 */
const content = {
  brand: "Apni Subsidy",
  tagline: "Ladder to your success",
  nav: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  headerCta: { label: "Book Consultation", href: "#services" },
  hero: {
    eyebrow: "BUSINESS CONSULTATION FOR ENTREPRENEURS & MSMEs",
    headline: "Get the Right Funding & Growth Strategy for Your Business",
    subheadline:
      "Every business has different funding, subsidy and growth requirements. Get expert guidance to understand your business situation, identify the right opportunities and decide your next step with clarity.",
    cta: { label: "Book Business Consultation", href: "#services" },
  },
  services: {
    heading: "Choose Your Consultation",
    cards: [
      {
        icon: "call",
        price: "₹299",
        title: "Business Consultation — Call",
        features: [
          "20–25 minute consultation",
          "Discuss your business requirements",
          "Funding & subsidy guidance",
          "Identify possible next steps",
        ],
        cta: { label: "Book ₹299 Consultation", href: "#" /* add payment link here */ },
      },
      {
        icon: "meet",
        price: "₹499",
        title: "Business Funding & Growth Strategy Consultation — Google Meet",
        features: [
          "20–25 minute consultation",
          "Discuss funding and growth requirements",
          "Business strategy guidance",
          "Identify possible next steps",
        ],
        cta: { label: "Book ₹499 Consultation", href: "#" /* add payment link here */ },
      },
    ],
  },
  steps: [
    { title: "Choose Consultation", description: "Pick the session that fits your needs." },
    { title: "Make Payment", description: "Confirm your booking securely." },
    { title: "Schedule Call/Google Meet", description: "Pick a time that works for you." },
    { title: "Get Guidance", description: "Leave with clarity on your next step." },
  ],
  finalCta: {
    heading: "Start With Clarity. Move Forward With Confidence.",
    cta: { label: "Book Your Consultation", href: "#services" },
  },
  copyright: "© Apni Subsidy. All Rights Reserved.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apni Subsidy — Business Funding & Growth Consultation" },
      {
        name: "description",
        content:
          "Expert consultation for entrepreneurs & MSMEs. Understand your funding, subsidy and growth options and decide your next step with clarity.",
      },
      { property: "og:title", content: "Apni Subsidy — Business Funding & Growth Consultation" },
      {
        property: "og:description",
        content:
          "Expert consultation for entrepreneurs & MSMEs. Identify the right funding and growth opportunities for your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Logo({ className }: { className?: string }) {
  return (
    <img src={logo} alt="Apni Subsidy logo" width={300} height={275} className={className} />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <Logo className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {content.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={content.headerCta.href}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {content.headerCta.label}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 10%, oklch(0.45 0.09 195 / 8%) 0%, transparent 70%), radial-gradient(40% 40% at 15% 85%, oklch(0.72 0.12 85 / 10%) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center md:pt-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">
            {content.hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.hero.subheadline}
          </p>
          <div className="mt-10">
            <a
              href={content.hero.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              {content.hero.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {content.services.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {content.services.cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  {card.icon === "call" ? <Phone className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                </div>
                <p className="mt-6 font-display text-4xl font-semibold text-primary">{card.price}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{card.title}</h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.cta.href}
                  className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {card.cta.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xl font-semibold text-primary">
                  {i + 1}
                </div>
                {i < content.steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-4 hidden h-5 w-5 text-gold lg:block" />
                )}
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
            {content.finalCta.heading}
          </h2>
          <div className="mt-10">
            <a
              href={content.finalCta.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-all hover:brightness-105"
            >
              {content.finalCta.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
          <Logo className="h-14 w-auto" />
          <p className="text-sm font-medium tracking-wide text-primary">“{content.tagline}”</p>
          <p className="text-xs text-muted-foreground">{content.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
