"use client";
import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  User,
  Mail,
  Image as ImageIcon,
  Lock,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast, Toaster } from "react-hot-toast";
import {
  Card,
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignupForm() {
  const [passwordValue, setPasswordValue] = useState("");

  const checks = {
    length: passwordValue.length >= 6,
    uppercase: /[A-Z]/.test(passwordValue),
    lowercase: /[a-z]/.test(passwordValue),
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (!checks.length || !checks.uppercase || !checks.lowercase) {
      toast.error("Please meet all password security standards first.", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match.", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "1rem",
        },
      });
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      toast.success("Account created successfully!", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "9999px",
        },
      });

      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Account creation failed!", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "9999px",
        },
      });
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-[#C47C5D]/20 bg-[#F7F4EF] dark:bg-[#1E1611] transition-colors duration-300">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 w-full max-w-[480px] flex flex-col items-center">
        <Card className="w-full p-8 md:p-10 bg-white/70 dark:bg-[#1E1611]/80 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 shadow-xl rounded-[2.5rem] transition-colors duration-300">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight leading-none transition-colors duration-300">
              Create Account
            </h1>
            <p className="text-sm text-[#1E1611]/80 dark:text-[#F7F4EF]/70 font-semibold tracking-tight transition-colors duration-300">
              Join Petora to begin searching your local network companions
            </p>
          </div>

          <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
            <Toaster position="top-center" />

            <TextField
              isRequired
              name="name"
              type="text"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-[#1E1611] dark:text-[#F7F4EF]/90 text-xs uppercase tracking-wider pl-1 transition-colors duration-300">
                Full Name
              </Label>
              <div className="relative flex items-center group">
                <User
                  size={18}
                  className="text-[#1E1611]/50 dark:text-[#F7F4EF]/50 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="Alex Morgan"
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 placeholder-[#1E1611]/40 dark:placeholder-[#F7F4EF]/30 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-600 dark:text-red-400 text-xs font-black mt-1 pl-2" />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-[#1E1611] dark:text-[#F7F4EF]/90 text-xs uppercase tracking-wider pl-1 transition-colors duration-300">
                Email Address
              </Label>
              <div className="relative flex items-center group">
                <Mail
                  size={18}
                  className="text-[#1E1611]/50 dark:text-[#F7F4EF]/50 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="name@example.com"
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 placeholder-[#1E1611]/40 dark:placeholder-[#F7F4EF]/30 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-600 dark:text-red-400 text-xs font-black mt-1 pl-2" />
            </TextField>

            <TextField
              isRequired
              name="image"
              type="url"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-[#1E1611] dark:text-[#F7F4EF]/90 text-xs uppercase tracking-wider pl-1 transition-colors duration-300">
                Avatar Photo URL
              </Label>
              <div className="relative flex items-center group">
                <ImageIcon
                  size={18}
                  className="text-[#1E1611]/50 dark:text-[#F7F4EF]/50 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="https://example.com/avatar.jpg"
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 placeholder-[#1E1611]/40 dark:placeholder-[#F7F4EF]/30 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-600 dark:text-red-400 text-xs font-black mt-1 pl-2" />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-[#1E1611] dark:text-[#F7F4EF]/90 text-xs uppercase tracking-wider pl-1 transition-colors duration-300">
                Password
              </Label>
              <div className="relative flex items-center group">
                <Lock
                  size={18}
                  className="text-[#1E1611]/50 dark:text-[#F7F4EF]/50 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>

              {/* Password Dynamic Requirements Indicator Box */}
              <div className="mt-2 bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl p-3 space-y-1.5 text-xs font-black transition-colors">
                <div className="flex items-center gap-2">
                  {checks.length ? (
                    <Check
                      size={14}
                      className="text-emerald-600 dark:text-emerald-400 stroke-[3]"
                    />
                  ) : (
                    <X
                      size={14}
                      className="text-[#1E1611]/30 dark:text-[#F7F4EF]/30 stroke-[3]"
                    />
                  )}
                  <span
                    className={
                      checks.length
                        ? "text-emerald-800 dark:text-emerald-300 font-black"
                        : "text-[#1E1611]/70 dark:text-[#F7F4EF]/70"
                    }
                  >
                    At least 6 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checks.uppercase ? (
                    <Check
                      size={14}
                      className="text-emerald-600 dark:text-emerald-400 stroke-[3]"
                    />
                  ) : (
                    <X
                      size={14}
                      className="text-[#1E1611]/30 dark:text-[#F7F4EF]/30 stroke-[3]"
                    />
                  )}
                  <span
                    className={
                      checks.uppercase
                        ? "text-emerald-800 dark:text-emerald-300 font-black"
                        : "text-[#1E1611]/70 dark:text-[#F7F4EF]/70"
                    }
                  >
                    Contains uppercase letter (A-Z)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checks.lowercase ? (
                    <Check
                      size={14}
                      className="text-emerald-600 dark:text-emerald-400 stroke-[3]"
                    />
                  ) : (
                    <X
                      size={14}
                      className="text-[#1E1611]/30 dark:text-[#F7F4EF]/30 stroke-[3]"
                    />
                  )}
                  <span
                    className={
                      checks.lowercase
                        ? "text-emerald-800 dark:text-emerald-300 font-black"
                        : "text-[#1E1611]/70 dark:text-[#F7F4EF]/70"
                    }
                  >
                    Contains lowercase letter (a-z)
                  </span>
                </div>
              </div>
            </TextField>

            <TextField
              isRequired
              name="confirmPassword"
              type="password"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-[#1E1611] dark:text-[#F7F4EF]/90 text-xs uppercase tracking-wider pl-1 transition-colors duration-300">
                Confirm Password
              </Label>
              <div className="relative flex items-center group">
                <Lock
                  size={18}
                  className="text-[#1E1611]/50 dark:text-[#F7F4EF]/50 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-600 dark:text-red-400 text-xs font-black mt-1 pl-2" />
            </TextField>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#C47C5D] text-[#F7F4EF] font-black uppercase text-xs tracking-wider h-12 mt-2 hover:bg-[#A86446] border-none flex items-center justify-center gap-2 group cursor-pointer shadow-md transition-all duration-300 transform active:scale-98"
            >
              <span>Register Account</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>

            <div className="relative flex items-center py-0.5 w-full">
              <div className="grow border-t border-[#1E1611]/15 dark:border-white/10"></div>
              <span className="shrink-0 mx-4 text-[#1E1611]/60 dark:text-[#F7F4EF]/60 text-xs font-black uppercase tracking-widest transition-colors duration-300">
                Or sign up via
              </span>
              <div className="grow border-t border-[#1E1611]/15 dark:border-white/10"></div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleSignin}
              className="w-full rounded-full border border-[#1E1611]/20 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] bg-transparent hover:bg-[#1E1611]/5 dark:hover:bg-[#F7F4EF]/5 h-12 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-xs transition-all duration-300 transform active:scale-98"
            >
              <FcGoogle size={20} />
              <span>Sign up with Google</span>
            </Button>

            <div className="text-center mt-2">
              <p className="text-sm text-[#1E1611]/70 dark:text-[#F7F4EF]/70 font-semibold transition-colors duration-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#C47C5D] font-black hover:text-[#A86446] pl-1 underline decoration-[#C47C5D]/30 transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}
