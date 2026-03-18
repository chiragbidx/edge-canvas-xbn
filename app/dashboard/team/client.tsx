"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TeamClient({ team, members, invitations, onInvite, onRemove, onRoleChange }) {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Team Members</h2>
      {/* ...existing team/member list logic... */}
      {members && members.length === 0 && (
        <div className="my-12 text-center text-muted-foreground">
          No team members yet. Invite your team to LaunchPilot and collaborate on campaigns.
        </div>
      )}
      {/* ... */}
    </div>
  );
}