import { BASE_URL } from "../Apis/constatnts"; // Corrected spelling from "constatnts"

export const fetchVideoUpload = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/videos/upload`, {
      method: "POST",
      body: formData, // Pass the formData in the body of the request
    });

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.text();
    console.log("call back response", typeof response)
    console.log("call back data",data)

    // Invoke the callback with the data if provided
    // if (callback) {
    //   callback(null, data);
    // }

    // Return the data to the caller
    return data;
  } catch (error) {
    console.error("Error fetching video upload:", error);

    // Invoke the callback with the error if provided
    // if (callback) {
    //   callback(error, null);
    // }

    // Optionally rethrow the error to handle it elsewhere
    throw error;
  }
};
