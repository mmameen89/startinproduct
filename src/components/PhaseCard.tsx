import { CheckCircle2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PhaseCardProps {
  phaseNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  goals: string[];
  topics: string[];
  resources: Array<{ type: string; title: string; link?: string }>;
  weeklyTime: string;
  color: 'blue' | 'purple' | 'green' | 'rose';
  isOptional?: boolean;
}

export function PhaseCard({
  phaseNumber,
  title,
  subtitle,
  duration,
  goals,
  topics,
  resources,
  weeklyTime,
  color,
  isOptional = false,
}: PhaseCardProps) {
  const { t } = useLanguage();

  const colorStyles = {
    blue: {
      border: 'border-blue-200/50',
      bg: 'bg-blue-50/30',
      text: 'text-blue-600',
      badge: 'bg-blue-100/50 text-blue-700',
      hover: 'hover:border-blue-300/60 hover:shadow-blue-500/10'
    },
    purple: {
      border: 'border-purple-200/50',
      bg: 'bg-purple-50/30',
      text: 'text-purple-600',
      badge: 'bg-purple-100/50 text-purple-700',
      hover: 'hover:border-purple-300/60 hover:shadow-purple-500/10'
    },
    green: {
      border: 'border-green-200/50',
      bg: 'bg-green-50/30',
      text: 'text-green-600',
      badge: 'bg-green-100/50 text-green-700',
      hover: 'hover:border-green-300/60 hover:shadow-green-500/10'
    },
    rose: {
      border: 'border-rose-200/50',
      bg: 'bg-rose-50/30',
      text: 'text-rose-600',
      badge: 'bg-rose-100/50 text-rose-700',
      hover: 'hover:border-rose-300/60 hover:shadow-rose-500/10'
    },
  };

  const theme = colorStyles[color];

  // Helper to translate resource type
  const resourceTypeLabel = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType === 'course') return t('paths.common.filters.course');
    if (lowerType === 'book') return t('paths.common.filters.book');
    if (lowerType === 'article') return t('paths.common.filters.article');
    if (lowerType === 'video') return t('paths.common.filters.video');
    if (lowerType === 'tool') return t('paths.common.filters.tool');
    if (lowerType === 'community') return t('paths.common.filters.community');

    // Handle combined or specific types loosely
    if (lowerType.includes('course')) return t('paths.common.filters.course');
    if (lowerType.includes('article')) return t('paths.common.filters.article');
    if (lowerType.includes('program')) return t('paths.common.filters.program');
    if (lowerType.includes('platform')) return t('paths.common.filters.platform');

    return type;
  };

  return (
    <div className={`
      relative overflow-hidden
      glass-panel
      rounded-[32px] p-8 
      transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/30
      ${theme.border}
    `}>
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`${theme.badge} backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium border border-white/20`}>
            {t('paths.common.phase')} {phaseNumber}
          </div>
          {isOptional && (
            <span className="bg-gray-100/50 backdrop-blur-sm text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200/50">
              {t('paths.common.optional')}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{title}</h3>
        <p className="text-gray-600 mb-2 leading-relaxed">{subtitle}</p>
        <p className="text-sm font-medium text-gray-500 mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          {duration}
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider opacity-80">{t('paths.common.goals')}</h4>
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600 group">
                  <div className={`mt-0.5 p-0.5 rounded-full bg-white/50 ${theme.text}`}>
                    <CheckCircle2 size={16} className="flex-shrink-0" />
                  </div>
                  <span className="group-hover:text-gray-900 transition-colors">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider opacity-80">{t('paths.common.topics')}</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-white/50 backdrop-blur-sm border border-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full hover:bg-white/80 transition-colors cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider opacity-80">{t('paths.common.resources')}</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {resources.map((resource, index) => (
                resource.link ? (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group flex flex-col p-4 rounded-2xl border bg-white/40 backdrop-blur-sm 
                      transition-all duration-300
                      hover:bg-white/80 ${theme.hover} border-gray-200/50
                    `}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${theme.badge} border border-white/20`}>
                        {resourceTypeLabel(resource.type)}
                      </span>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 line-clamp-2">
                      {resource.title}
                    </span>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex flex-col p-4 rounded-2xl border border-gray-200/50 bg-gray-50/50 backdrop-blur-sm"
                  >
                    <div className="mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${theme.badge} border border-white/20`}>
                        {resourceTypeLabel(resource.type)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {resource.title}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200/50">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className={`font-medium ${theme.text}`}>{t('paths.common.weeklyTime')}</span>
              <span className="bg-gray-100/50 px-2 py-0.5 rounded-md text-gray-700">{weeklyTime}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
