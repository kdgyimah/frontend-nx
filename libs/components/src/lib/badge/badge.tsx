import styles from './badge.module.css';

/* eslint-disable-next-line */
export interface BadgeProps {}

export function Badge(props: BadgeProps) {
  return (
    <div className={styles['container']}>
      <h1 className='bg-indigo-500 p-2 font-mono'>Welcome to Badge!</h1>
    </div>
  );
}

export default Badge;
