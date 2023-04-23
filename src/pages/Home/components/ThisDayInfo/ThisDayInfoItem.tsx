import React from 'react';
import s from './ThisDayInfoItem.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/icons/IndicatorSvgSelector'

interface Props {
    item: IItem
};

interface IItem {
    icon_id: string;
    name: string;
    value: string;
};

export const ThisDayInfoItem: React.FC<Props> = ({ item }: Props): JSX.Element => {
    const { icon_id, name, value } = item;

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    )
}