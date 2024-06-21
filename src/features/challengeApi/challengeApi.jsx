import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const challengeApi = createApi({
  reducerPath: "challengeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cdn-dev.preoday.com/challenge",
  }),
  endpoints: (builder) => ({
    getCompanyById: builder.query({
      queryFn: async (id) => {
        try {
          const response = await axios.get(`venue/${id}`);

          return { data: response.data };
        } catch (error) {
          return { error };
        }
      },
    }),

    getAllMenus: builder.query({
      queryFn: async () => {
        try {
          const response = await axios.get("/menu");
          return { data: response.data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetCompanyByIdQuery, useGetAllMenusQuery } = challengeApi;
