import styles from './logo.module.css';
import kadoLogo from './logo.svg';

/* eslint-disable-next-line */
export interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo(props: LogoProps) {
  return (
    <div className={styles['container']}>
      <img src={kadoLogo} width={40} height={40} alt="company logo" />
      <h2 className="ml-4 text-2xl font-bold">
        <i>Kado</i>
      </h2>
    </div>
  );
}

export default Logo;
