import { ComponentProps } from "react"
import { ZHtmlInput } from "../ZHtmlInput";
import "./Input.css";

export const TextInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <ZHtmlInput className={className + " " + "o-ui-text-input"} {...rest} />
  )
}