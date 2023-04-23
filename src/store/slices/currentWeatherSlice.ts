import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
//import { Reducer } from "react";
import WeatherService from "../../services/WeatherService";
import { Weather } from "../types/types";

type Response = {
    status: number;
    message: string;
}

type CurrentWeaterState = {
    weather: Weather;
    isLoading: boolean;
    response: Response
}

const initialState: CurrentWeaterState = {
    weather: {
        main: {
            temp: 0,
            feels_like: 0
        },
        name: '',
        dt: 0,
        id: 0
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeather',
    async (city: string, { rejectWithValue }): Promise<AxiosResponse> => {
        return await WeatherService.getCurrentWeather(city);
    }
)

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (data: { city: string, daysCount: number }, { rejectWithValue }): Promise<AxiosResponse> => {
        return await WeatherService.getWeather(data);
    }
)

const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather: (state, action) => {
            state.isLoading = true;
            state.weather = action.payload
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<CurrentWeaterState>): void => {
        builder
            .addCase(fetchCurrentWeather.pending, (state: CurrentWeaterState): void => {
                state.isLoading = true;
            })
            .addCase(fetchCurrentWeather.fulfilled, (state: CurrentWeaterState, { payload }): void => {
                state.isLoading = false;
                state.weather = payload.data;
            })
            .addCase(fetchCurrentWeather.rejected, (state: CurrentWeaterState, { payload }): void => {
                state.isLoading = false;
                // state.isError = true;
                // state.response = {
                //     status: payload.status,
                //     message: payload.message
                // };
                // state.user = null;
            })
    }
})

// export const currentWeaterReducer: Reducer<CurrentWeaterState, any> = currentWeatherSlice.reducer;
export default currentWeatherSlice.reducer;