import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { StyledInput, StyledInputField } from "./styles"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
}

export const InputField = forwardRef(({label, ...rest}: IInputProps , ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <StyledInputField>
            {label ? <label>{label}</label> : null}
            <StyledInput ref={ref} {...rest} />
            <span></span>
        </StyledInputField>
    )
})