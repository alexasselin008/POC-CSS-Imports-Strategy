import { ComponentProps } from "react";
import { ZHtmlInput } from "../ZHtmlInput/ZHtmlInput.tsx";
import styles from "./Input.module.css";

export const TextInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <ZHtmlInput className={className + " " + styles["o-ui-text-input"]} {...rest} />
  )
}