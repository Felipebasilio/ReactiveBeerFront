import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Error loading state:", e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Error saving state:", e);
  }
};

const initialState = loadState() || {
  selectedProduct: null,
  selectedSkuProduct: null,
  navBarState: "productList", // Can be "productList" or "productDetails"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      saveState(state);
    },
    setSelectedSkuProduct: (state, action) => {
      console.log("action.payload", action.payload);
      state.selectedSkuProduct = action.payload;
      saveState(state);
    },
    setNavBarState: (state, action) => {
      state.navBarState = action.payload;
      saveState(state);
    },
  },
});

export const { setSelectedProduct, setNavBarState, setSelectedSkuProduct } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
