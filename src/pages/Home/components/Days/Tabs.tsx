import React from 'react';
import s from './Days.module.scss';

interface Props { }

interface ITab {
    value: string;
}

export const Tabs: React.FC<Props> = (props: Props): JSX.Element => {
    const tabs: ITab[] = [
        {
            value: 'Weekly',
        },
        {
            value: '10 Day',
        },
        {
            value: '2 Weeks',
        },
    ];

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab: ITab) => (
                    <div key={tab.value} className={s.tab}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Clear</div>
        </div>
    )
}