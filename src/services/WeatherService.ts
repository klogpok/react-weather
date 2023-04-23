import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

export default class WeatherService {
    static async getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        const res = await api.get<Weather>(`/weather?q=${city}`);
        console.log(res);
        return res;
    }

    static async getWeather(data: any): Promise<AxiosResponse<Weather>> {
        const res = await api.get<Weather>(`/forecast/daily?q=${data.city}&cnt=${data.daysCount}`);
        console.log(res);
        return res;
    }
}