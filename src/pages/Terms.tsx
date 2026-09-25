import { Scale, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Terms() {
  const { language, dir } = useLanguage();
  const ar = language === 'ar';
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" dir={dir}>
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <header className="bg-gray-900 px-8 py-12 text-center text-white">
          <Scale className="w-12 h-12 mx-auto mb-5" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{ar ? 'شروط الاستخدام' : 'Terms of Use'}</h1>
          <p className="text-gray-300">{ar ? 'آخر تحديث: 25 سبتمبر 2026' : 'Last updated: September 25, 2026'}</p>
        </header>
        <div className="p-8 md:p-12 space-y-9 text-gray-700 leading-relaxed">
          <section><h2 className="legal-heading"><CheckCircle aria-hidden="true" />{ar ? 'استخدام الموقع' : 'Using the site'}</h2><p>{ar ? 'باستخدام StartInProduct فإنك توافق على استخدام المحتوى بطريقة قانونية ومسؤولة. المسارات والاختبار أدوات إرشادية وتعليمية ولا تضمن الحصول على وظيفة أو نتيجة مهنية محددة.' : 'By using StartInProduct, you agree to use its content lawfully and responsibly. Learning paths and assessment results are educational guidance and do not guarantee employment or a particular career outcome.'}</p></section>
          <section><h2 className="legal-heading"><Scale aria-hidden="true" />{ar ? 'المحتوى والملكية' : 'Content and ownership'}</h2><p>{ar ? 'محتوى StartInProduct الأصلي محمي بحقوق الملكية الفكرية. يمكنك استخدامه للتعلم الشخصي، لكن لا يجوز إعادة نشره أو بيعه دون إذن. تظل المصادر الخارجية ملكًا لأصحابها وتخضع لشروطهم.' : 'Original StartInProduct content is protected by intellectual-property law. You may use it for personal learning, but may not republish or sell it without permission. External resources remain the property of their owners and are governed by their terms.'}</p></section>
          <section><h2 className="legal-heading"><AlertCircle aria-hidden="true" />{ar ? 'الروابط ودقة المعلومات' : 'Links and accuracy'}</h2><p>{ar ? 'نبذل جهدًا لمراجعة المصادر، لكن الأسعار والتوفر والمحتوى الخارجي قد تتغير. تحقق من تفاصيل المصدر قبل التسجيل أو الدفع. استخدامك للمواقع الخارجية يكون على مسؤوليتك.' : 'We review resources with care, but external prices, availability, and content may change. Verify details with the provider before registering or paying. You use external websites at your own discretion.'}</p></section>
          <section><h2 className="legal-heading"><Mail aria-hidden="true" />{ar ? 'تواصل معنا' : 'Contact us'}</h2><p>{ar ? 'للأسئلة المتعلقة بهذه الشروط، راسلنا على' : 'For questions about these terms, email'} <a className="text-blue-700 underline" href="mailto:mmameen89@gmail.com">mmameen89@gmail.com</a>.</p></section>
        </div>
      </article>
    </div>
  );
}
