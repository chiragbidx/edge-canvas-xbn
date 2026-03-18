"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DeleteAccountDialog({ onDelete, loading, error }) {
  const [confirm, setConfirm] = React.useState("");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">
        Delete your LaunchPilot account?
      </h2>
      <p className="text-muted-foreground mb-4">
        This action is <span className="font-semibold text-destructive">permanent</span> and will remove all your LaunchPilot data.
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (confirm === "DELETE") {
            onDelete();
          }
        }}
        className="space-y-4"
      >
        <Input
          placeholder='Type "DELETE" to confirm'
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        {error && (
          <div className="text-destructive text-xs">{error}</div>
        )}
        <Button
          type="submit"
          variant="destructive"
          disabled={loading || confirm !== "DELETE"}
          className="w-full"
        >
          {loading ? "Deleting..." : "Delete Account"}
        </Button>
      </form>
    </div>
  );
}