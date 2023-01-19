import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dietApi = createApi({
  reducerPath: 'dietApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://slimmom-backend.goit.global',
    prepareHeaders: (headers, api) => {
      const state = api.getState();
      const accessToken = state.auth.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['userInfo'],
  endpoints: builder => {
    return {
      getUserInfo: builder.query({
        query: () => `/user`,
        providesTags: ['userInfo'],
      }),
      searchProduct: builder.query({
        query: q => {
          return {
            url: '/product',
            method: 'GET',
            params: {
              search: q,
            },
          };
        },

        providesTags: ['userInfo'],
      }),
      getDayInfo: builder.query({
        query: date => {
          return {
            url: '/day/info',
            method: 'POST',
            body: { date },
          };
        },
        providesTags: (_, _2, arg) => [{ type: 'dayInfo', id: arg }],
      }),
      dailyRate: builder.mutation({
        query: body => {
          return {
            url: '/daily-rate',
            method: 'POST',
            body,
          };
        },
      }),
      userDailyRate: builder.mutation({
        query: ({ id, body }) => {
          return {
            url: `/daily-rate/${id}`,
            method: 'POST',
            body,
          };
        },
        invalidatesTags: ['userInfo'],
      }),
      addEatenProduct: builder.mutation({
        query: ({ date = new Date().toJSON().slice(0, 10), productId, weight }) => {
          return {
            url: '/day',
            method: 'POST',
            body: { date, productId, weight },
          };
        },
        invalidatesTags: (_, _2, { date }) => ['userInfo', { type: 'dayInfo', id: date }],
      }),
      deleteEatenProduct: builder.mutation({
        query: ({ dayId, eatenProductId }) => {
          return {
            url: '/day',
            method: 'DELETE',
            body: { dayId, eatenProductId },
          };
        },
        invalidatesTags: (_, _2, { date }) => ['userInfo', { type: 'dayInfo', id: date }],
      }),
    };
  },
});

export const {
  useGetUserInfoQuery,
  useSearchProductQuery,
  useGetDayInfoQuery,
  useDailyRateMutation,
  useUserDailyRateMutation,
  useAddEatenProductMutation,
  useDeleteEatenProductMutation,
} = dietApi;
