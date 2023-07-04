import styles from "./Badge.module.css";

export interface BadgeProps {
  label: string;
}

export const Badge = ({label}: BadgeProps) => {
  return <div className={styles["sm-ds-badge"]}>{label}</div>;
}