import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    path: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', path: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div dir={dir}>
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Mail size={32} className="text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('contact.subtitle')}
              </p>

              {/* Alternative Contact Methods */}
              <div className="mt-12">
                <p className="text-gray-900 font-medium mb-4">{t('contact.direct')}</p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:mmameen89@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                    <span>mmameen89@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/201067780600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                    </div>
                    <span>WhatsApp: +20 106 778 0600</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
                  <p className="text-gray-600 mb-8">
                    {t('contact.success.desc')}
                  </p>
                  <Button variant="primary" color="green" onClick={() => onNavigate('/')}>
                    {t('contact.success.back')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder={t('contact.form.name')}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Path Selection */}
                  <div>
                    <label htmlFor="path" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.form.path')} *
                    </label>
                    <select
                      id="path"
                      name="path"
                      value={formData.path}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                    >
                      <option value="">{t('contact.form.selectPath')}</option>
                      <option value="product-management">{t('nav.productManagement')}</option>
                      <option value="product-design">{t('nav.productDesign')}</option>
                      <option value="user-research">{t('nav.userResearch')}</option>
                      <option value="general">{t('contact.form.general')}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" color="blue" className="w-full justify-center">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}