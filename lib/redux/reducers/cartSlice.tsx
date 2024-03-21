import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { coursesData, coursesDataType } from "@/lib/data/courses";
import { events, eventsType } from "@/lib/data/events";
import { productData, productDataType } from "@/lib/data/products";

interface CartState {
  products: productDataType[];
  courses: coursesDataType[];
  events: eventsType[];
}

const initialState: CartState = {
  products: [],
  courses: [],
  events: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<number>) {},
    addCourseToCart(state, action: PayloadAction<number>) {},
    addEventToCart(state, action: PayloadAction<number>) {},
  },
});

export const { addProductToCart, addCourseToCart, addEventToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
