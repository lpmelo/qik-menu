import axios from "axios";

const useCompanyApi = () => {
  const getCompanyById = async (id) => {
    try {
      const response = await axios.get(`/venue/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getCompanyById };
};

export default useCompanyApi;
