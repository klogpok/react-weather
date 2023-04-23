import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import currentWeatherReducer from "./slices/currentWeatherSlice";
import currentCityReducer from "./slices/currentCitySlice";

const store  = configureStore({
    reducer: {
        weatherData: currentWeatherReducer,
        city: currentCityReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;