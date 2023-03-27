import "./Badge.css";

export interface BadgeProps {
  label: string;
}

export const Badge = ({label}: BadgeProps) => {
  return <div className="sm-ds-badge">{label}</div>;
}