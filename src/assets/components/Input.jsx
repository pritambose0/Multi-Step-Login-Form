import React, { useId } from "react";

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  placeholder = "",
  ...props
},ref) {
  const id = useId();
  return (
    <div className="p-0 w-full">
      {label && (
        <label className="font-bold text-base" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`px-3 py-2 text-sm rounded-md outline-none focus:border-gray-200 duration-200 bg-gray-200 w-full ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
})

export default Input;