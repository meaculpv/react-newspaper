// src/store/newsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { newsApi } from '@/entities/news/api/api';
import { News } from '@/shared/types/News';
import axios from 'axios';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [] as News[],
    article: {} as News,
    comments: [] as Comment[],
    status: 'idle',
    error: '',
  },
  reducers: {
    incrementLikes: (state, action) => {
      if (state.article && state.article.id === action.payload) {
        state.article.likes += 1;
        axios.patch(`http://localhost:8000/news/${action.payload}`, {
          likes: state.article.likes,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        newsApi.endpoints.getAllNews.matchFulfilled,
        (state, action) => {
          state.articles = action.payload.data;
          state.status = 'succeeded';
        }
      )
      .addMatcher(newsApi.endpoints.getAllNews.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(
        newsApi.endpoints.getAllNews.matchRejected,
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      )
      .addMatcher(
        newsApi.endpoints.getNewsById.matchFulfilled,
        (state, action) => {
          state.article = action.payload;
          console.log(action.payload);
        }
      )
      .addMatcher(
        newsApi.endpoints.getCommentsByPostId.matchFulfilled,
        (state, action) => {
          state.comments = action.payload;
          console.log(state.comments);
        }
      );
  },
});

export const { incrementLikes } = newsSlice.actions;

export default newsSlice.reducer;
