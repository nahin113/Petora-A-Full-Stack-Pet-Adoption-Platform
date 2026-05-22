"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PlusCircle } from "lucide-react";
import {
  Card,
  Button,
  TextField,
  Label,
  Input,
  FieldError,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { addPetData } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AddPetPage() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

    const { data: session, isPending: isSessionLoading } =
      authClient.useSession();
    const user = session?.user;

const handlePetSubmit = async (e) => {
  e.preventDefault();
  setIsPending(true);

  const formData = new FormData(e.currentTarget);
  const petData = Object.fromEntries(formData.entries());

  try {
    const data = await addPetData(petData);

    console.log("Response from server action:", data);

    if (data && data.acknowledged) {
      toast.success("Pet listed successfully!");

      setTimeout(() => {
        router.push("/dashboard/my-listings");
      }, 2000);
    } else {
      throw new Error("Database did not acknowledge the insertion.");
    }
  } catch (err) {
    console.error("Submission error details:", err);
    toast.error("An unexpected error occurred.");
    setIsPending(false);
  }
};

  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-1">
          <Link
            href="/my-listings"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#C47C5D] hover:underline mb-2"
          >
            <ArrowLeft size={14} />
            <span>Back to Listings</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
            List a Pet for <span className="text-[#C47C5D]">Adoption</span>
          </h1>
          <p className="text-sm text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold">
            Fill out the configuration parameters below to submit your pet to
            the MongoDB repository.
          </p>
        </div>

        <Card className="w-full p-6 sm:p-10 bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm transition-all duration-300 overflow-visible">
          <form onSubmit={handlePetSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pet Name */}
              <TextField name="name" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Pet Name
                </Label>
                <Input placeholder="e.g., Blizzard" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Species Select */}
              <div>
                <Select
                  name="species"
                  isRequired
                  className="w-full"
                  placeholder="Select species"
                >
                  <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                    Species
                  </Label>
                  <Select.Trigger className="rounded-2xl w-full flex items-center justify-between bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-10 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]">
                    <ListBox>
                      <ListBox.Item
                        id="Dog"
                        textValue="Dog"
                        className="rounded-xl font-semibold p-2"
                      >
                        Dog <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Cat"
                        textValue="Cat"
                        className="rounded-xl font-semibold p-2"
                      >
                        Cat <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Bird"
                        textValue="Bird"
                        className="rounded-xl font-semibold p-2"
                      >
                        Bird <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Fish"
                        textValue="Fish"
                        className="rounded-xl font-semibold p-2"
                      >
                        Fish <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Guinea Pig"
                        textValue="Guinea Pig"
                        className="rounded-xl font-semibold p-2"
                      >
                        Guinea Pig <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Hamster"
                        textValue="Hamster"
                        className="rounded-xl font-semibold p-2"
                      >
                        Hamster <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Other"
                        textValue="Other"
                        className="rounded-xl font-semibold p-2"
                      >
                        Other <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Breed */}
              <TextField name="breed" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Breed
                </Label>
                <Input
                  placeholder="e.g., Siberian Husky"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Age */}
              <TextField name="age" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Age
                </Label>
                <Input
                  placeholder="e.g., 2 years old"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Gender Select */}
              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select gender"
                >
                  <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                    Gender
                  </Label>
                  <Select.Trigger className="rounded-2xl w-full flex items-center justify-between bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-10 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]">
                    <ListBox>
                      <ListBox.Item
                        id="Male"
                        textValue="Male"
                        className="rounded-xl font-semibold p-2"
                      >
                        Male <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Female"
                        textValue="Female"
                        className="rounded-xl font-semibold p-2"
                      >
                        Female <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Unknown"
                        textValue="Unknown"
                        className="rounded-xl font-semibold p-2"
                      >
                        Unknown <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Image URL */}
              <TextField name="imageUrl" type="url" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://postimg.cc/your-image-id"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Health Status */}
              <TextField name="healthStatus" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Health Status
                </Label>
                <Input
                  placeholder="e.g., Excellent, energetic"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Vaccination Status Select */}
              <div>
                <Select
                  name="vaccinationStatus"
                  isRequired
                  className="w-full"
                  placeholder="Select status"
                >
                  <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                    Vaccination Status
                  </Label>
                  <Select.Trigger className="rounded-2xl w-full flex items-center justify-between bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-10 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]">
                    <ListBox>
                      <ListBox.Item
                        id="Fully Vaccinated"
                        textValue="Fully Vaccinated"
                        className="rounded-xl font-semibold p-2"
                      >
                        Fully Vaccinated <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Partially Vaccinated"
                        textValue="Partially Vaccinated"
                        className="rounded-xl font-semibold p-2"
                      >
                        Partially Vaccinated <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Not Vaccinated"
                        textValue="Not Vaccinated"
                        className="rounded-xl font-semibold p-2"
                      >
                        Not Vaccinated <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Location */}
              <TextField name="location" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Location
                </Label>
                <Input
                  placeholder="e.g., Dhaka, Bangladesh"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Adoption Fee */}
              <TextField name="adoptionFee" type="number" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Adoption Fee (Tk)
                </Label>
                <Input type="number" placeholder="500" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe the pet's behavioral traits, medical history, and personality..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Owner Email (Auto-filled & Read Only) */}
            <div className="md:col-span-2 opacity-75">
              <TextField name="ownerEmail">
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Owner Email
                </Label>
                <Input
                  type="email"
                  readOnly
                  value={user?.email}
                  className="rounded-2xl cursor-not-allowed bg-[#1E1611]/10 dark:bg-[#F7F4EF]/10"
                />
              </TextField>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                isLoading={isPending}
                className="rounded-full px-8 text-[11px] font-black uppercase tracking-wider h-12 flex items-center gap-2 transition-all bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446]"
              >
                {!isPending && <PlusCircle size={15} />}
                {isPending ? "Adding Companion..." : "Add Pet Listing"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
