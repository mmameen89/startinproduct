import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Privacy() {
  const { dir } = useLanguage();
  
  // Last updated date
  const lastUpdated = "December 12, 2025";

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" dir={dir}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock size={24} className="text-blue-600" />
              Introduction
            </h2>
            <p className="mb-4">
              At StartInProduct, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Eye size={24} className="text-blue-600" />
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong className="text-gray-900">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
              </li>
              <li>
                <strong className="text-gray-900">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText size={24} className="text-blue-600" />
              Use of Your Information
            </h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Create and manage your account.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Mail size={24} className="text-blue-600" />
              Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900">StartInProduct</p>
              <p className="mt-1">Email: mmameen89@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
