import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    removeTweet: (state, action) => {
        state.value = state.value.filter(tweet => tweet.id !== action.payload.id);
    },
  },
});

export const { removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
