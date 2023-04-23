import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { fetchCurrentWeather, fetchWeather } from '../../store/slices/currentWeatherSlice';
import { useSelector } from 'react-redux';
import { Spinner } from '../../shared/Spinner/Spinner';

interface Props { }

export const Home: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { weatherData, city } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.city));
    // dispatch(fetchWeather({city: city.city, daysCount: 7}));
    // dispatch(fetchCurrentWeather(city.city));
  }, [dispatch, city]);

  if (weatherData.isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className={s.home}>
      <div className={s.this__day_wrapper}>
        <ThisDay weather={weatherData.weather}/>
        <ThisDayInfo  weather={weatherData.weather}/>
      </div>
      <Days />
    </div>
  )
}