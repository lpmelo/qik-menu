import axios from "axios";

const useCompanyApi = () => {
  const getCompanyById = async (id) => {
    try {
      const response = await axios.get(`/venue/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getCompanyById };
};

export default useCompanyApi;
