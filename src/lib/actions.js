export const addPetData = async (petsData) => {
  try {
    const configuredPetData = {
      ...petsData,
      adoptionFee: Number(petsData.adoptionFee) || 0,
      status: "Available",
      requestsCount: 0,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}petsData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(configuredPetData),
    });

    const data = await res.json();

    console.log("Response data from backend:", data);
    return data;
  } catch (error) {
    console.error("Fetch operational error:", error);
    return { acknowledged: false, error: error.message };
  }
};

export const getPetData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}petsData`);
  const petsData = await res.json();
  return petsData;
};

export const getMyPetData = async (email) => {
  try {
    if (!email) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}myPets/${email}`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching user listings:", error);
    return [];
  }
};

export const deletePetListing = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}petsData/${id}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error deleting pet listing:", error);
    return { acknowledged: false };
  }
};

export const getSinglePetData = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}petsData/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching single pet details:", error);
    return null;
  }
};

export const submitAdoptionRequest = async (requestData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}adoptionRequests`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error submitting adoption request:", error);
    return { acknowledged: false };
  }
};

export const getMyAdoptionRequests = async (email) => {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_SERVER_URL
      }myRequests?email=${encodeURIComponent(email)}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching adoption requests:", error);
    return [];
  }
};

export const getAllPets = async (
  search = "",
  species = "all",
  sort = "default"
) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}petsData`);
    if (search) url.searchParams.append("search", search);
    if (species) url.searchParams.append("species", species);
    if (sort) url.searchParams.append("sort", sort);

    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(
      "Network communication exception error within getAllPets:",
      error
    );
    return [];
  }
};


export const getRequestsForPet = async (petId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}adoptionRequests/pet/${petId}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching requests for pet:", error);
    return [];
  }
};

export const updateRequestStatus = async (requestId, status) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}adoptionRequests/${requestId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error updating request status:", error);
    return { acknowledged: false };
  }
};


export const deleteAdoptionRequest = async (requestId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}adoptionRequests/${requestId}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error deleting adoption request:", error);
    return { acknowledged: false };
  }
};

export const updatePetData = async (id, updatedData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}petsData/${id}`,
      {
        method: "PATCH", 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error updating pet data:", error);
    return { acknowledged: false, error: error.message };
  }
};