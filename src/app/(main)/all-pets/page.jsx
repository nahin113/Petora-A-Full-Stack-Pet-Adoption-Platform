"use client";
import React, { useState, useMemo } from "react";
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

const INITIAL_PETS = [
  {
    id: "1",
    name: "Blizzard",
    species: "Dog",
    breed: "Siberian Husky",
    age: "2 years old",
    gender: "Male",
    location: "Dhaka, Bangladesh",
    fee: 6000,
    status: "Available",
    image: "",
  },
  {
    id: "2",
    name: "Selma Noble",
    species: "Other",
    breed: "Labore quibusdam nem",
    age: "1979 years old",
    gender: "Female",
    location: "Dolor pariatur Qui",
    fee: 28,
    status: "Adopted",
    image: "",
  },
  {
    id: "3",
    name: "Gig",
    species: "Cat",
    breed: "hello",
    age: "18 years old",
    gender: "Female",
    location: "Dhaka",
    fee: 45,
    status: "Available",
    image: "",
  },
  {
    id: "4",
    name: "Olivia Berg huuu",
    species: "Fish",
    breed: "Omnis perspiciatis",
    age: "1975 years old",
    gender: "Unknown",
    location: "Ea explicabo Facere",
    fee: 54,
    status: "Available",
    image: "",
  },
  {
    id: "5",
    name: "Deirdre Downs",
    species: "Guinea Pig",
    breed: "Explicabo Dolore re",
    age: "1987 years old",
    gender: "Unknown",
    location: "Dhaka, Bangladesh",
    fee: 35,
    status: "Available",
    image: "",
  },
  {
    id: "6",
    name: "Adrian Mckenzie jhjkdhjkdh",
    species: "Hamster",
    breed: "Ut similique placeat",
    age: "1976 years old",
    gender: "Male",
    location: "Dhaka, Bangladesh",
    fee: 40,
    status: "Available",
    image: "",
  },
];

const SPECIES_OPTIONS = [
  { key: "all", label: "All Species" },
  { key: "dog", label: "Dog" },
  { key: "cat", label: "Cat" },
  { key: "fish", label: "Fish" },
  { key: "guinea pig", label: "Guinea Pig" },
  { key: "hamster", label: "Hamster" },
  { key: "other", label: "Other" },
];

const SORT_OPTIONS = [
  { key: "default", label: "Default" },
  { key: "low-to-high", label: "Price: Low to High" },
  { key: "high-to-low", label: "Price: High to Low" },
];

