import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

let toastId;

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
          if (!toastId) toastId = toast.loading('Add new product...');
          return {
            url: '/day',
            method: 'POST',
            body: { date, productId, weight },
          };
        },
        transformResponse: (response, meta, arg) => {
          if (meta?.response?.status === 201) {
            toast.update(toastId, {
              render: 'New product has been successfully added.',
              type: 'success',
              isLoading: false,
              autoClose: 3000,
            });
            toastId = null;
          }
          return response;
        },
        transformErrorResponse: (response, meta, arg) => {
          toast.update(toastId, {
            render: 'Can not add new product. An error happened...',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          toastId = null;
          return response.status;
        },
        invalidatesTags: (_, _2, { date }) => [{ type: 'dayInfo', id: date }],
      }),
      deleteEatenProduct: builder.mutation({
        query: ({ dayId, eatenProductId }) => {
          if (!toastId) toastId = toast.loading('Deleting product...');

          return {
            url: '/day',
            method: 'DELETE',
            body: { dayId, eatenProductId },
          };
        },
        transformResponse: (response, meta, arg) => {
          if (meta?.response?.status === 201) {
            toast.update(toastId, {
              render: 'Product successfully deleted',
              type: 'success',
              isLoading: false,
              autoClose: 3000,
            });
            toastId = null;
          }
          return response;
        },
        transformErrorResponse: (response, meta, arg) => {
          toast.update(toastId, {
            render: 'Can not delete new product. An error happened...',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          toastId = null;
          return response.status;
        },
        invalidatesTags: (_, _2, { date }) => [{ type: 'dayInfo', id: date }],
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
