import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const InputField = ({
  id,
  type = "text",
  placeholder,
  formik,
  label,
  labelExtraParams,
  disabled,
  value,
  icon,
  variant = "default",
  className = "",
  inputClassName = "",
  readOnly = false,
  step,
  min,
  max,
  prefix,
  onIconClick,
  required,
}) => {
  const errorMessage = formik?.errors?.[id];
  const touched = formik?.touched?.[id];

  const getInputClasses = () => {
    switch (variant) {
      case "underline":
        return "border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-sp-green-dark";
      case "unstyled":
        return "border-none shadow-none px-0 py-0 focus-visible:ring-0";
      default:
        return "rounded-lg border border-gray-300 focus:ring-2 focus:ring-sp-green-dark focus:border-sp-green-dark";
    }
  };

  const handleChange = (e) => {
    const trimmedValue = e.target.value.trimStart();
    formik?.setFieldValue(id, trimmedValue);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {labelExtraParams && (
          <button
            type="button"
            onClick={labelExtraParams.onClick}
            className="text-xs sm:text-sm text-sp-green-dark hover:underline mb-1 sm:mb-1.5"
          >
            {labelExtraParams.text}
          </button>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm sm:text-base">
            {prefix}
          </div>
        )}
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value || formik?.values?.[id] || ""}
          onChange={handleChange}
          onBlur={formik?.handleBlur}
          className={cn(
            getInputClasses(),
            "w-full bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500",
            prefix && "pl-8 sm:pl-10",
            icon && "pr-10 sm:pr-12",
            touched &&
              errorMessage &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",
            inputClassName
          )}
          disabled={formik?.isSubmitting || disabled}
          readOnly={readOnly}
          step={step}
          min={min}
          max={max}
          required={required}
          aria-invalid={touched && errorMessage ? true : false}
        />
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={onIconClick ? "Toggle visibility" : ""}
          >
            {icon}
          </button>
        )}
      </div>
      {touched && typeof errorMessage === "string" && (
        <div className="mt-1 text-xs sm:text-sm text-red-500">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputField;
