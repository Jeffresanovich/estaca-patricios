import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = import.meta.env.VITE_BASE_URL;

export const patriciosStakeApi = createApi({
  reducerPath: "patriciosStakeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: (builder) => ({
    getAllWard: builder.query({
      query: () => "wards.json",
    }),

    getAllAppointment: builder.query({
      query: () => "appointments.json",
    }),

    //Update Appointment
    patchAppointment: builder.mutation({
      query: ([time, order, body]) => ({
        url: `appointments/${time}/order/${order}.json`,
        method: "PATCH",
        body: body,
      }),
    }),
    /*
    getAppointmentByTime: builder.query({
      query: (title) =>
        `books.json?orderBy="book_data/title"&startAt="${title}"`,
    }),
    /*
    //Create book
    postBook: builder.mutation({
      query: (body) => ({
        url: `books.json`,
        method: "POST",
        body: body,
      }),
    }),
    
    
    //Delete Book
    deleteBook: builder.mutation({
      query: (bookKey) => ({
        url: `books/${bookKey}.json`,
        method: "DELETE",
      }),
    }),
    
    */
  }),
});

export const {
  useGetAllAppointmentQuery,
  useGetAllWardQuery,
  usePatchAppointmentMutation,
} = patriciosStakeApi; //EndPint en forma de HOOK: use...
