import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from '@/entities/news/api/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsReducer from '@/entities/news/model/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMIddleware) =>
    getDefaultMIddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
