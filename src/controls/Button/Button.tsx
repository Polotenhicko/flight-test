import classNames from 'classnames';
import styles from './Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className }: IButtonProps) {
  const cn = classNames(styles.button, className);

  return <button className={cn}>{children}</button>;
}
