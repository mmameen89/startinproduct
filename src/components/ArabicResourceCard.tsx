import { ExternalLink } from 'lucide-react';

interface ArabicResourceCardProps {
  title: string;
  platform: string;
  description: string;
  link: string;
  color: 'blue' | 'purple' | 'green' | 'rose';
  type?: 'Course' | 'Program' | 'Diploma' | 'Article';
}

export function ArabicResourceCard({ 
  title, 
  platform, 
  description, 
  link, 
  color,
  type = 'Course'
}: ArabicResourceCardProps) {
  const colorClasses = {
    blue: {
      border: 'border-blue-200 hover:border-blue-300',
      badge: 'bg-blue-100 text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    purple: {
      border: 'border-purple-200 hover:border-purple-300',
      badge: 'bg-purple-100 text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700 text-white'
    },
    green: {
      border: 'border-green-200 hover:border-green-300',
      badge: 'bg-green-100 text-green-700',
      button: 'bg-green-600 hover:bg-green-700 text-white'
    },
    rose: {
      border: 'border-rose-200 hover:border-rose-300',
      badge: 'bg-rose-100 text-rose-700',
      button: 'bg-rose-600 hover:bg-rose-700 text-white'
    }
  };

  return (
    <div className={`bg-white border-2 rounded-xl p-6 transition-all hover:shadow-md ${colorClasses[color].border}`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs px-3 py-1 rounded-full ${colorClasses[color].badge}`}>
          {type}
        </span>
      </div>
      
      <h4 className="text-gray-900 mb-2 min-h-[3rem]" dir="rtl">{title}</h4>
      
      <div className="text-sm text-gray-500 mb-3">
        {platform}
      </div>
      
      <p className="text-sm text-gray-600 mb-4 min-h-[2.5rem]" dir="rtl">
        {description}
      </p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${colorClasses[color].button}`}
      >
        <span>Visit Course</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
