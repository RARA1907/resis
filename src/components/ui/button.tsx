import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg hover:-translate-y-0.5 hover:shadow-[var(--shadow-primary)]",
        secondary:
          "bg-surface-2 text-foreground border border-border hover:bg-surface-2/70",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-surface-2",
        ghost: "bg-transparent text-foreground hover:bg-surface-2",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-[15px] rounded-md",
        lg: "h-14 px-8 text-base rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
