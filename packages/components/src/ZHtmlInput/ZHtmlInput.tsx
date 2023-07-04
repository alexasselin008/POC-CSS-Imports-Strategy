import { ComponentProps } from "react";
import styles from "./ZHtmlInput.module.css";

export const ZHtmlInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <input className={className + " " + styles["o-ui-zhtml-input-element"]} {...rest} />
  )
}