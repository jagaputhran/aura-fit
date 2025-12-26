import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-burgundy hover:bg-burgundy-dark hover:shadow-lg rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:bg-primary/5 hover:border-primary rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-gold hover:bg-secondary/90 rounded-md",
        ghost: 
          "hover:bg-muted hover:text-foreground rounded-md",
        link: 
          "text-primary underline-offset-4 hover:underline",
        // Custom variants for the fashion platform
        gold: 
          "bg-gradient-gold text-charcoal shadow-gold hover:shadow-lg hover:scale-[1.02] font-semibold rounded-md",
        hero:
          "bg-primary text-primary-foreground shadow-burgundy px-8 py-4 text-base hover:bg-burgundy-dark hover:shadow-lg hover:scale-[1.02] rounded-lg",
        "hero-outline":
          "border-2 border-primary bg-transparent text-primary px-8 py-4 text-base hover:bg-primary hover:text-primary-foreground rounded-lg",
        elegant:
          "bg-transparent border border-gold/50 text-foreground hover:border-gold hover:shadow-gold rounded-md",
        teal:
          "bg-accent text-accent-foreground shadow-sm hover:bg-teal-light rounded-md",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
