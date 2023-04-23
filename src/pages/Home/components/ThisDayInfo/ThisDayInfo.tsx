import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayInfoItem } from './ThisDayInfoItem';
import { Weather } from '../../../../store/types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

interface Props {
    weather: Weather;
}

export interface IDayInfo {
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo: React.FC<Props> = (props: Props): JSX.Element => {
    const items: IDayInfo[] = [
        {
            icon_id: 'temp',
            name: 'Temperature',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Pressure',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Precipitation',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Wind',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];

    const { weatherData } = useSelector((state: RootState) => state);

    const updatedData: IDayInfo[] = items.map((item) => {
        if (item.icon_id === 'temp') {
            item.value = `${Math.ceil(weatherData.weather.main.temp)}° (ощущается как ${Math.ceil(
                weatherData.weather.main.feels_like
            )}°)`;
        }

        return item;
    });

    return (
        <div className={s.this__day_info}>
            <img src={cloud} alt="cloud" />
            <div className={s.this__day_info_items}>
                {updatedData.map((item) => (
                    <ThisDayInfoItem key={item.icon_id} item={item} />
                ))}
            </div>
        </div>
    );
};
