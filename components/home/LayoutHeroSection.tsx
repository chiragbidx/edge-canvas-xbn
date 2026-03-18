import React from "react";
import { homeContent } from "@/content/home";
import HeroStackIllustration from "@/components/illustrations/HeroStackIllustration";

export default function LayoutHeroSection() {
  return (
    <section
      id="layout-hero"
      className="py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto w-full"
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {homeContent.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          {homeContent.subheadline}
        </p>
        <div className="flex gap-4">
          <a
            href={homeContent.primaryCta.href}
            className="bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow transition hover:bg-primary/90"
          >
            {homeContent.primaryCta.label}
          </a>
          <a
            href={homeContent.secondaryCta.href}
            className="border border-input px-5 py-3 rounded-lg font-semibold transition hover:bg-muted"
          >
            {homeContent.secondaryCta.label}
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <HeroStackIllustration className="w-[380px] h-[250px] max-w-full" />
      </div>
    </section>
  );
}