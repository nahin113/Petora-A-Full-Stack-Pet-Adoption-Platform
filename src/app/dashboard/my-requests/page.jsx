"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@heroui/react";
import { getMyAdoptionRequests } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";

const StatusBadge = ({ status }) => {
  const normalized = status?.toLowerCase();
  if (normalized === "approved") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
        <CheckCircle2 size={12} /> Approved
      </span>
    );
  }
  if (normalized === "rejected") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 border border-red-500/20 text-red-400">
        <XCircle size={12} /> Rejected
      </span>
    );
  }
  if (normalized === "removed") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 border border-red-500/20 text-red-400">
        <XCircle size={12} /> Removed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-400">
      <Clock size={12} /> Pending
    </span>
  );
};

export default function MyAdoptionRequestsPage() {
  const [requests, setRequests] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const { data: session, isPending: isSessionLoading } =
    authClient.useSession();
  const user = session?.user;

  const isAuthenticated = !!session;
  const currentUser = isAuthenticated
    ? { name: user?.name, email: user?.email }
    : null;

 useEffect(() => {
   if (currentUser?.email && requests === null) {
     setIsDataLoading(true);

     getMyAdoptionRequests(currentUser.email)
       .then((res) => {
         setRequests(res || []);
       })
       .catch((error) => {
         console.error("Failed to fetch requests", error);
         setRequests([]);
       })
       .finally(() => {
         setIsDataLoading(false);
       });
   }
 }, [currentUser?.email, requests]);

  const activeRequests = requests || [];

  const totalCount = activeRequests.length;
  const pendingCount = activeRequests.filter(
    (r) => r.status?.toLowerCase() === "pending"
  ).length;
  const approvedCount = activeRequests.filter(
    (r) => r.status?.toLowerCase() === "approved"
  ).length;
  const rejectedCount = activeRequests.filter(
    (r) => r.status?.toLowerCase() === "rejected"
  ).length;


  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 py-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#C47C5D]/10 border border-[#C47C5D]/20 text-[#C47C5D]">
          📂 My Dashboard
        </div>
        <h1 className="text-3xl font-black tracking-tight text-[#F7F4EF] flex items-center gap-2">
          My
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#C47C5D] to-[#E3A384]">
            Adoption Requests
          </span>
        </h1>
        <p className="text-sm text-[#F7F4EF]/60 font-semibold">
          Track the status of all your submitted pet adoption request profiles
          here.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1E1611]/60 border border-white/5 rounded-3xl p-6 text-center space-y-1 backdrop-blur-md">
          <span className="text-3xl font-black text-[#F7F4EF] block">
            {totalCount}
          </span>
          <span className="text-xs text-[#F7F4EF]/40 font-bold uppercase tracking-wider block">
            Total Requests
          </span>
        </div>

        <div className="bg-[#1E1611]/60 border border-white/5 rounded-3xl p-6 text-center space-y-1 backdrop-blur-md">
          <span className="text-3xl font-black text-amber-400 block">
            {pendingCount}
          </span>
          <span className="text-xs text-[#F7F4EF]/40 font-bold uppercase tracking-wider block">
            Pending
          </span>
        </div>

        <div className="bg-[#1E1611]/60 border border-white/5 rounded-3xl p-6 text-center space-y-1 backdrop-blur-md">
          <span className="text-3xl font-black text-emerald-400 block">
            {approvedCount}
          </span>
          <span className="text-xs text-[#F7F4EF]/40 font-bold uppercase tracking-wider block">
            Approved
          </span>
        </div>

        <div className="bg-[#1E1611]/60 border border-white/5 rounded-3xl p-6 text-center space-y-1 backdrop-blur-md">
          <span className="text-3xl font-black text-red-400 block">
            {rejectedCount}
          </span>
          <span className="text-xs text-[#F7F4EF]/40 font-bold uppercase tracking-wider block">
            Rejected
          </span>
        </div>
      </div>

      <div className="bg-[#1E1611]/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
        {totalCount === 0 ? (
          <div className="p-16 text-center space-y-3">
            <p className="text-sm text-[#F7F4EF]/40 font-bold">
              You haven't applied to adopt any companions yet.
            </p>
            <Button
              as={Link}
              href="/listings"
              className="rounded-full bg-[#C47C5D] text-white text-xs font-bold uppercase tracking-wider px-6 h-10"
            >
              Browse Pets
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/5 bg-[#1E1611]/60 text-[11px] font-black uppercase tracking-wider text-[#F7F4EF]/40">
                  <th className="py-4 px-6">Pet Name</th>
                  <th className="py-4 px-6">Request Date</th>
                  <th className="py-4 px-6">Pickup Date</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activeRequests.map((request) => {
                  const formattedRequestDate = request.createdAt
                    ? new Date(request.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Recent";

                  const formattedPickupDate = request.pickupDate
                    ? new Date(request.pickupDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "N/A";

                  return (
                    <tr
                      key={request._id}
                      className="hover:bg-white/2 transition-colors group"
                    >
                      <td className="py-4 px-6 text-sm font-black text-[#F7F4EF]">
                        {request.petName || "Companion"}
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-[#F7F4EF]/60">
                        {formattedRequestDate}
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-[#F7F4EF]/60">
                        {formattedPickupDate}
                      </td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <StatusBadge status={request.status} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Link href={`/listings/${request.petId}`}>
                          <Button
                            size="sm"
                            variant="flat"
                            className="rounded-xl font-bold text-xs gap-1.5 bg-white/5 border border-white/5 text-[#F7F4EF]/80 hover:bg-[#C47C5D] hover:text-white transition-all px-4"
                          >
                            <Eye size={13} />
                            View
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="flat"
                          className="rounded-xl font-bold text-xs gap-1.5 bg-white/5 border border-white/5 text-[#F7F4EF]/80 hover:bg-[#C47C5D] hover:text-white transition-all px-4"
                        >
                          <Eye size={13} />
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
