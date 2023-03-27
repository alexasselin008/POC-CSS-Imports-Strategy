import { ComponentProps } from "react"
import { TextInput } from "../input"
import "./DateInput.css";

export const DateInput = ({className, ...rest}: ComponentProps<"input">) => {
  return (
    <TextInput type="date" className={className + " " + "o-ui-date-input"} {...rest} />
  )
}