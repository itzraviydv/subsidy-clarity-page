import { createFileRoute } from "@tanstack/react-router";
import { Phone, Video, Check, ArrowRight, Search, LineChart, Compass, Quote } from "lucide-react";
import logoAsset from "@/assets/apni-subsidy-logo.asset.json";
import bannerAsset from "@/assets/apni-subsidy-banner.png.asset.json";



/*
 * EDITABLE CONTENT — update text, prices, photos and payment/booking links here.
 * - Set each CTA `href` to your payment or booking link when ready.
 * - Replace the `poster` image with your own.
 * - Replace testimonial placeholders only with verified customer quotes.
 */
const content = {
  brand: "Apni Subsidy",
  tagline: "Ladder to your success",
  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  headerCta: { label: "Book Consultation", href: "#services" },
  hero: {
    eyebrow: "BUSINESS CONSULTATION FOR ENTREPRENEURS & MSMEs",
    headline: "Get the Right Funding & Growth Strategy for Your Business",
    subheadline:
      "Every business has different funding, subsidy and growth requirements. Get expert guidance to understand your business situation, identify relevant opportunities and decide your next step with clarity.",
    cta: { label: "Book Business Consultation", href: "#services" },
    trustLine: "Personalized Guidance • Practical Insights • Business-Focused Approach",
  },
  trust: {
    heading: "Your Business Deserves the Right Direction",
    description:
      "At Apni Subsidy, we help entrepreneurs and MSMEs understand their funding, subsidy and business growth requirements. Our consultations are designed to help you assess your current situation, explore relevant opportunities and understand possible next steps before making important business decisions.",
    pillars: [
      { icon: "understand", title: "Understand", description: "Your business situation and requirements" },
      { icon: "analyse", title: "Analyse", description: "Relevant funding and growth opportunities" },
      { icon: "recommend", title: "Recommend", description: "Possible next steps with clarity" },
    ],
  },
  services: {
    heading: "Choose Your Consultation",
    cards: [
      {
        icon: "call",
        price: "₹299",
        title: "Business Consultation — Call",
        description:
          "Focused guidance for entrepreneurs and MSMEs looking for clarity around business funding, government subsidies and their immediate requirements.",
        features: [
          "Discuss your business requirements",
          "Funding & subsidy guidance",
          "Explore relevant opportunities",
          "Identify possible next steps",
        ],
        cta: { label: "Book ₹299 Consultation", href: "#" /* add payment link here */ },
      },
      {
        icon: "meet",
        price: "₹499",
        title: "Business Funding & Growth Strategy Consultation — Google Meet",
        description:
          "Broader guidance for business owners looking at funding, growth, expansion and strategic business direction.",
        features: [
          "Understand your business situation",
          "Funding & growth discussion",
          "Business strategy guidance",
          "Identify possible next steps",
        ],
        cta: { label: "Book ₹499 Consultation", href: "#" /* add payment link here */ },
      },
    ],
  },
  authority: {
    heading: "Guidance From Experienced Business Professionals",
    poster: bannerAsset.url, // replace with your own poster image URL
    posterAlt: "Apni Subsidy Business Consultation — CA Sonam Khandelwal",
  },
  testimonials: {
    heading: "What Business Owners Say",
    items: [
      { quote: "Add verified customer testimonial here.", name: "Customer Name", business: "Business Name", photo: "" },
      { quote: "Add verified customer testimonial here.", name: "Customer Name", business: "Business Name", photo: "" },
      { quote: "Add verified customer testimonial here.", name: "Customer Name", business: "Business Name", photo: "" },
    ],
  },
  steps: [
    { title: "Choose Consultation", description: "Pick the session that fits your needs." },
    { title: "Make Payment", description: "Confirm your booking securely." },
    { title: "Schedule Call / Google Meet", description: "Pick a time that works for you." },
    { title: "Get Guidance", description: "Leave with clarity on your next step." },
  ],
  finalCta: {
    heading: "Start With Clarity. Move Forward With Confidence.",
    description: "Start with the right conversation and understand the possible next step for your business.",
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
    <img src={logoAsset.url} alt="Apni Subsidy logo" width={512} height={512} className={className} />
  );
}

const pillarIcons = { understand: Search, analyse: LineChart, recommend: Compass } as const;

function Index() {
  const embedUrl = youtubeEmbedUrl(content.video.youtubeUrl);

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
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">{content.hero.eyebrow}</p>
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
          <p className="mt-8 text-xs font-medium tracking-wide text-muted-foreground">{content.hero.trustLine}</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {content.trust.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
            {content.trust.description}
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {content.trust.pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
              return (
                <div key={pillar.title} className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
                  {i < content.trust.pillars.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gold sm:block" />
                  )}
                </div>
              );
            })}
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
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

      {/* AUTHORITY / TEAM */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {content.authority.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <div className="mx-auto mt-14 max-w-4xl">
            <img
              src={content.authority.poster}
              alt={content.authority.posterAlt}
              className="w-full rounded-2xl border border-border shadow-md"
            />
          </div>
        </div>
      </section>


      {/* VIDEO */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {content.video.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Apni Subsidy business insights video"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-secondary/60">
                <Youtube className="h-12 w-12 text-primary/50" />
                <p className="text-sm font-medium tracking-wide text-muted-foreground">
                  [PASTE YOUTUBE VIDEO LINK HERE]
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {content.testimonials.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {content.testimonials.items.map((item, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {item.photo ? (
                    <img src={item.photo} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary">
                      {item.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold">— {item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.business}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">How It Works</h2>
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
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{content.finalCta.description}</p>
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
          <Logo className="h-16 w-auto" />
          <p className="text-sm font-medium tracking-wide text-primary">“{content.tagline}”</p>
          <p className="text-xs text-muted-foreground">{content.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
