import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  uid: null,
  premium: false,
  type: "Basic",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.email = action.payload.email), (state.uid = action.payload.uid);
    },
    signOutUser: (state) => {
      (state.email = null), (state.uid = null);
    },
    upgradeUser: (state, action) => {
      state.premium = action.payload;
    },
    typeOfSubIsYearly: (state) => {
      state.type = "Premium Plus";
    },
    typeOfSubIsMonthly: (state) => {
      state.type = "Premium";
    },
  },
});

export const {
  setUser,
  signOutUser,
  upgradeUser,
  typeOfSubIsYearly,
  typeOfSubIsMonthly,
} = userSlice.actions;

export default userSlice.reducer;
