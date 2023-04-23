import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';
interface Props {
  weather: Weather
}

export const ThisDay: React.FC<Props> = ({ weather }: Props): JSX.Element => {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(dayjs().format('HH:mm:ss'))
    }, 1000);

    return () => clearInterval(interval);
  }, [clock])

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.ceil(weather.main.temp)+'°'}</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <div className={s.this__day_icon}>
          <GlobalSvgSelector id="sun" />
        </div>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>Time: {clock}</div>
        <div className={s.this__city}>City: {weather.name}</div>
      </div>
    </div>
  )
}