import styles from './icontext.module.css';

/* eslint-disable-next-line */
export interface IcontextProps {
  icon: string;
  text: string;
  disabled: boolean;
}

export function Icontext(props: IcontextProps) {
  /**
   * props
   */
  const { text, icon, disabled } = props;

  return (
    <div className="items-center flex">
      <img src={icon} alt="icon" />
      <p className={`font-medium ml-4 ${disabled ? 'text-gray-400' : ''}`}>
        {text}
      </p>
    </div>
  );
}

export default Icontext;
