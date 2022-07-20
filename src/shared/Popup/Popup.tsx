import React from 'react';
import { IDayInfo } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Popup.module.scss';
import { ThisDayInfoItem } from '../../pages/Home/components/ThisDayInfo/ThisDayInfoItem';

interface Props {
  // items: IDayInfo[]
}

export const Popup: React.FC<Props> = (props: Props): JSX.Element => {
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
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Today</div>
          <div className={s.day__img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>Time: 21:45</div>
          <div className={s.day__city}>City: Rehovot</div>
        </div>
        <div className="">
          {items.map(item => <ThisDayInfoItem key={item.icon_id} item={item} />)}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}