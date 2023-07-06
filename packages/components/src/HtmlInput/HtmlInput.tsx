import cx from "classnames";
import { ComponentProps } from "react";
import styles from "./HtmlInput.module.css" assert { type: "css" };

export const HtmlInput = ({className, ...rest}: ComponentProps<"input">) => {
        const classNames= cx(className ,styles["o-ui-html-input-element"]);

  return (
    <input className={classNames} {...rest} />
  )
}