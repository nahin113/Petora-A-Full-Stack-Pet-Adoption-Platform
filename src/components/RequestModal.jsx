"use client";

import React, { useState } from "react";
import { Button, Modal, Spinner } from "@heroui/react";

import {
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Check,
  X,
  Trash2,
} from "lucide-react";

import {
  getRequestsForPet,
  updateRequestStatus,
  deleteAdoptionRequest,
} from "@/lib/actions";

export default function RequestsModal({ petId, petName }) {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchRequests = async () => {
    setIsLoading(true);
    const data = await getRequestsForPet(petId);
    setRequests(data);
    setIsLoading(false);
  };

  const handleStatusChange = async (requestId, newStatus) => {
    setIsUpdating(true);
    const result = await updateRequestStatus(requestId, newStatus);

    if (result.acknowledged || result.modifiedCount > 0) {
      setRequests((prev) =>
        prev.map((req) =>
          req._id === requestId ? { ...req, status: newStatus } : req
        )
      );
    }
    setIsUpdating(false);
  };

 
  const handleDelete = async (requestId) => {
    setIsUpdating(true);
    const result = await deleteAdoptionRequest(requestId);

    if (result.acknowledged && result.deletedCount > 0) {
     
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    }
    setIsUpdating(false);
  };

  const pendingCount = requests.filter((r) => r.status === "Pending").length;

  return (
    <Modal onOpenChange={(isOpen) => isOpen && fetchRequests()}>
      <Button
        variant="flat"
        className="hover:bg-white/10 text-white h-9 px-4 rounded-xl flex items-center gap-2 text-xs font-bold w-full"
      >
        <Users size={14} className="text-red-400" />
        Requests
        {pendingCount > 0 && (
          <span className="bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {pendingCount}
          </span>
        )}
      </Button>

      <Modal.Backdrop className="bg-[#0F1319]/80 backdrop-blur-sm z-50">
        <Modal.Container>
          <Modal.Dialog className="w-full sm:max-w-[450px] bg-[#1A222C] border border-white/5 rounded-2xl overflow-hidden p-0 shadow-2xl z-50">
            <Modal.CloseTrigger className="absolute top-4 right-4 z-10 text-white/50 hover:bg-white/10 rounded-full p-1.5 transition-colors" />

            <Modal.Header className="px-6 pt-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Users className="text-red-400" size={18} />
                <Modal.Heading className="text-lg font-bold text-white">
                  Adoption Requests for {petName}
                </Modal.Heading>
              </div>
            </Modal.Header>

            <Modal.Body className="px-6 py-4 pb-6 max-h-[60vh] overflow-y-auto space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <Spinner color="danger" />
                </div>
              ) : requests.length === 0 ? (
                <div className="text-center py-6 text-white/40 text-sm">
                  No requests yet.
                </div>
              ) : (
                requests.map((req) => (
                  <div
                    key={req._id}
                    className="bg-[#161C24] border border-white/5 p-4 rounded-xl space-y-4 relative group"
                  >
                 
                    <button
                      onClick={() => handleDelete(req._id)}
                      disabled={isUpdating}
                      className="absolute top-4 right-4 text-white/20 hover:text-red-400 transition-colors disabled:opacity-50"
                      title="Delete Request"
                    >
                      <Trash2 size={16} />
                    </button>

                   
                    <div className="flex justify-between items-start pr-8">
                      <div>
                        <h4 className="text-white font-bold text-base">
                          {req.requesterName || "Requester"}
                        </h4>
                        <p className="text-white/50 text-xs">
                          {req.requesterEmail}
                        </p>
                      </div>

                 
                      <div
                        className={`flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                          req.status === "Approved"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : req.status === "Rejected"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {req.status === "Pending" && <Clock size={12} />}
                        {req.status === "Approved" && (
                          <CheckCircle2 size={12} />
                        )}
                        {req.status === "Rejected" && <XCircle size={12} />}
                        {req.status}
                      </div>
                    </div>

                 
                    <div className="flex justify-between text-xs text-white/50 font-medium">
                      <span>Pickup: {req.pickupDate || "N/A"}</span>
                      <span>
                        Requested:{" "}
                        {new Date(
                          req.requestDate || Date.now()
                        ).toLocaleDateString()}
                      </span>
                    </div>

                 
                    {req.status === "Pending" && (
                      <div className="flex gap-3 pt-2">
                        <Button
                          className="flex-1 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold rounded-xl h-9"
                          onClick={() =>
                            handleStatusChange(req._id, "Approved")
                          }
                          isLoading={isUpdating}
                        >
                          <Check size={16} /> Approve
                        </Button>
                        <Button
                          className="flex-1 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white font-bold rounded-xl h-9"
                          onClick={() =>
                            handleStatusChange(req._id, "Rejected")
                          }
                          isLoading={isUpdating}
                        >
                          <X size={16} /> Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
