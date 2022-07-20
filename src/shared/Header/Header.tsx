import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select, { StylesConfig } from 'react-select';
import s from './Header.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

interface Props { }

export const cities = [
  { value: 'city-1', label: 'Tel-Aviv' },
  { value: 'city-2', label: 'Rehovot' },
  { value: 'city-3', label: 'Holon' },
  { value: 'city-4', label: 'Haifa' },
];

export const Header: React.FC<Props> = (props: Props): JSX.Element => {
  const theme = useTheme();

  const colourStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      width: '194px',
      height: '37px',
      backgroundColor: theme.theme === Theme.DARK ?  '#4F4F4F' : 'rgba(71, 147, 255, 0.35)',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#FFF' : '#000'
    })
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Sergata weather</div>
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
          />
        </div>
      </div>
    </header>
  )
}