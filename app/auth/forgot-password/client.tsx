"use client";
import * as React from "react";
import { useState } from "react";
import { sendResetEmail } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await sendResetEmail(new FormData(event.currentTarget));
      setSent(true);
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background shadow-lg border border-border rounded-lg p-8 my-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Reset Your LaunchPilot Password
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        We&apos;ll email you instructions to reset your password.
      </p>
      {sent ? (
        <div className="text-green-700 text-center mb-2">
          If your email is registered, you&apos;ll receive a reset link shortly.
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      )}
      <div className="mt-8 text-xs text-muted-foreground text-center">
        Having trouble? Reach out to our support at chirag@bidx.ai.
      </div>
    </div>
  );
}