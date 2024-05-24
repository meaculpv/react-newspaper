import type { News } from '@/shared/types/News';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => 'news',
    }),
    getNewsById: builder.query<News, string>({
      query: (id) => `news/${id}`,
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsByIdQuery } = newsApi;
