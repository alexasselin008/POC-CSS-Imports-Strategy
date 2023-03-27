import { ComponentProps } from "react"
import "./ZHtmlInput.css";

export const ZHtmlInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <input className={className + " " + "o-ui-zhtml-input-element"} {...rest} />
  )
}