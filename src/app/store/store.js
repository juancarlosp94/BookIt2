import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "./bookingSlice";


const store = configureStore({
    reducer:{
        booking: BookingSlice.reducer
    }
});

export default store
