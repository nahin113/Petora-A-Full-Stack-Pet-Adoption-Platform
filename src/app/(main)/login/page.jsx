"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
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
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [passwordValue, setPasswordValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log(data);

    if (data) {
      toast.success("Logged In successfully!", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "9999px",
        },
      });
      router.push("/");
    }

    if (error) {
      toast.error(error.message || "Login failed!", {
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

      <div className="relative z-20 w-full max-w-[450px] flex flex-col items-center">
        <Card className="w-full max-w-[440px] p-8 bg-white/70 dark:bg-[#1E1611]/80 backdrop-blur-md border border-white/40 dark:border-white/5 shadow-xl rounded-2xl transition-colors duration-300">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight leading-none transition-colors duration-300">
              Welcome Back
            </h1>
            <p className="text-sm text-[#1E1611]/70 dark:text-[#F7F4EF]/70 font-semibold tracking-tight transition-colors duration-300">
              Continue your companion search directory journey
            </p>
          </div>

          <Form className="flex flex-col gap-6 w-full" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full flex flex-col gap-2"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please provide a valid email format standard.";
                }
                return null;
              }}
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
              name="password"
              type={isVisible ? "text" : "password"}
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
                  type={isVisible ? "text" : "password"}
                  placeholder="••••••••"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 border border-[#1E1611]/15 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] h-12 w-full pl-12 pr-12 text-sm font-semibold outline-none focus:border-[#C47C5D] dark:focus:border-[#C47C5D] focus:bg-white dark:focus:bg-[#1E1611] focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
                <button
                  className="absolute right-4 focus:outline-none text-[#1E1611]/50 dark:text-[#F7F4EF]/50 hover:text-[#C47C5D] transition-colors cursor-pointer"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </TextField>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#C47C5D] text-[#F7F4EF] font-black uppercase text-xs tracking-wider h-12 mt-2 hover:bg-[#A86446] border-none flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-98 group shadow-md cursor-pointer"
            >
              <span>Login Account</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>

            <div className="relative flex items-center py-1 w-full">
              <div className="grow border-t border-[#1E1611]/15 dark:border-white/10"></div>
              <span className="shrink-0 mx-4 text-[#1E1611]/60 dark:text-[#F7F4EF]/60 text-xs font-black uppercase tracking-widest transition-colors duration-300">
                Or connect via
              </span>
              <div className="grow border-t border-[#1E1611]/15 dark:border-white/10"></div>
            </div>

            <Button
              onClick={handleGoogleSignin}
              type="button"
              className="w-full rounded-full border border-[#1E1611]/20 dark:border-white/10 text-[#1E1611] dark:text-[#F7F4EF] bg-transparent hover:bg-[#1E1611]/5 dark:hover:bg-[#F7F4EF]/5 h-12 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-98 cursor-pointer shadow-xs"
            >
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </Button>

            <div className="text-center mt-2">
              <p className="text-sm text-[#1E1611]/70 dark:text-[#F7F4EF]/70 font-semibold transition-colors duration-300">
                New to the platform?{" "}
                <Link
                  href="/signup"
                  className="text-[#C47C5D] font-black hover:text-[#A86446] pl-1 underline decoration-[#C47C5D]/30 transition-colors"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}
