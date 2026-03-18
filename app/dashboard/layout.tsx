import * as React from "react";
import { getAuthSession } from "@/lib/auth/session";
import SidebarNav from "@/components/dashboard/sidebar-nav";
import UserMenu from "@/components/dashboard/user-menu";
import MobileNav from "@/components/dashboard/mobile-nav";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  if (!session) {
    redirect("/auth#signin");
  }
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden md:flex flex-col w-64 border-r border-border min-h-screen bg-muted px-6 py-6">
        <div className="text-2xl font-bold mb-10 tracking-tight">LaunchPilot</div>
        <SidebarNav />
      </aside>
      <MobileNav />
      <main className="flex-1 min-w-0 flex flex-col">
        <header className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-border shadow-sm h-18">
          <div className="text-lg md:text-xl font-bold tracking-tight">Dashboard</div>
          <UserMenu />
        </header>
        <div className="flex-1 px-4 md:px-8 py-8">{children}</div>
      </main>
    </div>
  );
}