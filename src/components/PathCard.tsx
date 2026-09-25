import { Button } from './Button';

interface PathCardProps {
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'rose';
  icon: React.ReactNode;
  onNavigate: () => void;
  buttonText?: string;
}

export function PathCard({ title, description, color, icon, onNavigate, buttonText }: PathCardProps) {
  const colorClasses = {
    blue: 'border-blue-200 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-white',
    purple: 'border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-white',
    green: 'border-green-200 hover:border-green-300 bg-gradient-to-br from-green-50 to-white',
    rose: 'border-rose-200 hover:border-rose-300 bg-gradient-to-br from-rose-50 to-white',
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    rose: 'text-rose-600',
  };

  return (
    <div className={`border-2 rounded-2xl p-8 transition-all hover:shadow-lg ${colorClasses[color]}`}>
      <div className={`w-12 h-12 mb-6 ${iconColorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="primary" color={color} onClick={onNavigate}>
        {buttonText || `${title} Path`}
      </Button>
    </div>
  );
}
