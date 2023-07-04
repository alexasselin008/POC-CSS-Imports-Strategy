import { ComponentProps } from "react";
import { TextInput } from "../input/TextInput.tsx";
import styles from "./DateInput.module.css";

export const DateInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <TextInput type="date" className={className + " " + styles["o-ui-date-input"]} {...rest} />
  )
}