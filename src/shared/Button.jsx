import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SharedButton = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "bg-sp-btn-primary text-white hover:bg-sp-btn-primary/80",
        className
      )}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    />
  );
};

export { SharedButton };
