import { motion } from 'framer-motion';
import { ArrowDown, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

interface PathHeroProps {
    title: string;
    subtitle: string;
    color: 'blue' | 'purple' | 'green' | 'rose';
    badges?: string[];
    onStartPath: () => void;
    onBookSession: () => void;
    onNavigate?: (path: string) => void;
}

export function PathHero({
    title,
    subtitle,
    color,
    badges = [],
    onStartPath,
    onBookSession,
    onNavigate
}: PathHeroProps) {
    const { t, dir } = useLanguage();

    const colorStyles = {
        blue: {
            badge: 'bg-blue-100/50 text-blue-700 border-blue-200/50',
            gradient: 'from-blue-500/20 via-blue-100/20 to-transparent',
            blob: 'bg-blue-300/30'
        },
        purple: {
            badge: 'bg-purple-100/50 text-purple-700 border-purple-200/50',
            gradient: 'from-purple-500/20 via-purple-100/20 to-transparent',
            blob: 'bg-purple-300/30'
        },
        green: {
            badge: 'bg-green-100/50 text-green-700 border-green-200/50',
            gradient: 'from-green-500/20 via-green-100/20 to-transparent',
            blob: 'bg-green-300/30'
        },
        rose: {
            badge: 'bg-rose-100/50 text-rose-700 border-rose-200/50',
            gradient: 'from-rose-500/20 via-rose-100/20 to-transparent',
            blob: 'bg-rose-300/30'
        }
    };

    const theme = colorStyles[color];

    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Ambience */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-40 pointer-events-none`} />
            <div className={`absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-[100px] ${theme.blob} motion-safe:animate-pulse pointer-events-none`} />
            <div className={`absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full blur-[80px] ${theme.blob} opacity-50 pointer-events-none`} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Breadcrumbs */}
                <motion.nav
                    aria-label={dir === 'rtl' ? 'مسار التنقل' : 'Breadcrumb'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium"
                >
                    <button type="button" className="min-h-11 px-1 hover:text-gray-900 transition-colors rounded" onClick={() => onNavigate?.('/')}>
                        {t('nav.home')}
                    </button>
                    <ChevronRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
                    <button type="button" className="min-h-11 px-1 hover:text-gray-900 transition-colors rounded" onClick={() => onNavigate?.('/choose-your-path')}>
                        {t('nav.explorePaths')}
                    </button>
                    <ChevronRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
                    <span className={`text-${color}-600`}>{title}</span>
                </motion.nav>

                {/* Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 flex flex-wrap gap-3"
                >
                    {badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`${theme.badge} backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full border shadow-sm`}
                        >
                            {badge}
                        </span>
                    ))}
                </motion.div>

                {/* Title & Subtitle */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl"
                >
                    {subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="primary" color={color} size="lg" onClick={onStartPath}>
                        <ArrowDown size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                        {t('paths.common.startPath')}
                    </Button>
                    <Button variant="outline" color={color} size="lg" onClick={onBookSession}>
                        <Calendar size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                        {t('common.bookMentorship')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
