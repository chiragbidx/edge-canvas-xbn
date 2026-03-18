import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SubscribersEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[240px] w-full text-center py-10 gap-3">
      <h2 className="text-lg font-semibold">Subscribers</h2>
      <p className="text-muted-foreground mb-6">
        No subscribers found. Start building your audience by adding subscribers or importing a list.
      </p>
      <Button asChild>
        <Link href="/dashboard/subscribers/new">Add Subscriber</Link>
      </Button>
    </div>
  );
}