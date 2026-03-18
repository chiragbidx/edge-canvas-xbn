import React from "react";
import { homeContent } from "@/content/home";

export default function LayoutFooterSection() {
  return (
    <footer
      id="layout-footer"
      className="py-10 w-full text-center text-muted-foreground text-sm mt-8 border-t border-border"
    >
      {homeContent.footerText}
    </footer>
  );
}