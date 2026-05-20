"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight } from "lucide-react";
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

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      if (email === "hello@petora.com" && password === "password123") {
        toast.success("Welcome back to Petora!", {
          style: {
            background: "#1E1611",
            color: "#F7F4EF",
            borderRadius: "9999px",
          },
        });

        setTimeout(() => {
          router.push("/");
        }, 1200);
      } else {
        throw new Error("Invalid email or security password mapping.");
      }
    } catch (error) {
      toast.error(error.message || "Authentication checkpoint failed.", {
        style: {
          background: "#1E1611",
          color: "#F7F4EF",
          borderRadius: "1rem",
        },
      });
    }
  };

  const handleGoogleSignin = async () => {
    try {
      toast.success("Connecting with Google Secure Network...", { icon: "⚡" });
    } catch (error) {
      toast.error("Social login authorization canceled.");
    }
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


      <div className="relative z-20 w-full max-w-[450px] flex flex-col items-center">
  
        <Card className="w-full p-8 md:p-10 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl">
 
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-black text-black tracking-tight leading-none">
              Welcome Back
            </h1>
            <p className="text-sm text-black/80 font-bold tracking-tight">
              Continue your companion search directory journey
            </p>
          </div>

          <Form className="flex flex-col gap-6 w-full" onSubmit={onSubmit}>
            <Toaster position="top-center" reverseOrder={false} />

    
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
              minLength={8}
              name="password"
              type="password"
              className="w-full flex flex-col gap-2"
            >
              <div className="flex justify-between items-center pl-1">
                <Label className="font-black text-black text-xs uppercase tracking-wider">
                  Password
                </Label>
                <Link
                  href="/forgot"
                  className="text-xs font-black text-[#1E1611] hover:text-[#C47C5D] underline decoration-[#C47C5D]/30 transition-colors"
                >
                  Forgot?
                </Link>
              </div>
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
              className="w-full rounded-full bg-[#C47C5D] text-[#F7F4EF] font-black text-sm h-12 mt-2 hover:bg-[#A86446] border-none flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-98 tracking-tight group shadow-md cursor-pointer"
            >
              <span>Login Account</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>

 
            <div className="relative flex items-center py-1 w-full">
              <div className="grow border-t border-[#1E1611]/15"></div>
              <span className="shrink-0 mx-4 text-black/70 text-xs font-black uppercase tracking-widest">
                Or connect via
              </span>
              <div className="grow border-t border-[#1E1611]/15"></div>
            </div>

            <Button
              onClick={handleGoogleSignin}
              type="button"
              className="w-full rounded-full border border-[#1E1611]/15 text-[#1E1611] bg-white/90 hover:bg-white h-12 font-black text-sm flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-98 cursor-pointer shadow-xs"
            >
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </Button>

        
            <div className="text-center mt-2">
              <p className="text-sm text-black/80 font-bold">
                New to the platform?{" "}
                <Link
                  href="/register"
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
