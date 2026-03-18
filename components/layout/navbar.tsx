"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { homeContent } from "@/content/home";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  return (
    <nav className="w-full flex items-center justify-between gap-6 px-4 py-3 md:px-8 h-16 border-b border-border bg-background/80 backdrop-blur-md z-20 sticky top-0">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold tracking-tight text-lg md:text-xl"
      >
        {homeContent.brandLabel}
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {(pathname !== "/auth" && pathname !== "/dashboard") && (
          <Button asChild variant="default">
            <Link href="/auth#signup">
              {homeContent.primaryCta.label}
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}