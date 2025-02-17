export default function Checkbox({ className = '', handleChange, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
            onChange={(e) => handleChange(e)}
        />
    );
}
