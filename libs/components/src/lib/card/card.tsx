import React from 'react';
import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  /**
   * props
   */
  const { className, children } = props;

  return (
    // <div className={styles['container']}>
    <div className={['p-8 bg-white rounded-2xl', className].join(' ')}>
      {children}
    </div>
  );
}

export default Card;
