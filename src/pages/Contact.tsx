import { useState } from 'react';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps { onNavigate: (path: string) => void; }

export function Contact({ onNavigate }: ContactProps) {
  const { t, language, dir } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', path: '', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`StartInProduct inquiry: ${formData.path || 'General'} — ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPath: ${formData.path}\n\n${formData.message}`);
    window.location.href = `mailto:mmameen89@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(current => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <div dir={dir}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"><Mail size={32} className="text-blue-700" aria-hidden="true" /></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('contact.title')}</h1>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{t('contact.subtitle')}</p>
            <div className="mt-10 space-y-4">
              <p className="text-gray-900 font-bold">{t('contact.direct')}</p>
              <a href="mailto:mmameen89@gmail.com" className="min-h-11 flex items-center gap-3 text-gray-700 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-lg">
                <span className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700"><Mail size={20} aria-hidden="true" /></span>
                <span dir="ltr">mmameen89@gmail.com</span>
              </a>
              <a href="https://wa.me/201067780600" target="_blank" rel="noopener noreferrer" className="min-h-11 flex items-center gap-3 text-gray-700 hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 rounded-lg">
                <span className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center text-green-700"><MessageCircle size={20} aria-hidden="true" /></span>
                <span dir="ltr">WhatsApp: +20 106 778 0600</span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-gray-600 bg-blue-50 rounded-xl p-4">
                {language === 'en' ? 'Submitting opens your email app with this message prepared. Review it, then press Send in your email app.' : 'عند المتابعة سيفتح تطبيق البريد الإلكتروني والرسالة جاهزة. راجعها ثم اضغط إرسال من تطبيق البريد.'}
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.name')} *</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.email')} *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="path" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.path')} *</label>
                <select id="path" name="path" value={formData.path} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                  <option value="">{t('contact.form.selectPath')}</option>
                  <option value="Product Management">{t('nav.productManagement')}</option>
                  <option value="Product Design">{t('nav.productDesign')}</option>
                  <option value="User Research">{t('nav.userResearch')}</option>
                  <option value="UX Writing">{t('nav.uxWriting')}</option>
                  <option value="General inquiry">{t('contact.form.general')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.form.message')} *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required minLength={10} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y" />
              </div>
              <Button type="submit" variant="primary" color="blue" className="w-full min-h-12">
                <ExternalLink size={18} aria-hidden="true" className={dir === 'rtl' ? 'ml-2' : 'mr-2'} />
                {language === 'en' ? 'Open email app' : 'فتح تطبيق البريد'}
              </Button>
              <p className="text-xs text-gray-600 text-center">
                {language === 'en' ? 'Your details are not stored by this website. ' : 'لا يخزن هذا الموقع بياناتك. '}
                <button type="button" onClick={() => onNavigate('/privacy')} className="text-blue-700 underline underline-offset-2 min-h-6">{t('footer.privacyPolicy')}</button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
