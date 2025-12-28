import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SharedSelect = ({
  id,
  placeholder,
  formik,
  label,
  options = [],
  disabled,
  variant = "default",
  className = "",
  selectClassName = "",
  required,
}) => {
  const errorMessage = formik?.errors?.[id];
  const touched = formik?.touched?.[id];
  const value = formik?.values?.[id] || "";

  const getSelectClasses = () => {
    switch (variant) {
      case "underline":
        return "border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-sp-green-dark";
      case "unstyled":
        return "border-none shadow-none px-0 py-0 focus-visible:ring-0";
      default:
        return "rounded-lg border border-gray-300 focus:ring-2 focus:ring-sp-green-dark focus:border-sp-green-dark";
    }
  };

  const handleValueChange = (newValue) => {
    formik?.setFieldValue(id, newValue);
    formik?.setFieldTouched(id, true);
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Select
        value={value}
        onValueChange={handleValueChange}
        disabled={formik?.isSubmitting || disabled}
      >
        <SelectTrigger
          className={cn(
            getSelectClasses(),
            "w-full bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900",
            touched &&
              errorMessage &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",
            selectClassName
          )}
          aria-invalid={touched && errorMessage ? true : false}
        >
          <SelectValue placeholder={placeholder || "Select an option"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-sm sm:text-base"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {touched && typeof errorMessage === "string" && (
        <div className="mt-1 text-xs sm:text-sm text-red-500">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SharedSelect;
