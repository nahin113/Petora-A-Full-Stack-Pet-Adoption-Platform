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
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}petsData/${id}`, {
      cache: "no-store", 
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching single pet details:", error);
    return null;
  }
};

export const submitAdoptionRequest = async (requestData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}adoptionRequests`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error submitting adoption request:", error);
    return { acknowledged: false };
  }
};