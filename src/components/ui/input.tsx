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
                'ring-offset-background flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
