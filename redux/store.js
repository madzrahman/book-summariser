// import { configureStore } from "@reduxjs/toolkit";
// import modalSlice from "./modalSlice";
// import userSlice from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     modals: modalSlice,
//     user: userSlice,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Choose your storage type
// import modalSlice from "./modalSlice";
// import userSlice from "./userSlice";

// const persistConfig = {
//   key: "root", // Key for storage
//   storage, // Storage type (localStorage, sessionStorage, etc.)
//   whitelist: ["user"], // Specify which parts of the state to persist
// };

// const rootReducer = {
//   modals: modalSlice,
//   user: userSlice,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer, // Use the persisted reducer
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"],
};

// const rootReducer = {
//   user: userReducer,
//   modal: modalReducer,
// };

const persistedUserReducer = persistReducer(persistConfig, userReducer);

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootReducer = {
  user: persistedUserReducer,
  modal: modalReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });
