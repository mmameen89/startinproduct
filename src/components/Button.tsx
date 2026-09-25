import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  color?: 'blue' | 'purple' | 'green' | 'rose' | 'gray';
  size?: 'icon' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ 
  children, 
  variant = 'primary', 
  color = 'blue',
  size = 'md',
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const colorClasses: Record<string, Record<string, string>> = {
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30',
      secondary: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 backdrop-blur-md',
      outline: 'border border-blue-200 text-blue-600 hover:bg-blue-50/50 backdrop-blur-sm',
      ghost: 'text-blue-600 hover:bg-blue-50/50',
    },
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/30',
      secondary: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 backdrop-blur-md',
      outline: 'border border-purple-200 text-purple-600 hover:bg-purple-50/50 backdrop-blur-sm',
      ghost: 'text-purple-600 hover:bg-purple-50/50',
    },
    green: {
      primary: 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/30',
      secondary: 'bg-green-500/10 hover:bg-green-500/20 text-green-600 backdrop-blur-md',
      outline: 'border border-green-200 text-green-600 hover:bg-green-50/50 backdrop-blur-sm',
      ghost: 'text-green-600 hover:bg-green-50/50',
    },
    rose: {
      primary: 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/30',
      secondary: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 backdrop-blur-md',
      outline: 'border border-rose-200 text-rose-600 hover:bg-rose-50/50 backdrop-blur-sm',
      ghost: 'text-rose-600 hover:bg-rose-50/50',
    },
    gray: {
      primary: 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-500/30',
      secondary: 'bg-gray-500/10 hover:bg-gray-500/20 text-gray-700 backdrop-blur-md',
      outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50/50 backdrop-blur-sm',
      ghost: 'text-gray-600 hover:bg-gray-100/50',
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
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-full transition-all duration-300 font-medium flex items-center justify-center 
        active:scale-95 
        ${sizeClasses[size]} 
        ${variantClass} 
        ${className}
      `}
    >
      {children}
    </button>
  );
}
