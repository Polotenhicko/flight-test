import classNames from 'classnames';
import styles from './Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...rest }: IButtonProps) {
  const cn = classNames(styles.button, className);

  return (
    <button className={cn} {...rest}>
      {children}
    </button>
  );
}
