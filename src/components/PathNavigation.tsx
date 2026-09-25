
import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import { useLanguage } from '../context/LanguageContext';

interface Phase {
    phaseNumber: number;
    title: string;
    duration: string;
}

interface PathNavigationProps {
    phases: Phase[];
    activePhaseId?: string;
}

export function PathNavigation({ phases }: PathNavigationProps) {
    const [activeId, setActiveId] = useState<string>('');
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -50% 0px' }
        );

        phases.forEach((phase) => {
            const element = document.getElementById(`phase-${phase.phaseNumber}`);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [phases]);

    const scrollToPhase = (phaseNumber: number) => {
        const element = document.getElementById(`phase-${phaseNumber}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="space-y-1">
            <h3 className="font-semibold text-gray-900 mb-4 px-3 flex items-center gap-2">
                {t('paths.common.learningPhases')}
            </h3>
            <div className="relative">
                {/* Vertical line connecting dots */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100" />

                <ul className="space-y-6 relative">
                    {phases.map((phase) => {
                        const isActive = activeId === `phase-${phase.phaseNumber}`;
                        return (
                            <li key={phase.phaseNumber}>
                                <button
                                    onClick={() => scrollToPhase(phase.phaseNumber)}
                                    className={cn(
                                        "group flex items-start text-left w-full gap-3 py-1 transition-colors relative",
                                        isActive ? "text-purple-700" : "text-gray-500 hover:text-gray-900"
                                    )}
                                >
                                    <div className={cn(
                                        "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 bg-white shrink-0",
                                        isActive
                                            ? "border-purple-600 shadow-lg shadow-purple-100 scale-110"
                                            : "border-gray-200 group-hover:border-gray-300"
                                    )}>
                                        <span className={cn(
                                            "text-sm font-bold",
                                            isActive ? "text-purple-700" : "text-gray-400"
                                        )}>
                                            {phase.phaseNumber}
                                        </span>
                                    </div>

                                    <div className="pt-2">
                                        <span className={cn(
                                            "block text-sm font-semibold transition-colors duration-200",
                                            isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                                        )}>
                                            {phase.title}
                                        </span>
                                        <span className="block text-xs text-gray-400 font-medium mt-0.5">
                                            {phase.duration}
                                        </span>
                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
