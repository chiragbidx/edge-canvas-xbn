"use client";
import * as React from "react";
import { useState } from "react";
import { resetPassword } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordClient({ token }: { token: string }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await resetPassword(token, password);
      setDone(true);
    } catch (err: any) {
      setError("Something went wrong. Please try again or request a new reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background shadow-lg border border-border rounded-lg p-8 my-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Create a New Password
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Set a secure password for your LaunchPilot account.
      </p>
      {done ? (
        <div className="text-green-700 text-center mb-2">
          Your password has been reset. You may now log in.
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            placeholder="New password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            placeholder="Confirm new password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      )}
      <div className="mt-8 text-xs text-muted-foreground text-center">
        Need help? Email chirag@bidx.ai.
      </div>
    </div>
  );
}