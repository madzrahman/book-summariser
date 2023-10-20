import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  uid: null,
  premium: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.email = action.payload.email), (state.uid = action.payload.uid);
    },
    signOutUser: (state) => {
      (state.email = null), (state.uid = null), (state.premium = false);
    },
    upgradeUser: (state, action) => {
      state.premium = action.payload;
    },
  },
});

export const { setUser, signOutUser, upgradeUser } = userSlice.actions;

export default userSlice.reducer;
