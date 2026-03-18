"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SettingsClient({ user }) {
  return (
    <div className="max-w-xl mx-auto space-y-12 py-8">
      <section>
        <h2 className="text-xl font-bold mb-2">Profile</h2>
        <p className="text-muted-foreground mb-6">
          Update your LaunchPilot profile details.
        </p>
        {/* ...profile update form... */}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Email</h2>
        <p className="text-muted-foreground mb-6">
          Change your login email for LaunchPilot.
        </p>
        {/* ...email update form... */}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Password</h2>
        <p className="text-muted-foreground mb-6">
          Update your password to keep your LaunchPilot account secure.
        </p>
        {/* ...password update form... */}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Danger Zone</h2>
        <p className="text-muted-foreground mb-6">
          Delete your LaunchPilot account. This action is permanent.
        </p>
        {/* ...account deletion UI... */}
      </section>
    </div>
  );
}