'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(
                'ring-offset-background focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
