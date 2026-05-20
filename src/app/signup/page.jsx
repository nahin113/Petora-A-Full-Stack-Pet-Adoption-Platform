"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function SignupForm() {
  const router = useRouter();
  const [passwordValue, setPasswordValue] = useState("");

  const checks = {
    length: passwordValue.length >= 6,
    uppercase: /[A-Z]/.test(passwordValue),
    lowercase: /[a-z]/.test(passwordValue),
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
    toast.success("Account created successfully!", {
      style: {
        background: "#1E1611",
        color: "#F7F4EF",
        borderRadius: "9999px",
      },
    });
    setTimeout(() => router.push("/"), 1200);
  };

  return (

    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#C47C5D]/20">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>


      <div
        className="absolute inset-0 z-10 bg-linear-to-tr from-[#1E1611]/30 via-[#F7F4EF]/20 to-transparent backdrop-blur-[2px]"
        aria-hidden="true"
      />


      <div className="relative z-20 w-full max-w-[480px] flex flex-col items-center">
     
        <Card className="w-full p-8 md:p-10 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-black text-black tracking-tight leading-none">
              Create Account
            </h1>
            <p className="text-sm text-black/80 font-bold tracking-tight">
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
              <Label className="font-black text-black text-xs uppercase tracking-wider pl-1">
                Full Name
              </Label>
              <div className="relative flex items-center group">
                <User
                  size={18}
                  className="text-black/70 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="Alex Morgan"
                  className="rounded-full bg-white/80 placeholder-black/40 border border-[#1E1611]/15 text-black h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] focus:bg-white focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-700 text-xs font-black mt-1 pl-2" />
            </TextField>

      
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-black text-xs uppercase tracking-wider pl-1">
                Email Address
              </Label>
              <div className="relative flex items-center group">
                <Mail
                  size={18}
                  className="text-black/70 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="name@example.com"
                  className="rounded-full bg-white/80 placeholder-black/40 border border-[#1E1611]/15 text-black h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] focus:bg-white focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-700 text-xs font-black mt-1 pl-2" />
            </TextField>

  
            <TextField
              isRequired
              name="photoUrl"
              type="url"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-black text-xs uppercase tracking-wider pl-1">
                Avatar Photo URL
              </Label>
              <div className="relative flex items-center group">
                <ImageIcon
                  size={18}
                  className="text-black/70 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  placeholder="https://example.com/avatar.jpg"
                  className="rounded-full bg-white/80 placeholder-black/40 border border-[#1E1611]/15 text-black h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] focus:bg-white focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-700 text-xs font-black mt-1 pl-2" />
            </TextField>

       
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full flex flex-col gap-1.5"
            >
              <Label className="font-black text-black text-xs uppercase tracking-wider pl-1">
                Password
              </Label>
              <div className="relative flex items-center group">
                <Lock
                  size={18}
                  className="text-black/70 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="rounded-full bg-white/80 placeholder-black/40 border border-[#1E1611]/15 text-black h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] focus:bg-white focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>

     
              <div className="mt-2 bg-white/60 border border-white/40 rounded-2xl p-3 space-y-1.5 text-xs font-black">
                <div className="flex items-center gap-2">
                  {checks.length ? (
                    <Check size={14} className="text-emerald-600 stroke-[3]" />
                  ) : (
                    <X size={14} className="text-black/40 stroke-[3]" />
                  )}
                  <span
                    className={
                      checks.length
                        ? "text-emerald-900 font-black"
                        : "text-black/70"
                    }
                  >
                    At least 6 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checks.uppercase ? (
                    <Check size={14} className="text-emerald-600 stroke-[3]" />
                  ) : (
                    <X size={14} className="text-black/40 stroke-[3]" />
                  )}
                  <span
                    className={
                      checks.uppercase
                        ? "text-emerald-900 font-black"
                        : "text-black/70"
                    }
                  >
                    Contains uppercase letter (A-Z)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checks.lowercase ? (
                    <Check size={14} className="text-emerald-600 stroke-[3]" />
                  ) : (
                    <X size={14} className="text-black/40 stroke-[3]" />
                  )}
                  <span
                    className={
                      checks.lowercase
                        ? "text-emerald-900 font-black"
                        : "text-black/70"
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
              <Label className="font-black text-black text-xs uppercase tracking-wider pl-1">
                Confirm Password
              </Label>
              <div className="relative flex items-center group">
                <Lock
                  size={18}
                  className="text-black/70 absolute left-4 group-focus-within:text-[#C47C5D] transition-colors duration-300"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="rounded-full bg-white/80 placeholder-black/40 border border-[#1E1611]/15 text-black h-12 w-full pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#C47C5D] focus:bg-white focus:ring-4 focus:ring-[#C47C5D]/10 transition-all duration-300 shadow-xs"
                />
              </div>
              <FieldError className="text-red-700 text-xs font-black mt-1 pl-2" />
            </TextField>


            <Button
              type="submit"
              className="w-full rounded-full bg-[#C47C5D] text-[#F7F4EF] font-black text-sm h-12 mt-2 hover:bg-[#A86446] border-none flex items-center justify-center gap-2 group cursor-pointer shadow-md transition-all duration-300 transform active:scale-98 tracking-tight"
            >
              <span>Register Account</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>

    
            <div className="relative flex items-center py-0.5 w-full">
              <div className="grow border-t border-[#1E1611]/15"></div>
              <span className="shrink-0 mx-4 text-black/70 text-xs font-black uppercase tracking-widest">
                Or sign up via
              </span>
              <div className="grow border-t border-[#1E1611]/15"></div>
            </div>

        
            <Button
              type="button"
              className="w-full rounded-full border border-[#1E1611]/15 text-[#1E1611] bg-white/90 hover:bg-white h-12 font-black text-sm flex items-center justify-center gap-3 cursor-pointer shadow-xs transition-all duration-300 transform active:scale-98"
            >
              <FcGoogle size={20} />
              <span>Sign up with Google</span>
            </Button>

     
            <div className="text-center mt-2">
              <p className="text-sm text-black/80 font-bold">
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
