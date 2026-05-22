"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  DollarSign,
  Eye,
  Heart,
} from "lucide-react";
import { Card, Input, Button, Label, ListBox, Select } from "@heroui/react";
import { getAllPets } from "@/lib/actions";
import { Spinner } from "@heroui/react";

const SPECIES_OPTIONS = [
  { key: "all", label: "All Species" },
  { key: "dog", label: "Dog" },
  { key: "cat", label: "Cat" },
  { key: "fish", label: "Fish" },
  { key: "guinea pig", label: "Guinea Pig" },
  { key: "hamster", label: "Hamster" },
  { key: "other", label: "Other" },
];

export default function AllPetsPage() {
 
  const [searchQuery, setSearchQuery] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");

  
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    let isMounted = true;
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
     
        const data = await getAllPets();
        if (isMounted) setPets(data || []);
      } catch (err) {
        console.error("Failed to fetch pets:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchInitialData();
    return () => {
      isMounted = false;
    };
  }, []);


  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
    
      const matchesSearch = pet.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

 
      const matchesSpecies =
        speciesFilter === "all" ||
        pet.species?.toLowerCase() === speciesFilter.toLowerCase();

      return matchesSearch && matchesSpecies;
    });
  }, [pets, searchQuery, speciesFilter]);

  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C47C5D]/10 dark:bg-[#C47C5D]/20 border border-[#C47C5D]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47C5D] animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C47C5D]">
              All Available Companions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Browse <span className="text-[#C47C5D]">PeTora</span> Pets
          </h1>
          <p className="text-sm text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold">
            {isLoading
              ? "Loading companions..."
              : `${filteredPets.length} companions found matching criteria`}
          </p>
        </div>

        <Card className="w-full p-6 bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm overflow-visible">
          <div className="flex items-center gap-2 mb-4 text-[#1E1611]/80 dark:text-[#F7F4EF]/80 font-black text-xs uppercase tracking-wider">
            <SlidersHorizontal size={14} className="text-[#C47C5D]" />
            <span>Filter & Search</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1">
                Search by name
              </label>
              <div className="relative flex items-center w-full">
                <Search
                  size={16}
                  className="absolute left-4 text-[#1E1611]/40 dark:text-[#F7F4EF]/40"
                />
                <Input
                  type="text"
                  placeholder="Search pets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 text-[#1E1611] dark:text-[#F7F4EF] h-11 w-full pl-11 pr-4 text-xs font-semibold outline-none border border-[#1E1611]/10 dark:border-white/5 focus:border-[#C47C5D]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Select
                className="w-full"
                selectedKey={speciesFilter}
                onSelectionChange={(key) => setSpeciesFilter(String(key))}
              >
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Filter by species
                </Label>
                <Select.Trigger className="w-full flex items-center justify-between rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-11 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF] outline-none">
                  <Select.Value>
                    {
                      SPECIES_OPTIONS.find((o) => o.key === speciesFilter)
                        ?.label
                    }
                  </Select.Value>
                  <Select.Indicator className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40" />
                </Select.Trigger>
                <Select.Popover className="bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]">
                  <ListBox className="flex flex-col gap-1">
                    {SPECIES_OPTIONS.map((item) => (
                      <ListBox.Item
                        key={item.key}
                        id={item.key}
                        textValue={item.label}
                        className="rounded-xl data-[hover=true]:bg-[#C47C5D]/10 data-[hover=true]:text-[#C47C5D] text-[#1E1611] dark:text-[#F7F4EF] font-semibold px-3 py-2 cursor-pointer flex items-center justify-between"
                      >
                        {item.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
          </div>
        </Card>

        {isLoading ? (
          <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F7F4EF] dark:bg-[#1E1611] transition-colors duration-300">
            <div className="flex flex-col items-center gap-6 p-8 rounded-[2.5rem] bg-white/40 dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/5 dark:border-white/5 shadow-sm">
              <Spinner
                size="lg"
                className={{
                  wrapper: "w-14 h-14",
                  circle1: "border-b-[#C47C5D]",
                  circle2: "border-b-[#C47C5D]",
                }}
              />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C47C5D] animate-pulse">
                  Fetching Paws
                </span>
                <span className="flex gap-0.5">
                  <span
                    className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredPets.map((pet) => {
              console.log(pet);
              const isAvailable = pet.status?.toLowerCase() === "available";

              return (
                <Card
                  key={pet._id}
                  className="group overflow-hidden flex flex-col justify-between border border-[#1E1611]/10 dark:border-white/5 bg-white dark:bg-[#1E1611]/60 shadow-md rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-video w-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 flex items-center justify-center overflow-hidden">
                    {pet.imageUrl ? (
                      <img
                        src={pet.imageUrl}
                        alt={pet.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1 opacity-20 dark:opacity-40 text-[#1E1611] dark:text-[#F7F4EF]">
                        <div className="flex gap-1.5">
                          <span className="text-xl">🐾</span>
                          <span className="text-xl translate-y-2">🐾</span>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/90 dark:bg-[#1E1611]/90 backdrop-blur-xs text-[#C47C5D] border border-[#1E1611]/5">
                      {pet.species}
                    </div>

                    <div
                      className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white ${
                        isAvailable
                          ? "bg-emerald-600 dark:bg-emerald-500"
                          : "bg-red-500/80"
                      }`}
                    >
                      {pet.status}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black tracking-tight text-[#1E1611] dark:text-[#F7F4EF] line-clamp-1">
                        {pet.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#1E1611]/60 dark:text-[#F7F4EF]/60 line-clamp-1">
                        {pet.breed} • {pet.age} years old • {pet.gender}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#1E1611]/10 dark:border-white/5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1611]/70 dark:text-[#F7F4EF]/70">
                        <MapPin size={14} className="text-[#C47C5D] shrink-0" />
                        <span className="line-clamp-1">{pet.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-black text-[#1E1611] dark:text-[#F7F4EF]">
                        <span>
                          {Number(pet.adoptionFee).toLocaleString()} tk adoption
                          fee
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                    <Link
                      href={`/listings/${pet._id}`}
                      className="rounded-full bg-transparent border border-[#1E1611]/20 dark:border-white/10 hover:bg-[#1E1611]/5 dark:hover:bg-[#F7F4EF]/5 text-[#1E1611] dark:text-[#F7F4EF] text-[11px] font-black uppercase tracking-wider h-11 flex items-center justify-center gap-1.5 transition-all w-full"
                    >
                      <Eye size={13} />
                      <span>Details</span>
                    </Link>

                    <Link
                      href={
                        isAvailable ? `/listings/${pet._id}?adopt=true` : "#"
                      }
                      className={`rounded-full text-[11px] font-black uppercase tracking-wider h-11 flex items-center justify-center gap-1.5 transition-all w-full ${
                        isAvailable
                          ? "bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446]"
                          : "bg-[#1E1611]/10 dark:bg-white/5 text-[#1E1611]/30 dark:text-white/20 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      <Heart
                        size={13}
                        className={isAvailable ? "animate-pulse" : ""}
                      />
                      <span>{isAvailable ? "Adopt Now" : "Adopted"}</span>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {!isLoading && filteredPets.length === 0 && (
          <div className="text-center py-20 bg-white/40 dark:bg-[#1E1611]/20 rounded-[2.5rem] border border-dashed border-[#1E1611]/10 dark:border-white/5">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-black text-[#1E1611] dark:text-[#F7F4EF]">
              No companion matches found
            </h3>
            <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 mt-1 max-w-xs mx-auto font-semibold">
              Try adjusting your search query parameters or changing your
              species target list filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
