import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.scss';
import { IDay } from './Days';

interface Props {
    dayData: IDay
}

export const DayCard: React.FC<Props> = ({ dayData }: Props): JSX.Element => {
  const { day,  day_info,  icon_id,  temp_day,  temp_night,  info } = dayData;

  return (
    <div className={s.card}>
        <div className={s.day}>{day}</div>
        <div className={s.day_info}>{day_info}</div>
        <div className={s.day_icon}><GlobalSvgSelector id={icon_id} /></div>
        <div className={s.temp_day}>{temp_day}</div>
        <div className={s.temp_night}>{temp_night}</div>
        <div className={s.info}>{info}</div>
    </div>
  )
}