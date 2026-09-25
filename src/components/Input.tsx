import { InputHTMLAttributes, forwardRef } from 'react';
import { Search } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    leftIcon?: 'search' | React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', error, leftIcon, rightIcon, ...props }, ref) => {
        return (
            <div className="relative group">
                {leftIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
                        {leftIcon === 'search' ? <Search size={20} /> : leftIcon}
                    </div>
                )}

                <input
                    ref={ref}
                    className={`
            w-full bg-white/50 backdrop-blur-md
            border border-gray-200/50
            rounded-2xl px-5 py-3
            text-gray-900 placeholder:text-gray-400
            transition-all duration-300
            focus:outline-none focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10
            hover:bg-white/80 hover:border-gray-300/50
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-sm shadow-gray-200/20
            ${leftIcon ? 'pl-12' : ''}
            ${rightIcon ? 'pr-12' : ''}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
                    {...props}
                />

                {rightIcon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
                        {rightIcon}
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
