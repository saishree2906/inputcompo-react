import React, { useState, useRef, useId } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  type?: "text" | "password";
}

const sizeStyles: Record<NonNullable<InputFieldProps["size"]>, string> = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-base px-3",
  lg: "h-12 text-lg px-4",
};

const variantStyles: Record<NonNullable<InputFieldProps["variant"]>, string> = {
  filled: "bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-300 dark:border-gray-700 focus:border-blue-500",
  ghost: "border border-transparent focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  loading = false,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: "" } } as any);
    }
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-800 dark:text-gray-200">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={id}
          ref={inputRef}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={[
            "w-full rounded-md outline-none transition",
            sizeStyles[size],
            variantStyles[variant],
            invalid ? "border-red-500" : "",
            disabled ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed" : "",
            loading ? "pr-10" : type === "password" ? "pr-12" : "pr-8",
          ].join(" ")}
        />

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 text-xs text-gray-600 dark:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

        {/* Clear button */}
        {value && !disabled && !loading && type !== "password" && (
          <button
            type="button"
            className="absolute right-2 text-sm text-gray-500 dark:text-gray-300"
            onClick={handleClear}
          >
            ✕
          </button>
        )}

        {/* Loading spinner */}
        {loading && (
          <div className="absolute right-2 h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>

      {helperText && !invalid && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errorMessage}</p>
      )}
    </div>
  );
};
