import s from './Spinner.module.scss';

export interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = (prop: SpinnerProps): JSX.Element => {
  return (
    <div className={s.loadingSpinnerContainer}>
      <div className={s.loadingSpinner}></div>
    </div>
  );
}