import { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Download, Search, Palette, Lightbulb, CheckCircle, Calendar, Share2, PenTool } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useLanguage } from '../context/LanguageContext';
import { quizData } from '../data/quizData';

interface QuizProps {
  onNavigate: (path: string) => void;
}

type Answer = 'A' | 'B' | 'C' | 'D' | null;

export function Quiz({ onNavigate }: QuizProps) {
  const { t, language, dir } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1-20 = questions, 21 = results
  const [answers, setAnswers] = useState<Answer[]>(Array(20).fill(null));

  const data = quizData[language];
  const questions = data.questions;

  const handleAnswerSelect = (questionIndex: number, answer: Answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const getQuizResult = () => {
    const filteredAnswers = answers.filter(a => a !== null) as ('A' | 'B' | 'C' | 'D')[];
    if (filteredAnswers.length === 0) return null;

    const counts = { A: 0, B: 0, C: 0, D: 0 };
    filteredAnswers.forEach(answer => {
      counts[answer]++;
    });

    return counts;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep <= 20) {
      if (answers[currentStep - 1] !== null) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render logic based on step
  if (currentStep === 0) {
    return <QuizIntro onNext={handleNext} />;
  }

  if (currentStep >= 1 && currentStep <= 20) {
    return (
      <QuizQuestion
        step={currentStep}
        totalSteps={20}
        question={questions[currentStep - 1]}
        selectedAnswer={answers[currentStep - 1]}
        onAnswer={(answer) => handleAnswerSelect(currentStep - 1, answer)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    );
  }

  if (currentStep === 21) {
    return (
      <QuizResults
        answers={answers}
        onNavigate={onNavigate}
        getQuizResult={getQuizResult}
      />
    );
  }

  return null;
}

// --- Sub Components ---

function QuizIntro({ onNext }: { onNext: () => void }) {
  const { t, language, dir } = useLanguage();

  const handleShare = async () => {
    const url = window.location.href.split('?')[0].split('#')[0];
    const title = 'StartInProduct Career Assessment';
    const text = language === 'en'
      ? 'I just took the StartInProduct Career Assessment to find my perfect path in tech! Take it yourself here:'
      : 'أنا لسه مخلص اختبار تحديد المسار المهني من StartInProduct عشان أعرف أنسب مجال ليا في التيك! جربه من هنا:';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      copyToClipboard(url, language);
    }
  };

  return (
    <div className="min-h-screen" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Logo size={48} />
            <span className="text-gray-900 font-bold text-2xl">StartInProduct</span>
          </div>
          <h1 className="text-gray-900 mb-6">{t('choosePath.assessment.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('choosePath.assessment.desc')}
          </p>
        </div>

        <div className="ios-card rounded-[2rem] p-8 mb-8">
          <h2 className="text-gray-900 mb-6">
            {language === 'en' ? 'What to Expect:' : 'توقع إيه من الاختبار:'}
          </h2>
          <div className="space-y-4">
            <FeatureItem icon={CheckCircle} title={language === 'en' ? '20 carefully designed questions' : '20 سؤال متصممين بعناية'} desc={language === 'en' ? 'Each question assesses different aspects of your work preferences and natural strengths' : 'كل سؤال بيقيم جوانب مختلفة من تفضيلاتك في الشغل ونقاط قوتك الطبيعية'} />
            <FeatureItem icon={CheckCircle} title={language === 'en' ? 'Personalized results' : 'نتايج شخصية'} desc={language === 'en' ? 'Get a detailed breakdown of your alignment with each career path' : 'خد تحليل مفصل لمدى توافقك مع كل مسار مهني'} />
            <FeatureItem icon={CheckCircle} title={language === 'en' ? 'Downloadable report' : 'تقرير قابل للتحميل'} desc={language === 'en' ? 'Save your results and answers as a PDF or document for future reference' : 'احفظ نتايجك وإجاباتك كملف نصي للرجوع ليه في المستقبل'} />
            <FeatureItem icon={CheckCircle} title={language === 'en' ? 'Takes about 10 minutes' : 'بياخد حوالي 10 دقايق'} desc={language === 'en' ? 'Answer honestly—there are no right or wrong answers' : 'جاوب بصراحة — مفيش إجابات صح وغلط'} />
          </div>
        </div>

        <div className="text-center flex flex-col items-center gap-4">
          <Button variant="primary" color="blue" onClick={onNext}>
            {t('choosePath.assessment.button')}
            <ArrowRight size={20} className={`inline ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
          </Button>

          <button onClick={handleShare} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
            <Share2 size={16} />
            {language === 'en' ? 'Share with a friend' : 'شارك الاختبار مع صديق'}
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={24} className="text-blue-600 flex-shrink-0" />
      <div>
        <p className="text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function QuizQuestion({
  step,
  totalSteps,
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious
}: {
  step: number;
  totalSteps: number;
  question: any;
  selectedAnswer: Answer;
  onAnswer: (a: Answer) => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const { t, language, dir } = useLanguage();

  // Memoize options to prevent re-shuffling on state updates
  const displayedOptions = useMemo(() => {
    if (!question) return [];
    return [...question.options].sort(() => Math.random() - 0.5);
  }, [question]);

  const progress = (step / totalSteps) * 100;

  if (!question) return <div>Error loading question</div>;

  return (
    <div className="min-h-screen" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              {language === 'en' ? `Question ${step} of ${totalSteps}` : `سؤال ${step} من ${totalSteps}`}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="ios-card rounded-[2rem] p-8 mb-8">
          <h2 className="text-gray-900 mb-8 text-xl font-bold tracking-tight">{question.question}</h2>
          <div className="space-y-4">
            {displayedOptions.map((option: any) => (
              <button
                key={option.value}
                onClick={() => onAnswer(option.value as Answer)}
                className={`w-full text-left rtl:text-right p-6 rounded-2xl border transition-all duration-300 group ${selectedAnswer === option.value
                  ? 'bg-blue-600 border-transparent shadow-lg shadow-blue-500/25 scale-[1.01]'
                  : 'bg-white/40 border-black/5 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${selectedAnswer === option.value
                    ? 'border-white/30 bg-white/20 text-white'
                    : 'border-gray-400 group-hover:border-blue-500'
                    }`}>
                    {selectedAnswer === option.value && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium text-lg ${selectedAnswer === option.value ? 'text-white' : 'text-gray-900 group-hover:text-black'}`}>
                      {option.text}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            color="blue"
            onClick={onPrevious}
            className={step === 1 ? 'invisible' : ''}
          >
            <ArrowLeft size={20} className={`inline ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {language === 'en' ? 'Previous' : 'السابق'}
          </Button>
          <Button
            variant="primary"
            color="blue"
            onClick={onNext}
            className={selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}
          >
            {step === totalSteps
              ? (language === 'en' ? 'See Results' : 'شوف النتيجة')
              : (language === 'en' ? 'Next' : 'التالي')}
            <ArrowRight size={20} className={`inline ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function QuizResults({ answers, onNavigate, getQuizResult }: { answers: any[]; onNavigate: (path: string) => void; getQuizResult: () => any }) {
  const { t, language, dir } = useLanguage();
  const counts = getQuizResult();

  const getPrimaryPath = () => {
    if (!counts) return null;
    const maxCount = Math.max(counts.A, counts.B, counts.C, counts.D);
    if (counts.C === maxCount) return 'C';
    if (counts.B === maxCount) return 'B';
    if (counts.D === maxCount) return 'D';
    return 'A';
  };

  const primaryPath = getPrimaryPath();
  const data = quizData[language];

  if (!counts || !primaryPath) return null;

  const result = data.results[primaryPath as 'A' | 'B' | 'C' | 'D'];

  const icons: any = { A: Search, B: Palette, C: Lightbulb, D: PenTool };
  const ResultIcon = icons[primaryPath];

  const handleShare = async () => {
    const url = window.location.href.split('?')[0].split('#')[0];
    const title = 'StartInProduct Career Assessment';
    const text = language === 'en'
      ? 'I just took the StartInProduct Career Assessment to find my perfect path in tech! Take it yourself here:'
      : 'أنا لسه مخلص اختبار تحديد المسار المهني من StartInProduct عشان أعرف أنسب مجال ليا في التيك! جربه من هنا:';

    if (navigator.share) {
      try { await navigator.share({ title, text, url }); }
      catch (error) { console.log('Error sharing:', error); }
    } else {
      copyToClipboard(url, language);
    }
  };

  const downloadAsPDF = () => {
    // Re-implemented download logic briefly or rely on text-file generation for robustness
    const enData = quizData['en'];
    const pathNames = { A: 'User Research', B: 'Product Design', C: 'Product Management', D: 'UX Writing' };

    let content = `STARTINPRODUCT - CAREER PATH ASSESSMENT RESULTS\n\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n\n`;
    content += `YOUR RESULTS:\n`;
    content += `Product Management: ${counts.C}/20\nProduct Design: ${counts.B}/20\nUser Research: ${counts.A}/20\nUX Writing: ${counts.D}/20\n\n`;
    content += `RECOMMENDED PATH: ${pathNames[primaryPath as 'A' | 'B' | 'C' | 'D']}\n\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `StartInProduct-Results.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBookSession = () => {
    window.open('https://adplist.org/mentors/mohamed-ameen-UjZr', '_blank');
  };

  return (
    <div className="min-h-screen" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${primaryPath === 'A' ? 'bg-green-100' :
            primaryPath === 'B' ? 'bg-purple-100' :
              primaryPath === 'C' ? 'bg-blue-100' : 'bg-rose-100'
            }`}>
            <ResultIcon size={40} className={
              primaryPath === 'A' ? 'text-green-600' :
                primaryPath === 'B' ? 'text-purple-600' :
                  primaryPath === 'C' ? 'text-blue-600' : 'text-rose-600'
            } />
          </div>
          <h1 className="text-gray-900 mb-4">{language === 'en' ? 'Your Results Are Ready!' : 'نتايجك جاهزة!'}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? "Based on your responses, we've identified your best career path match."
              : "بناءً على إجاباتك، حددنا أفضل مسار مهني يناسبك."}
          </p>
        </div>

        {/* Reuse existing result UI components or simplify for this block */}
        {/* Recommended Path Card */}
        <div className={`rounded-[2rem] p-8 border mb-8 bg-gradient-to-br shadow-lg ${primaryPath === 'A' ? 'from-green-50 to-white/50 border-green-100' :
          primaryPath === 'B' ? 'from-purple-50 to-white/50 border-purple-100' :
            primaryPath === 'C' ? 'from-blue-50 to-white/50 border-blue-100' :
              'from-rose-50 to-white/50 border-rose-100'
          }`}>
          <h2 className="text-gray-900 mb-4 font-bold text-xl">{result.title}</h2>
          <p className="text-gray-600 mb-6 font-medium">{result.subtitle}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">{result.description}</p>
          <div className="mb-6">
            <h3 className="text-gray-900 mb-3 font-bold">{language === 'en' ? 'Your Key Strengths:' : 'نقاط قوتك الأساسية:'}</h3>
            <ul className="space-y-2">
              {result.strengths.map((strength: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5 opacity-70" />
                  <span className="text-gray-600">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button variant="primary" color={result.color as any} onClick={() => onNavigate(result.path)}>
            {language === 'en' ? 'View Learning Path' : 'شوف الخريطة'}
            <ArrowRight size={20} className={`inline ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
          </Button>
        </div>

        {/* Download/Share Actions */}
        <div className="ios-card rounded-[2rem] p-8 mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" color="blue" onClick={downloadAsPDF}>
            <Download size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
            {language === 'en' ? 'Download Results' : 'تحميل النتيجة'}
          </Button>
          <Button variant="outline" color="blue" onClick={handleShare}>
            <Share2 size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
            {language === 'en' ? 'Share' : 'مشاركة'}
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="ghost" className="text-gray-500 hover:text-gray-900" onClick={() => onNavigate('/')}>
            {t('contact.success.back')}
          </Button>
        </div>
      </div>
    </div>
  );
}

function copyToClipboard(text: string, language: string) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(language === 'en' ? 'Link copied!' : 'تم نسخ الرابط!'))
      .catch(() => toast.error('Failed to copy'));
  } else {
    toast.error('Copy not supported on this device');
  }
}
