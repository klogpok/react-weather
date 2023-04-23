import { createSlice } from "@reduxjs/toolkit";
// import { AxiosResponse } from "axios";
// import { Reducer } from "react";
// import WeatherService from "../../services/WeatherService";
// import { Weather } from "../types/types";

type CurrentCityState = {
    city: string
}

const initialState: CurrentCityState = {
    city: 'Tel Aviv'
}

const currentCitySlice = createSlice({
    name: 'current_city',
    initialState,
    reducers: {
        setCurrentCity: (state, action) => {
            state.city = action.payload;
        }
    }
})

export const { setCurrentCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;