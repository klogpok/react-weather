export type Weather = {
    main: {
        temp: number;
        feels_like: number;
    },
    dt: number,
    name:  string;
    status?: string;
    statusText?: string;
    id: number;
}

export interface City {
    value: string;
    label: string;
}