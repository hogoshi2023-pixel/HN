"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Brand button — amber/orange industrial accent.
const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-brand/40",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-foreground hover:brightness-110 shadow-[0_8px_24px_-8px_var(--brand)]",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        solid:
          "bg-foreground text-background hover:bg-foreground/90",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3 text-[13px]",
        lg: "h-12 rounded-md px-7 text-[15px] has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "brand", size: "default" },
  }
);

export interface BrandButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
}

export const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-slot="brand-button"
        className={cn(brandButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
BrandButton.displayName = "BrandButton";
