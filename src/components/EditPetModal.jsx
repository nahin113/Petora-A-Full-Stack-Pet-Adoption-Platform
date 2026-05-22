"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
  FieldError,
  TextArea,
} from "@heroui/react";
import { Trash2, Save, Pencil } from "lucide-react";
import { updatePetData } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function EditPetModal({ pet }) {
  const router = useRouter();

 const [token, setToken] = useState(null);

 useEffect(() => {
   const fetchToken = async () => {
     try {
       const { data: tokenData } = await authClient.token();
       if (tokenData) {
         const {token : targetToken} = tokenData;
         setToken(targetToken);
       }
     } catch (err) {
       console.error("Error retrieving authentication token:", err);
     }
   };
   fetchToken();
 }, []);

 console.log(token)

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedPetData = Object.fromEntries(formData.entries());

    updatedPetData.age = Number(updatedPetData.age);
    updatedPetData.adoptionFee = Number(updatedPetData.adoptionFee);

    const petId = pet?._id;

    try {
      const result = await updatePetData(petId, updatedPetData,token);
      if (result.acknowledged || result.modifiedCount > 0) {
        router.refresh();
        toast.success("Pet Details Updated")
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const labelClass =
    "text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-1 mb-1.5 block";
  const inputClass =
    "rounded-2xl bg-[#1E1611]/5 dark:bg-[#F7F4EF]/5 h-10 border border-[#1E1611]/10 dark:border-white/5 px-4 text-xs font-semibold text-[#1E1611] dark:text-[#F7F4EF]";
  const selectPopoverClass =
    "bg-white dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[200px]";
  const listItemClass = "rounded-xl font-semibold p-2";

  return (
    <Modal>
      <Button
        size="sm"
        variant="flat"
        startContent={<Pencil size={13} />}
        className="w-full rounded-xl font-bold text-xs gap-1 text-[#C47C5D] hover:bg-[#C47C5D] hover:text-white transition-all"
      >
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl rounded-3xl bg-[#F7F4EF] dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/5">
            <Modal.CloseTrigger className="text-[#1E1611] dark:text-[#F7F4EF] top-6 right-6" />

            <Modal.Header className="pt-8 px-8 pb-2">
              <div>
                <Modal.Heading className="text-2xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight">
                  Update Listing
                </Modal.Heading>
                <p className="mt-1 text-xs text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-bold uppercase tracking-widest">
                  Modify details for {pet?.name}
                </p>
              </div>
            </Modal.Header>

            <form onSubmit={handleUpdate}>
              <Modal.Body className="px-8 py-4 max-h-[65vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pet Name */}
                  <TextField name="name" defaultValue={pet?.name} isRequired>
                    <Label className={labelClass}>Pet Name</Label>
                    <Input className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Species Select */}
                  <div>
                    <Select
                      name="species"
                      defaultSelectedKey={pet?.species}
                      isRequired
                      className="w-full"
                    >
                      <Label className={labelClass}>Species</Label>
                      <Select.Trigger
                        className={`${inputClass} w-full flex items-center justify-between`}
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className={selectPopoverClass}>
                        <ListBox>
                          {[
                            "Dog",
                            "Cat",
                            "Bird",
                            "Fish",
                            "Guinea Pig",
                            "Hamster",
                            "Other",
                          ].map((species) => (
                            <ListBox.Item
                              key={species}
                              id={species}
                              textValue={species}
                              className={listItemClass}
                            >
                              {species} <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Breed */}
                  <TextField name="breed" defaultValue={pet?.breed} isRequired>
                    <Label className={labelClass}>Breed</Label>
                    <Input className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Age */}
                  <TextField name="age" defaultValue={pet?.age} isRequired>
                    <Label className={labelClass}>Age</Label>
                    <Input className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Gender Select */}
                  <div>
                    <Select
                      name="gender"
                      defaultSelectedKey={pet?.gender}
                      isRequired
                      className="w-full"
                    >
                      <Label className={labelClass}>Gender</Label>
                      <Select.Trigger
                        className={`${inputClass} w-full flex items-center justify-between`}
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className={selectPopoverClass}>
                        <ListBox>
                          {["Male", "Female", "Unknown"].map((gender) => (
                            <ListBox.Item
                              key={gender}
                              id={gender}
                              textValue={gender}
                              className={listItemClass}
                            >
                              {gender} <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Image URL */}
                  <TextField
                    name="imageUrl"
                    type="url"
                    defaultValue={pet?.imageUrl}
                    isRequired
                  >
                    <Label className={labelClass}>Image URL</Label>
                    <Input type="url" className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Health Status */}
                  <TextField
                    name="healthStatus"
                    defaultValue={pet?.healthStatus}
                    isRequired
                  >
                    <Label className={labelClass}>Health Status</Label>
                    <Input className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Vaccination Status Select */}
                  <div>
                    <Select
                      name="vaccinationStatus"
                      defaultSelectedKey={pet?.vaccinationStatus}
                      isRequired
                      className="w-full"
                    >
                      <Label className={labelClass}>Vaccination Status</Label>
                      <Select.Trigger
                        className={`${inputClass} w-full flex items-center justify-between`}
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className={selectPopoverClass}>
                        <ListBox>
                          {[
                            "Fully Vaccinated",
                            "Partially Vaccinated",
                            "Not Vaccinated",
                          ].map((status) => (
                            <ListBox.Item
                              key={status}
                              id={status}
                              textValue={status}
                              className={listItemClass}
                            >
                              {status} <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Location */}
                  <TextField
                    name="location"
                    defaultValue={pet?.location}
                    isRequired
                  >
                    <Label className={labelClass}>Location</Label>
                    <Input className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Adoption Fee */}
                  <TextField
                    name="adoptionFee"
                    type="number"
                    defaultValue={pet?.adoptionFee}
                    isRequired
                  >
                    <Label className={labelClass}>Adoption Fee (Tk)</Label>
                    <Input type="number" className={inputClass} />
                    <FieldError />
                  </TextField>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={pet?.description}
                      isRequired
                    >
                      <Label className={labelClass}>Description</Label>
                      <TextArea
                        className={`${inputClass} rounded-3xl min-h-[100px] h-auto py-3 resize-none`}
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Owner Email (Read Only) */}
                  <div className="md:col-span-2 opacity-75">
                    <TextField name="ownerEmail" defaultValue={pet?.ownerEmail}>
                      <Label className={labelClass}>Owner Email</Label>
                      <Input
                        type="email"
                        readOnly
                        className={`${inputClass} cursor-not-allowed bg-[#1E1611]/10 dark:bg-[#F7F4EF]/10`}
                      />
                    </TextField>
                  </div>
                </div>
              </Modal.Body>

          
              <Modal.Footer className="px-8 pb-8 pt-4 flex justify-end gap-3 border-t-0">
                <Button
                  slot="close"
                  className="rounded-full px-8 text-[11px] font-black uppercase tracking-wider h-12 flex items-center gap-2 transition-all bg-transparent text-[#1E1611]/60 dark:text-white/60 hover:bg-red-500/10 hover:text-red-500"
                >
                  <Trash2 size={15} />
                  Discard
                </Button>
                <Button
                  type="submit"
                  slot="close"
                  className="rounded-full px-8 text-[11px] font-black uppercase tracking-wider h-12 flex items-center gap-2 transition-all bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446]"
                >
                  <Save size={15} />
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
