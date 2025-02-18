export default function Checkbox({ className = '', name, value, handleChange, checked=false, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            name={name}
            value={value}
            defaultChecked={checked}
            onChange={(e) => handleChange(e)}
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
