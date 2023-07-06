import cx from "classnames";
import { ComponentProps } from "react";
import { HtmlInput } from "../HtmlInput/HtmlInput.tsx";
import styles from "./Input.module.css";

export const TextInput = ({className, ...rest}: ComponentProps<"input">) => {
        const classNames= cx(className ,styles["o-ui-date-input"]);

  return (
    <HtmlInput className={classNames} {...rest} />
  )
}