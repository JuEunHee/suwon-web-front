'use client';

import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib';

import { buttonVariants } from './button.variants';

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = ElementProps & ButtonVariantsProps & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, intent, size, variant = 'outline', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ className, intent, size, variant }))}
        data-variant={variant}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
