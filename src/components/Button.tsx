
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  color?: 'blue' | 'purple' | 'green' | 'rose' | 'gray';
  size?: 'icon' | 'sm' | 'md' | 'lg';
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  color = 'blue',
  size = 'md',
  asChild = false,
  isLoading = false,
  children,
  disabled,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";

  const colorClasses: Record<string, Record<string, string>> = {
    blue: {
      primary: 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30 border border-blue-400/20',
      secondary: 'bg-blue-500/10 hover:bg-blue-500/15 text-blue-600 border border-blue-200/50 backdrop-blur-md',
      outline: 'border border-blue-200 text-blue-600 hover:bg-blue-50/50 backdrop-blur-sm',
      ghost: 'text-blue-600 hover:bg-blue-50/50',
      glass: 'ios-glass text-blue-600 hover:bg-white/90',
    },
    purple: {
      primary: 'bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 border border-purple-400/20',
      secondary: 'bg-purple-500/10 hover:bg-purple-500/15 text-purple-600 border border-purple-200/50 backdrop-blur-md',
      outline: 'border border-purple-200 text-purple-600 hover:bg-purple-50/50 backdrop-blur-sm',
      ghost: 'text-purple-600 hover:bg-purple-50/50',
      glass: 'ios-glass text-purple-600 hover:bg-white/90',
    },
    green: {
      primary: 'bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 border border-green-400/20',
      secondary: 'bg-green-500/10 hover:bg-green-500/15 text-green-600 border border-green-200/50 backdrop-blur-md',
      outline: 'border border-green-200 text-green-600 hover:bg-green-50/50 backdrop-blur-sm',
      ghost: 'text-green-600 hover:bg-green-50/50',
      glass: 'ios-glass text-green-600 hover:bg-white/90',
    },
    rose: {
      primary: 'bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg shadow-rose-500/30 border border-rose-400/20',
      secondary: 'bg-rose-500/10 hover:bg-rose-500/15 text-rose-600 border border-rose-200/50 backdrop-blur-md',
      outline: 'border border-rose-200 text-rose-600 hover:bg-rose-50/50 backdrop-blur-sm',
      ghost: 'text-rose-600 hover:bg-rose-50/50',
      glass: 'ios-glass text-rose-600 hover:bg-white/90',
    },
    gray: {
      primary: 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg shadow-gray-500/30 border border-gray-700/50',
      secondary: 'bg-gray-500/10 hover:bg-gray-500/15 text-gray-700 border border-gray-200/50 backdrop-blur-md',
      outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50/50 backdrop-blur-sm',
      ghost: 'text-gray-600 hover:bg-gray-100/50',
      glass: 'ios-glass text-gray-900 hover:bg-white/90',
    }
  };

  const selectedColor = colorClasses[color] || colorClasses.blue;
  const variantClass = selectedColor[variant] || selectedColor.primary;

  const sizeClasses = {
    icon: 'p-2',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <Comp
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        "rounded-full min-h-11 transition-all duration-300 font-bold flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700",
        "active:scale-[0.98] hover:scale-[1.02]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClass,
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
});

Button.displayName = "Button";
