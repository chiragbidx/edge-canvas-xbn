/**
 * content/home.ts - Typed landing page content for LaunchPilot
 * All copy and branding reflect the LaunchPilot SaaS email marketing platform.
 */

export const homeContent = {
  brandLabel: "LaunchPilot",
  headline: "Effortless Email Campaigns for Growing Businesses",
  subheadline:
    "Create, send, and track beautiful email campaigns with ease. LaunchPilot gives your team the tools to engage subscribers and grow your brand.",
  primaryCta: {
    label: "Get Started Free",
    href: "/auth#signup"
  },
  secondaryCta: {
    label: "See How It Works",
    href: "#layout-features"
  },
  features: [
    {
      title: "Design Beautiful Emails",
      description:
        "Easily craft stunning emails with our intuitive editor—no coding required."
    },
    {
      title: "Manage Subscribers",
      description:
        "Organize your audience and target the right people with powerful segmentation tools."
    },
    {
      title: "Track Performance",
      description:
        "Understand campaign results with real-time analytics, opens, clicks, and more."
    }
  ],
  testimonialsHeading: "See Why Teams Choose LaunchPilot",
  teamHeading: "Meet the Team",
  pricingHeading: "Simple Pricing for Every Stage",
  contactHeading: "Contact Us",
  faqHeading: "Frequently Asked Questions",
  footerText: `© ${new Date().getFullYear()} LaunchPilot. All rights reserved.`
};

export type HomeContent = typeof homeContent;