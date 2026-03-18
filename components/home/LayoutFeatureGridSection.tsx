import React from "react";
import { homeContent } from "@/content/home";

export default function LayoutFeatureGridSection() {
  return (
    <section
      id="layout-features"
      className="py-16 md:py-20 w-full max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Powerful Features, Simplified
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {homeContent.features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-muted border border-border rounded-xl p-6 flex flex-col gap-3 items-center text-center"
          >
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}