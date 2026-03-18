"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { signInWithPassword, signUpWithPassword } from "./actions";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import Link from "next/link";

type Mode = "signin" | "signup";

export default function AuthClient() {
  const [mode, setMode] = useState<Mode>("signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash === "#signup") {
      setMode("signup");
    } else if (window.location.hash === "#signin") {
      setMode("signin");
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    try {
      if (mode === "signin") {
        const res = await signInWithPassword(formData);
        if (res?.error) {
          setError(res.error);
        } else {
          router.push("/dashboard");
        }
      } else {
        const res = await signUpWithPassword(formData);
        if (res?.error) {
          setError(res.error);
        } else {
          router.push("/dashboard");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background shadow-lg border border-border rounded-lg p-8 my-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
        {mode === "signin"
          ? "Welcome Back to LaunchPilot"
          : "Start Your Email Journey with LaunchPilot"}
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        {mode === "signin"
          ? "Sign in to manage your email campaigns."
          : "Create your account and start sending campaigns today."}
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
        />
        <Input
          name="password"
          type="password"
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          required
          placeholder="Password"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <Button type="submit" disabled={loading} className="mt-2">
          {mode === "signin"
            ? loading
              ? "Logging In..."
              : "Log In"
            : loading
            ? "Signing Up..."
            : "Sign Up"}
        </Button>
        <div className="flex items-center justify-between text-xs mt-2 text-muted-foreground">
          {mode === "signin" ? (
            <>
              <span>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="text-primary underline"
                  onClick={() => setMode("signup")}
                  aria-label="Sign up"
                >
                  Sign Up
                </button>
              </span>
              <Link
                href="/auth/forgot-password"
                className="text-primary underline"
              >
                Forgot password?
              </Link>
            </>
          ) : (
            <>
              <span>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-primary underline"
                  onClick={() => setMode("signin")}
                  aria-label="Sign in"
                >
                  Log In
                </button>
              </span>
            </>
          )}
        </div>
      </form>
      <div className="mt-8 text-xs text-muted-foreground text-center">
        By continuing, you agree to LaunchPilot&apos;s terms and privacy policy.
      </div>
    </div>
  );
}