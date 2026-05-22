import Link from "next/link";
import {
  PlusCircle,
  Tag,
  Eye,
  Edit3,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import { Card, Button } from "@heroui/react";
import { getMyPetData } from "@/lib/actions";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditPetModal from "@/components/EditPetModal";
import DeleteModal from "@/components/DeleteModal";
import RequestsModal from "@/components/RequestModal";




const MyListingsPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;
  const loggedInUserEmail = user.email;

  const listings = await getMyPetData(loggedInUserEmail);

  const totalListings = listings.length;
  const availableListings = listings.filter(
    (pet) => pet.status !== "Adopted"
  ).length;
  const adoptedListings = listings.filter(
    (pet) => pet.status === "Adopted"
  ).length;

  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
    
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#1E1611]/10 dark:border-white/5 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 bg-[#C47C5D]/10 text-[#C47C5D] px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-1">
              <LayoutDashboard size={12} />
              <span>My Dashboard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              My <span className="text-[#C47C5D]">Listings</span>
            </h1>
            <p className="text-sm text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold">
              Manage your unique pet listings and incoming adoption requests.
            </p>
          </div>

          <Link href="/dashboard/add-pet">
            <Button className="rounded-full px-6 text-[11px] font-black uppercase tracking-wider h-12 flex items-center gap-2 transition-all bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446] w-full sm:w-auto shadow-sm">
              <PlusCircle size={15} />
              Add New Pet
            </Button>
          </Link>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl text-center space-y-1">
            <span className="text-3xl font-black text-[#C47C5D]">
              {totalListings}
            </span>
            <p className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/50 dark:text-[#F7F4EF]/50">
              Total Listings
            </p>
          </Card>
          <Card className="p-6 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl text-center space-y-1">
            <span className="text-3xl font-black text-green-500">
              {availableListings}
            </span>
            <p className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/50 dark:text-[#F7F4EF]/50">
              Available
            </p>
          </Card>
          <Card className="p-6 bg-white dark:bg-[#1E1611]/40 border border-[#1E1611]/10 dark:border-white/5 rounded-2xl text-center space-y-1">
            <span className="text-3xl font-black text-blue-500">
              {adoptedListings}
            </span>
            <p className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/50 dark:text-[#F7F4EF]/50">
              Adopted
            </p>
          </Card>
        </div>

   
        {listings.length === 0 && (
          <Card className="w-full p-12 text-center bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm flex flex-col items-center justify-center max-w-2xl mx-auto space-y-5">
            <div className="space-y-1">
              <h3 className="text-xl font-black tracking-tight">
                No Active Companions Found
              </h3>
              <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold max-w-sm mx-auto">
                You haven't listed any pets under your email yet.
              </p>
            </div>
            <Link href="/dashboard/add-pet">
              <Button className="rounded-full px-6 text-[10px] font-black uppercase tracking-wider h-10 bg-[#1E1611] text-[#F7F4EF] dark:bg-[#F7F4EF] dark:text-[#1E1611] hover:opacity-90">
                Create First Entry
              </Button>
            </Link>
          </Card>
        )}

 
        {listings.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((pet) => {
              console.log(pet)
              const isAdopted = pet.status === "Adopted";
              const petId = pet._id || pet.id;

              return (
                <Card
                  key={petId}
                  className="group w-full bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 overflow-hidden border-b border-[#1E1611]/5 dark:border-white/5">
                    <Image
                      src={
                        pet.imageUrl ||
                        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
                      }
                      alt={pet.name}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md text-white shadow-sm ${
                        isAdopted ? "bg-red-500" : "bg-emerald-500"
                      }`}
                    >
                      {pet.status || "Available"}
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#1E1611]/90 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#1E1611]/10 dark:border-white/10 flex items-center gap-1 shadow-sm">
                      <Tag size={12} className="text-[#C47C5D]" />
                      <span className="text-[11px] font-black tracking-tight text-[#1E1611] dark:text-[#F7F4EF]">
                        {Number(pet.adoptionFee) === 0
                          ? "Free"
                          : `${pet.adoptionFee} Tk`}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#C47C5D] bg-[#C47C5D]/10 px-2.5 py-0.5 rounded-md">
                          {pet.species}
                        </span>
                        <span className="text-[11px] font-bold text-red-400 dark:text-red-300">
                          {pet.requestsCount || 0} requests
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        <h2 className="text-xl font-black tracking-tight truncate text-[#1E1611] dark:text-[#F7F4EF]">
                          {pet.name}
                        </h2>
                        <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-bold truncate">
                          {pet.breed} • {pet.age}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#1E1611]/5 dark:border-white/5">
                      <div className="grid grid-cols-2 gap-2">
                        <Link href={`/listings/${petId}`} className="w-full">
                          <Button
                            size="sm"
                            variant="flat"
                            className="hover:bg-white/10 text-white h-9 px-4 rounded-xl flex items-center gap-2 text-xs font-bold w-full"
                          >
                            <Eye size={13} /> View
                          </Button>
                        </Link>

                        <EditPetModal pet={pet}></EditPetModal>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <RequestsModal petId={pet._id} petName={pet.name} />

                        <DeleteModal petId={petId} petName={pet.name} />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListingsPage;
