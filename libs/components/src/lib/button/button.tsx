import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  icon: string;
  children: any;
  className?: string;
}

export function Button(props: ButtonProps) {
  /**
   * props
   */
  const { icon, children } = props;

  return (
    <button className={styles['container']}>
      <div className="icon mr-1.5">
        <img src={icon} alt="icon" />
      </div>
      {children}
    </button>
  );
}

export default Button;
