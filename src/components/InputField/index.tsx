import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { StyledInput, StyledInputField } from "./styles"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    errorMessage?: string;
}

export const InputField = forwardRef(({label , errorMessage,children, ...rest}: IInputProps , ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <StyledInputField>
            {label ? <label>{label}</label> : null}
            <div>
                <StyledInput ref={ref} {...rest} />
                <span>{errorMessage}</span>
                {children}
            </div>
        </StyledInputField>
    )
})