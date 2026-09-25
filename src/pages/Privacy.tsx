import { Shield, Lock, Eye, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Privacy() {
  const { language, dir } = useLanguage();
  const ar = language === 'ar';
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" dir={dir}>
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <header className="bg-blue-700 px-8 py-12 text-center text-white">
          <Shield className="w-12 h-12 mx-auto mb-5" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{ar ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
          <p className="text-blue-100">{ar ? 'آخر تحديث: 25 سبتمبر 2026' : 'Last updated: September 25, 2026'}</p>
        </header>
        <div className="p-8 md:p-12 space-y-9 text-gray-700 leading-relaxed">
          <section><h2 className="legal-heading"><Lock aria-hidden="true" />{ar ? 'نطاق هذه السياسة' : 'Scope of this policy'}</h2><p>{ar ? 'يوفر StartInProduct مسارات تعلم ومصادر مهنية واختبارًا للمسار المهني. لا ينشئ الموقع حسابات مستخدمين ولا يعالج مدفوعات ولا يخزن إجابات الاختبار.' : 'StartInProduct provides learning paths, career resources, and a career assessment. The website does not create user accounts, process payments, or store assessment answers.'}</p></section>
          <section><h2 className="legal-heading"><Eye aria-hidden="true" />{ar ? 'البيانات والتواصل' : 'Data and contact'}</h2><p>{ar ? 'نموذج التواصل يفتح تطبيق البريد على جهازك برسالة جاهزة. لا تُرسل البيانات إلى StartInProduct ولا تُخزن على الموقع إلا عندما تختار إرسال الرسالة من تطبيق بريدك. قد يسجل مزود الاستضافة بيانات تقنية أساسية مثل عنوان IP ونوع المتصفح لأغراض الأمان والتشغيل.' : 'The contact form opens your device’s email application with a prepared message. The information is not sent to StartInProduct or stored by this website unless you choose to send it from your email application. The hosting provider may record basic technical information, such as IP address and browser type, for security and operation.'}</p></section>
          <section><h2 className="legal-heading"><Lock aria-hidden="true" />{ar ? 'الخدمات الخارجية' : 'External services'}</h2><p>{ar ? 'يتضمن الموقع روابط لمصادر تعليمية وLinkedIn وWhatsApp وADPList. تخضع زيارتك لهذه الخدمات لسياسات الخصوصية الخاصة بها. لا نبيع بياناتك الشخصية.' : 'The site links to learning resources, LinkedIn, WhatsApp, and ADPList. Your use of those services is governed by their privacy policies. We do not sell personal information.'}</p></section>
          <section><h2 className="legal-heading"><Mail aria-hidden="true" />{ar ? 'تواصل معنا' : 'Contact us'}</h2><p>{ar ? 'لأي استفسار عن الخصوصية، راسلنا على' : 'For privacy questions, email'} <a className="text-blue-700 underline" href="mailto:mmameen89@gmail.com">mmameen89@gmail.com</a>.</p></section>
        </div>
      </article>
    </div>
  );
}
