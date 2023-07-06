import cx from "classnames";
import { ComponentProps } from "react";
import { TextInput } from "../TextInput/TextInput.tsx";
import styles from "./DateInput.module.css";

export const DateInput = ({className, ...rest}: ComponentProps<"input">) => {
    const classNames= cx(className ,styles["o-ui-date-input"]);

    return (
        <TextInput type="date" className={classNames} {...rest} />
    )
}