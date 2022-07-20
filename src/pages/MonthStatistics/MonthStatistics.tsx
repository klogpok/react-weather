import React from 'react';
import s from './MonthStatistics.module.scss';

interface Props {}

export const MonthStatistics: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={s.home}>Month Statistics</div>
  )
}