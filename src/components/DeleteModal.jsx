"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "@heroui/react";
import { deletePetListing } from "@/lib/actions";
import { toast } from "react-hot-toast";

export default function DeleteModal({ petId, petName }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${petName}?`
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const res = await deletePetListing(petId);
      if (res && res.acknowledged) {
        toast.success(`${petName} removed successfully!`);
        router.refresh(); // Automatically re-fetches server data instantly
      } else {
        toast.error("Failed to delete the listing.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="flat"
      color="danger"
      isLoading={isDeleting}
      onClick={handleDelete}
      className="w-full rounded-xl font-bold text-xs gap-1 text-red-500 hover:bg-red-500/10"
    >
      {!isDeleting && <Trash2 size={13} />}
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  );
}
