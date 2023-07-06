import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({label, onClick}: ButtonProps) => {
  return <button onClick={onClick} className={styles["sm-ds-button"]}>{label}</button>;
}