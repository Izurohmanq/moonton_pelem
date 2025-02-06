import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput(
    {
        type,
        name,
        value,
        defaultValue,
        className = "",
        variant = "primary",
        required,
        isFocused,
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={value === undefined ? defaultValue : undefined}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none 
                ${isError ? "input-error" : ""} input-${variant} ${className}`}
            ref={localRef}
            placeholder={placeholder}
            required={required}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