export default function BrowsePetsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredAndSortedPets = useMemo(() => {
    let result = [...INITIAL_PETS];

    if (searchQuery.trim() !== "") {
      result = result.filter((pet) =>
        pet.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (speciesFilter !== "all") {
      result = result.filter(
        (pet) => pet.species.toLowerCase() === speciesFilter.toLowerCase()
      );
    }

    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.fee - b.fee);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.fee - a.fee);
    }

    return result;
  }, [searchQuery, speciesFilter, sortOrder]);

  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C47C5D]/10 dark:bg-[#C47C5D]/20 border border-[#C47C5D]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47C5D] animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C47C5D]">
              All Available Pets
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Browse <span className="text-[#C47C5D]">PeTora</span> Pets
          </h1>
          <p className="text-sm text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-semibold">
            {filteredAndSortedPets.length} pets available for adoption
          </p>
        </div>

        <Card className="w-full p-6 bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm transition-all duration-300 overflow-visible">
          <div className="flex items-center gap-2 mb-4 text-[#1E1611]/80 dark:text-[#F7F4EF]/80 font-black text-xs uppercase tracking-wider">
            <SlidersHorizontal size={14} className="text-[#C47C5D]" />
            <span>Filter & Search</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
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
                  className="rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 text-[#1E1611] dark:text-[#F7F4EF] h-11 w-full pl-11 pr-4 text-xs font-semibold outline-none border border-[#1E1611]/10 dark:border-white/5 focus:border-[#C47C5D] transition-all"
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
                <Select.Trigger className="w-full flex items-center justify-between rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-11 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF] transition-all outline-none">
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
                        className="rounded-xl transition-all data-[hover=true]:bg-[#C47C5D]/10 data-[hover=true]:text-[#C47C5D] text-[#1E1611] dark:text-[#F7F4EF] font-semibold px-3 py-2 cursor-pointer flex items-center justify-between"
                      >
                        {item.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div className="flex flex-col">
              <Select
                className="w-full"
                selectedKey={sortOrder}
                onSelectionChange={(key) => setSortOrder(String(key))}
              >
                <Label className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block">
                  Sort by fee
                </Label>
                <Select.Trigger className="w-full flex items-center justify-between rounded-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-11 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF] transition-all outline-none">
                  <Select.Value>
                    {SORT_OPTIONS.find((o) => o.key === sortOrder)?.label}
                  </Select.Value>
                  <Select.Indicator className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40" />
                </Select.Trigger>
                <Select.Popover className="bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]">
                  <ListBox className="flex flex-col gap-1">
                    {SORT_OPTIONS.map((item) => (
                      <ListBox.Item
                        key={item.key}
                        id={item.key}
                        textValue={item.label}
                        className="rounded-xl transition-all data-[hover=true]:bg-[#C47C5D]/10 data-[hover=true]:text-[#C47C5D] text-[#1E1611] dark:text-[#F7F4EF] font-semibold px-3 py-2 cursor-pointer flex items-center justify-between"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredAndSortedPets.map((pet) => (
            <Card
              key={pet.id}
              className="group overflow-hidden flex flex-col justify-between border border-[#1E1611]/10 dark:border-white/5 bg-white dark:bg-[#1E1611]/60 shadow-md rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 flex items-center justify-center overflow-hidden">
                {pet.image ? (
                  <img
                    src={pet.image}
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

                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/90 dark:bg-[#1E1611]/90 backdrop-blur-xs text-[#C47C5D] shadow-xs border border-[#1E1611]/5 dark:border-white/5">
                  📁 {pet.species}
                </div>

                <div
                  className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-xs ${
                    pet.status === "Available"
                      ? "bg-emerald-600 dark:bg-emerald-500"
                      : "bg-neutral-500/80 dark:bg-neutral-600"
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
                    {pet.breed} • {pet.age} • {pet.gender}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#1E1611]/10 dark:border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1611]/70 dark:text-[#F7F4EF]/70">
                    <MapPin size={14} className="text-[#C47C5D] shrink-0" />
                    <span className="line-clamp-1">{pet.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-black text-[#1E1611] dark:text-[#F7F4EF]">
                    <DollarSign size={15} className="text-[#C47C5D] shrink-0" />
                    <span>${pet.fee.toLocaleString()} adoption fee</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                <Button
                  as={Link}
                  href={`/pets/${pet.id}`}
                  className="rounded-full bg-transparent border border-[#1E1611]/20 dark:border-white/10 hover:bg-[#1E1611]/5 dark:hover:bg-[#F7F4EF]/5 text-[#1E1611] dark:text-[#F7F4EF] text-[11px] font-black uppercase tracking-wider h-11 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Details</span>
                </Button>

                <Button
                  disabled={pet.status !== "Available"}
                  className={`rounded-full text-[11px] font-black uppercase tracking-wider h-11 flex items-center justify-center gap-1.5 shadow-xs border-none transition-all ${
                    pet.status === "Available"
                      ? "bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446] cursor-pointer transform active:scale-98"
                      : "bg-[#1E1611]/10 dark:bg-white/5 text-[#1E1611]/30 dark:text-white/20 cursor-not-allowed"
                  }`}
                >
                  <Heart
                    size={13}
                    className={
                      pet.status === "Available" ? "animate-pulse" : ""
                    }
                  />
                  <span>
                    {pet.status === "Available" ? "Adopt Now" : "Adopted"}
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredAndSortedPets.length === 0 && (
          <div className="text-center py-20 bg-white/40 dark:bg-[#1E1611]/20 rounded-[2.5rem] border border-dashed border-[#1E1611]/10 dark:border-white/5">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-black text-[#1E1611] dark:text-[#F7F4EF]">
              No companion matches found
            </h3>
            <p className="text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 mt-1 max-w-xs mx-auto font-semibold">
              Try readjusting your selection parameters or parameters format
              criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}