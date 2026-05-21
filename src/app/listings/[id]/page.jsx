import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSinglePetData } from "@/lib/actions";
import AdoptionForm from "@/components/AdoptionForm";
import {
  ChevronLeft,
  MapPin,
  Tag,
  ShieldCheck,
  Activity,
  Award,
  UserCheck,
} from "lucide-react";
import { Button, Card } from "@heroui/react";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const pet = await getSinglePetData(id);

  if (!pet) {
    notFound();
  }

  const isAdopted = pet.status === "Adopted";

  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-6">

        <Link
          href="/dashboard/listings"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#C47C5D] hover:underline"
        >
          <ChevronLeft size={14} /> Back to listings
        </Link>

   
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 space-y-6">
      
            <div className="relative w-full aspect-[16/10] bg-white dark:bg-[#1E1611]/40 rounded-[2rem] border border-[#1E1611]/10 dark:border-white/5 overflow-hidden shadow-sm">
              <Image
                src={
                  pet.imageUrl ||
                  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200"
                }
                alt={pet.name}
                fill
                priority
                className="object-cover"
              />

              <div
                className={`absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md text-white shadow-sm ${
                  isAdopted ? "bg-red-500" : "bg-emerald-500"
                }`}
              >
                {pet.status || "Available"}
              </div>
            </div>


            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                    {pet.name}
                  </h1>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#C47C5D] bg-[#C47C5D]/10 px-2.5 py-0.5 rounded-md">
                      {pet.species}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 bg-[#1E1611]/5 dark:bg-white/5 px-2.5 py-0.5 rounded-md">
                      {pet.breed}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 bg-[#1E1611]/5 dark:bg-white/5 px-2.5 py-0.5 rounded-md">
                      {pet.gender}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 bg-[#1E1611]/5 dark:bg-white/5 px-2.5 py-0.5 rounded-md">
                      {pet.age}
                    </span>
                  </div>
                </div>


                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#1E1611]/40 dark:text-[#F7F4EF]/40">
                    Adoption Fee
                  </p>
                  <p className="text-2xl font-black text-[#C47C5D]">
                    {Number(pet.adoptionFee) === 0
                      ? "Free"
                      : `${pet.adoptionFee} Tk`}
                  </p>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Species
                  </p>
                  <p className="text-sm font-black">{pet.species}</p>
                </div>
              </Card>

              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <Activity size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Breed
                  </p>
                  <p className="text-sm font-black truncate max-w-[180px]">
                    {pet.breed}
                  </p>
                </div>
              </Card>

              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-black truncate max-w-[180px]">
                    {pet.location || "Not Specified"}
                  </p>
                </div>
              </Card>

              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Vaccination Status
                  </p>
                  <p className="text-sm font-black">
                    {pet.vaccinationStatus || "Vaccinated"}
                  </p>
                </div>
              </Card>

              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <Activity size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Health Status
                  </p>
                  <p className="text-sm font-black">
                    {pet.healthStatus || "Excellent"}
                  </p>
                </div>
              </Card>

              <Card className="p-4 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl flex flex-row items-center gap-3 shadow-none">
                <div className="p-2.5 bg-[#C47C5D]/10 text-[#C47C5D] rounded-xl">
                  <UserCheck size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1E1611]/40 dark:text-[#F7F4EF]/40 uppercase tracking-wider">
                    Listing Owner
                  </p>
                  <p className="text-xs font-black truncate max-w-[180px]">
                    {pet.ownerEmail}
                  </p>
                </div>
              </Card>
            </div>

  
            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-black tracking-tight">
                About {pet.name}
              </h3>
              <p className="text-sm text-[#1E1611]/70 dark:text-[#F7F4EF]/70 font-medium leading-relaxed bg-white dark:bg-[#1E1611]/20 p-6 rounded-2xl border border-[#1E1611]/5 text-justify">
                {pet.description ||
                  "No specific detailed overview description was provided for this companion."}
              </p>
            </div>
          </div>

 
          <div className="lg:col-span-1">
            <AdoptionForm
              petId={id}
              petName={pet.name}
              ownerEmail={pet.ownerEmail} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
