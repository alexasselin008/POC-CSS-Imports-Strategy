import "./Button.css";

export interface ButtonProps {
  label: string;
}

export const Button = ({label}: ButtonProps) => {
  return <button className="sm-ds-button">{label}</button>;
}