import React from 'react';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

interface Props { }

export const Home: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={s.home}>
      <div className={s.this__day_wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}