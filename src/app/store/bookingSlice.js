import { createSlice } from "@reduxjs/toolkit";

export const BookingSlice = createSlice({
    name: 'booking',
    initialState: {
        hotelsBooked: []
    },
    reducers: {
        addHotel:(state, {payload}) => {
            state.hotelsBooked.push(payload);
        }
    }
});

export const {addHotel} = BookingSlice.actions;