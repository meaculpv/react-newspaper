import type { News, NewsPagination } from '@/shared/types/News';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsPagination, number>({
      query: (pageNumber) => `news?_page=${pageNumber}&_per_page=10`,
    }),
    getNewsById: builder.query<News, string>({
      query: (id) => `news/${id}`,
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsByIdQuery } = newsApi;
