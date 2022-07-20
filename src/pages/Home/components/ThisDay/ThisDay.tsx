import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

interface Props { }

export const ThisDay: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <div className={s.this__day_icon}>
          <GlobalSvgSelector id="sun" />
        </div>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>Time: 21:54</div>
        <div className={s.this__city}>City: Санкт-Петербург</div>
      </div>
    </div>
  )
}