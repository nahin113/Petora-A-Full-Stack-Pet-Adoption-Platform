"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Calendar,
  User,
  Mail,
  MessageSquare,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { Button, TextField, Label, InputGroup } from "@heroui/react";
import { submitAdoptionRequest } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AdoptionForm({ petId, petName, ownerEmail }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAuthenticated = true;
  const currentUser = isAuthenticated
    ? { name: user?.name, email: user?.email }
    : null;


  const isOwnListing = currentUser && currentUser.email === ownerEmail;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isOwnListing) {
      toast.error("You cannot adopt your own listed companion.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const formFields = Object.fromEntries(formData.entries());

    const requestPayload = {
      ...formFields,
      petId,
      petName,
      requesterName: currentUser?.name,
      requesterEmail: currentUser?.email,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await submitAdoptionRequest(requestPayload);
      if (res && res.acknowledged) {
        toast.success(`Application for ${petName} submitted successfully!`);
        e.currentTarget.reset();
      } else {
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] p-6 lg:p-8 space-y-6 text-center shadow-sm sticky top-28">
        <div className="space-y-2 flex flex-col items-center">
          <div className="p-3 bg-[#C47C5D]/10 text-[#C47C5D] rounded-full w-fit">
            <Lock size={20} />
          </div>
          <h2 className="text-xl font-black tracking-tight">Ready to adopt?</h2>
          <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold max-w-[220px] mx-auto">
            You must be logged into your PeTora account to submit adoption
            requests.
          </p>
        </div>

        <Button
          onClick={() => router.push("/login")}
          className="w-full h-12 rounded-full text-xs font-black uppercase tracking-wider bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446] shadow-sm transition-all"
        >
          Login to Adopt Now
        </Button>
      </div>
    );
  }

  if (isOwnListing) {
    return (
      <div className="bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] p-6 lg:p-8 space-y-6 text-center shadow-sm sticky top-28">
        <div className="space-y-2 flex flex-col items-center">
          <div className="p-3 bg-[#C47C5D]/10 text-[#C47C5D] rounded-full w-fit">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-xl font-black tracking-tight">Your Listing</h2>
          <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold max-w-[240px] mx-auto">
            You posted this listing for {petName}. You can track adoption
            requests sent by other users directly from your manager dashboard.
          </p>
        </div>

        <Button
          onClick={() => router.push("/dashboard/my-listings")}
          className="w-full h-12 rounded-full text-xs font-black uppercase tracking-wider bg-[#1E1611]/5 dark:bg-white/5 text-[#1E1611] dark:text-[#F7F4EF] border border-[#1E1611]/10 dark:border-white/10 hover:bg-[#1E1611]/10 transition-all"
        >
          Go to Dashboard
        </Button>
      </div>
    );
  }

  
  return (
    <div className="bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] p-6 lg:p-8 space-y-6 shadow-sm sticky top-28">
      <div className="space-y-1">
        <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
          <Heart size={18} className="text-[#C47C5D] fill-[#C47C5D]/10" />
          Request to Adopt {petName}
        </h2>
        <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold">
          Fill out this form and the owner will review your request.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField isReadOnly>
          <Label className="text-xs font-bold text-[#1E1611]/70 dark:text-[#F7F4EF]/70 mb-1 block">
            Pet Name
          </Label>
          <InputGroup className="rounded-xl border-[#1E1611]/10 dark:border-white/10 bg-[#1E1611]/5 dark:bg-white/5 opacity-80">
            <InputGroup.Input placeholder={petName} />
          </InputGroup>
        </TextField>

        <TextField isReadOnly>
          <Label className="text-xs font-bold text-[#1E1611]/70 dark:text-[#F7F4EF]/70 mb-1 block">
            Your Name
          </Label>
          <InputGroup className="rounded-xl border-[#1E1611]/10 dark:border-white/10 bg-[#1E1611]/5 dark:bg-white/5 opacity-80">
            <InputGroup.Prefix>
              <User
                size={14}
                className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40"
              />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder={currentUser.name} />
          </InputGroup>
        </TextField>

        <TextField isReadOnly>
          <Label className="text-xs font-bold text-[#1E1611]/70 dark:text-[#F7F4EF]/70 mb-1 block">
            Your Email
          </Label>
          <InputGroup className="rounded-xl border-[#1E1611]/10 dark:border-white/10 bg-[#1E1611]/5 dark:bg-white/5 opacity-80">
            <InputGroup.Prefix>
              <Mail
                size={14}
                className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40"
              />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder={currentUser.email} />
          </InputGroup>
        </TextField>

        <TextField isRequired>
          <Label className="text-xs font-bold text-[#1E1611]/70 dark:text-[#F7F4EF]/70 mb-1 block">
            Preferred Pickup Date
          </Label>
          <InputGroup className="rounded-xl border-[#1E1611]/10 dark:border-white/10">
            <InputGroup.Prefix>
              <Calendar
                size={14}
                className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40"
              />
            </InputGroup.Prefix>
            <InputGroup.Input type="date" name="pickupDate" />
          </InputGroup>
        </TextField>

        <TextField isRequired>
          <Label className="text-xs font-bold text-[#1E1611]/70 dark:text-[#F7F4EF]/70 mb-1 block">
            Message to Owner
          </Label>
          <InputGroup className="rounded-xl border-[#1E1611]/10 dark:border-white/10">
            <InputGroup.Prefix>
              <MessageSquare
                size={14}
                className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40 mt-1"
              />
            </InputGroup.Prefix>
            <InputGroup.TextArea
              name="message"
              placeholder="Introduce yourself..."
              rows={3}
            />
          </InputGroup>
        </TextField>

        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full h-12 rounded-full text-xs font-black uppercase tracking-wider bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446] shadow-sm transition-all"
        >
          Adopt {petName}
        </Button>
      </form>
    </div>
  );
}
