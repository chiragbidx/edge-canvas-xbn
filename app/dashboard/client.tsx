"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardClient() {
  return (
    <div className="px-4 py-8 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Welcome to LaunchPilot
      </h1>
      <p className="mb-8 text-muted-foreground">
        Ready to launch your next campaign? Get started below.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button asChild>
          <Link href="/dashboard/campaigns">New Campaign</Link>
        </Button>
      </div>
      {/* Additional dashboard widgets/metrics can live here */}
    </div>
  );
}