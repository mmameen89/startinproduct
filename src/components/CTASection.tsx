import { Button } from './Button';
import { Calendar, Mail } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  color?: 'blue' | 'purple' | 'green' | 'rose';
  variant?: 'default' | 'colored';
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  color = 'blue',
  variant = 'default',
}: CTASectionProps) {
  const styles = {
    default: 'bg-white/40 border-white/40',
    colored: {
      blue: 'bg-blue-50/40 border-blue-100/50',
      purple: 'bg-purple-50/40 border-purple-100/50',
      green: 'bg-green-50/40 border-green-100/50',
      rose: 'bg-rose-50/40 border-rose-100/50',
    },
  };

  const themeClasses = variant === 'default' 
    ? styles.default 
    : styles.colored[color];

  const getIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('book') || t.includes('session')) return Calendar;
    if (t.includes('contact') || t.includes('email')) return Mail;
    return null;
  };

  const PrimaryIcon = getIcon(primaryButtonText);
  const SecondaryIcon = secondaryButtonText ? getIcon(secondaryButtonText) : null;

  return (
    <section className={`
      relative overflow-hidden
      ${themeClasses} backdrop-blur-xl border
      rounded-[48px] p-12 sm:p-16 text-center
      shadow-2xl shadow-gray-200/20
    `}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{title}</h2>
        {description && <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" color={color} size="lg" onClick={onPrimaryClick}>
            {PrimaryIcon && <PrimaryIcon size={20} className="inline mr-2" />}
            {primaryButtonText}
          </Button>
          {secondaryButtonText && onSecondaryClick && (
            <Button variant="secondary" color={color} size="lg" onClick={onSecondaryClick}>
              {SecondaryIcon && <SecondaryIcon size={20} className="inline mr-2" />}
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
