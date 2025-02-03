import PropTypes from "prop-types";

export default function PrimaryButton({
    type = "submit",
    className = "",
    variant,
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`btn-${variant} rounded-2xl py-[13px] text-center w-full ${disabled ? "opacity-30" : ""} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
    children: PropTypes.node,
    disabled: PropTypes.bool,  // Tambahkan validasi untuk `disabled`
};
