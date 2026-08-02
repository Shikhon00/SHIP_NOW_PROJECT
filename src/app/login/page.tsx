import type { Metadata } from "next";
import { Zap } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { AuthHero } from "@/components/auth/AuthHero";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | ShipNow",
  description: "Log in to continue managing your logistics with ShipNow",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-white">
      <AuthHero />

      <section className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Full wordmark — mobile/tablet only, hero already shows it on desktop */}
          <div className="flex justify-center lg:hidden">
            <Logo />
          </div>

          <div className="text-center">
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <Zap className="h-6 w-6" fill="currentColor" />
            </span>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Log in to continue managing your logistics with ShipNow.
            </p>
          </div>

          <LoginForm />
        </div>
      </section>
    </main>
  );
}
