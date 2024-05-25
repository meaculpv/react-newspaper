import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from '@/entities/news/api/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMIddleware) =>
    getDefaultMIddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
