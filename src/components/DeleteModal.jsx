"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, AlertCircle } from "lucide-react";
import { AlertDialog, Button } from "@heroui/react";
import { deletePetListing } from "@/lib/actions";
import { toast } from "react-hot-toast";

export default function DeleteModal({ petId, petName }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await deletePetListing(petId);
      if (res && res.acknowledged) {
        toast.success(`${petName} removed successfully!`);
        router.refresh();
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
    <AlertDialog>
      <Button
        size="sm"
        variant="flat"
        color="danger"
        className="w-full rounded-xl font-bold text-xs gap-1 text-red-500 hover:bg-red-500/10"
      >
        <Trash2 size={13} />
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[500px] rounded-[2rem] p-6 bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/5 shadow-xl">
            <AlertDialog.CloseTrigger className="text-[#1E1611]/40 dark:text-[#F7F4EF]/40 hover:bg-[#1E1611]/5 dark:hover:bg-white/5 rounded-full" />

            <AlertDialog.Header className="flex flex-row items-center gap-4 border-none pb-2 pt-2">
              <div className="bg-red-50 dark:bg-red-500/10 p-3 rounded-full">
                <AlertCircle className="text-red-500 size-6" />
              </div>
              <AlertDialog.Heading className="text-xl font-black tracking-tight text-[#1E1611] dark:text-[#F7F4EF]">
                Delete Pet Listing
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="py-3 px-1">
              <p className="text-sm text-[#1E1611]/70 dark:text-[#F7F4EF]/70 font-medium leading-relaxed">
                Are you sure you want to delete{" "}
                <strong className="text-[#1E1611] dark:text-[#F7F4EF] font-black">
                  "{petName}"
                </strong>
                ? This action cannot be undone and will permanently remove this
                companion listing from the PeTora network.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="border-none pt-6 flex justify-end gap-3">
              <Button
                slot="close"
                variant="bordered"
                className="rounded-full border-[#1E1611]/10 dark:border-white/10 text-[#1E1611]/60 dark:text-[#F7F4EF]/60 px-6 h-11 font-bold text-xs uppercase tracking-wider hover:bg-[#1E1611]/5 dark:hover:bg-white/5"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                isLoading={isDeleting}
                className="rounded-full bg-red-500 text-white px-6 h-11 font-bold text-xs uppercase tracking-wider hover:bg-red-600 shadow-sm"
                startContent={!isDeleting && <Trash2 size={14} />}
              >
                {isDeleting ? "Deleting..." : "Delete Listing"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
