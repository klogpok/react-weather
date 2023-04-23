import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select, { StylesConfig } from 'react-select';
import s from './Header.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { useAppDispatch } from '../../store/store';
import { setCurrentCity } from '../../store/slices/currentCitySlice';
import { City } from '../../store/types/types';

interface Props {}

export const cities: City[] = [
    { value: 'city-1', label: 'Тель-Авив' },
    { value: 'city-2', label: 'Реховот' },
    { value: 'city-3', label: 'Холон' },
    { value: 'city-4', label: 'Хайфа' },
    { value: 'city-5', label: 'Москва' },
    { value: 'city-6', label: 'Владивосток' },
];

export const Header: React.FC<Props> = (props: Props): JSX.Element => {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const colourStyles: StylesConfig<any> = {
        control: (styles) => ({
            ...styles,
            width: '194px',
            height: '37px',
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.35)',
            border: 'none',
            borderRadius: '10px',
            zIndex: '100',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#FFF' : '#000',
        }),
    };

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const changeSelect = (city: City) => {
        dispatch(setCurrentCity(city.label));
    };

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>weather info</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <div className={s.select}>
                    <Select
                        isSearchable={false}
                        defaultValue={cities[0]}
                        options={cities}
                        styles={colourStyles}
                        onChange={changeSelect}
                    />
                </div>
            </div>
        </header>
    );
};
