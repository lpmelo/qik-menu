import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { companyData, menuData } from "./mock";

const ambient = import.meta.env.VITE_AMBIENT;
const baseUrl = ambient === "development" ? "" : import.meta.env.VITE_BASE_URL;

export const challengeApi = createApi({
  reducerPath: "challengeApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getCompanyById: builder.query({
      queryFn: async (id) => {
        try {
          const response = await axios.get(`${baseUrl}/venue/${id}`);

          return { data: response.data };
        } catch (error) {
          return { data: companyData };
        }
      },
    }),

    getAllMenus: builder.query({
      queryFn: async () => {
        try {
          const response = await axios.get(`${baseUrl}/menu`);
          return { data: response.data };
        } catch (error) {
          return { data: menuData };
        }
      },
    }),
  }),
});

export const { useGetCompanyByIdQuery, useGetAllMenusQuery } = challengeApi;
