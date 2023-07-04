import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
}

export const Button = ({label}: ButtonProps) => {
  return <button className={styles["sm-ds-button"]}>{label}</button>;
}