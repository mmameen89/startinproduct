import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ResourceCardProps {
  type: 'Course' | 'Article' | 'Video' | 'Tool' | 'Book' | 'Community';
  title: string;
  description: string;
  tags: string;
  color: 'blue' | 'purple' | 'green' | 'rose';
  link?: string;
}

export function ResourceCard({ type, title, description, tags, color, link }: ResourceCardProps) {
  const typeStyles = {
    blue: 'bg-blue-100/50 text-blue-700 border-blue-200/50',
    purple: 'bg-purple-100/50 text-purple-700 border-purple-200/50',
    green: 'bg-green-100/50 text-green-700 border-green-200/50',
    rose: 'bg-rose-100/50 text-rose-700 border-rose-200/50',
  };

  const hoverStyles = {
    blue: 'hover:border-blue-300/50 hover:shadow-blue-500/10',
    purple: 'hover:border-purple-300/50 hover:shadow-purple-500/10',
    green: 'hover:border-green-300/50 hover:shadow-green-500/10',
    rose: 'hover:border-rose-300/50 hover:shadow-rose-500/10',
  };

  const content = (
    <>
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[11px] font-medium px-3 py-1 rounded-full border ${typeStyles[color]} backdrop-blur-sm`}>
          {type}
        </span>
        {link && (
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-gray-900 group-hover:shadow-sm transition-all">
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>
      
      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h4>
      
      <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <span className="text-xs font-medium text-gray-500 bg-gray-50/80 px-2 py-1 rounded-md">
          {tags}
        </span>
      </div>
    </>
  );

  const containerClasses = `
    group relative flex flex-col h-full
    glass-card
    rounded-[24px] p-6 
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/60
    ${hoverStyles[color]}
  `;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`${containerClasses} opacity-75 grayscale-[0.5]`}>
      {content}
    </div>
  );
}
