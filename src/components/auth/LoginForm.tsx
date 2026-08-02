"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { loginSchema, type LoginFormValues } from "@/lib/validations/login";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", rememberMe: true },
  });

  async function onSubmit(values: LoginFormValues) {
    // TODO: replace with the real auth call once the API is wired up.
    console.log("login submit", values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-6">
      <Input
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="Enter a valid email address"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        placeholder="Create a strong password"
        error={errors.password?.message}
        rightElement={
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="text-gray-400 transition-colors hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        }
        {...register("password")}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <Checkbox {...register("rememberMe")} />
          Remember Me
        </label>
        <Link href="#" className="font-medium text-brand-600 hover:opacity-80">
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
        Login
      </Button>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="#" className="font-bold text-brand-600 hover:opacity-80">
          Register
        </Link>
      </p>
    </form>
  );
}
