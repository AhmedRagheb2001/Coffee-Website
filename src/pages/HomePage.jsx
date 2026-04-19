import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";
import { FiArrowRight, FiClock, FiMapPin, FiStar } from "react-icons/fi";
import AnimatedSection from "../components/common/AnimatedSection";
import Button from "../components/common/Button";
import Image from "../components/common/Image";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import SectionTitle from "../components/common/SectionTitle";
import { menuItems } from "../data/menuItems";
import {
  brandHighlights,
  coffeeShopStructuredData,
  heroContent,
  seoContent,
  testimonials,
} from "../data/siteContent";
import { useOrder } from "../context/OrderContext";

const highlightIcons = {
  clock: FiClock,
  map: FiMapPin,
  star: FiStar,
};

export default function HomePage() {
  const { addItem } = useOrder();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -36]);
  const featuredItems = useMemo(
    () => menuItems.filter((item) => item.featured).slice(0, 3),
    []
  );

  return (
    <PageTransition>
      <Seo {...seoContent.home} jsonLd={coffeeShopStructuredData} />
      <div className="section-shell pb-12 pt-8 sm:pt-12">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="panel relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-caramel-500/12 to-transparent" />
            <p className="eyebrow">{heroContent.badge}</p>
            <h1 className="display-title max-w-3xl">{heroContent.title}</h1>
            <p className="body-muted mt-6 max-w-2xl">{heroContent.description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to={heroContent.primaryAction.href}>
                {heroContent.primaryAction.label}
              </Button>
              <Button to={heroContent.secondaryAction.href} variant="secondary">
                {heroContent.secondaryAction.label}
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <p className="font-display text-4xl leading-none text-cream-100">{stat.value}</p>
                  <p className="mt-2 text-sm text-cream-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel relative overflow-hidden">
            <motion.div style={shouldReduceMotion ? undefined : { y: heroImageY }} className="h-full">
              <Image
                src={heroContent.image}
                alt="Modern coffee shop interior with carefully prepared coffee"
                priority
                wrapperClassName="h-full min-h-[520px] w-full"
                imgClassName="h-full min-h-[520px] w-full object-cover brightness-[0.76]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-espresso-900/65 p-5 backdrop-blur-lg">
                <p className="text-xs uppercase tracking-[0.25em] text-caramel-300">House experience</p>
                <p className="mt-2 font-display text-3xl">Designed to feel warm, editorial, and calm.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-espresso-900/65 p-5 backdrop-blur-lg">
                <Image
                  src={heroContent.accentImage}
                  alt=""
                  wrapperClassName="mb-3 h-12 w-12"
                  imgClassName="h-12 w-12 opacity-80"
                />
                <p className="text-sm leading-6 text-cream-200">
                  Every touchpoint carries the same coffeehouse mood, from browsing the menu to placing an order.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AnimatedSection className="section-shell section-space">
        <SectionTitle
          eyebrow="Signature Experience"
          title="A polished coffee brand with real depth, motion, and warmth."
          description="The site now balances visuals, storytelling, and action so it feels like a production-ready experience instead of a starter template."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {brandHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="panel p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/8"
            >
              <span className="text-sm font-semibold text-caramel-300">0{index + 1}</span>
              <h3 className="mt-4 font-display text-3xl leading-none">{highlight.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cream-300">{highlight.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-space pt-0" delay={0.1}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Featured Drinks"
            title="Designed for people who order with both taste and mood in mind."
          />
          <Button to="/menu" variant="secondary" className="gap-2 self-start">
            View full menu
            <FiArrowRight />
          </Button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              key={item.id}
              className="panel overflow-hidden transition duration-300 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  wrapperClassName="h-full w-full"
                  imgClassName="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cream-100">
                  {item.category}
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl leading-none">{item.name}</h3>
                  <span className="text-sm font-bold text-caramel-300">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm leading-6 text-cream-300">{item.description}</p>
                <Button variant="secondary" className="w-full" onClick={() => addItem(item)}>
                  Add to order
                </Button>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-space pt-0" delay={0.15}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel p-8 sm:p-10">
            <p className="eyebrow">Visit Velvet Roast</p>
            <h2 className="section-title">Beautiful coffee. Fast pickup. Quiet corners.</h2>
            <div className="mt-8 grid gap-4 text-sm text-cream-200 sm:grid-cols-3">
              {heroContent.visitHighlights.map((highlight) => {
                const Icon = highlightIcons[highlight.icon];

                return (
                  <div key={highlight.title} className="rounded-3xl border border-white/8 bg-white/5 p-4">
                    <Icon className="text-lg text-caramel-300" />
                    <p className="mt-3">{highlight.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="panel-strong p-8 sm:p-10">
            <p className="eyebrow">What guests say</p>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <div key={item.author} className="rounded-[24px] border border-white/8 bg-white/5 p-5">
                  <p className="text-base leading-7 text-cream-100">"{item.quote}"</p>
                  <p className="mt-4 text-sm text-caramel-300">{item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
