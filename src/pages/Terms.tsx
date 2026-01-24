import { Scale, CheckCircle, AlertCircle, FileText, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Terms() {
  const { dir } = useLanguage();
  
  // Last updated date
  const lastUpdated = "December 12, 2025";

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" dir={dir}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 px-8 py-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText size={24} className="text-gray-900" />
              Agreement to Terms
            </h2>
            <p className="mb-4">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and StartInProduct ("we," "us," or "our"), concerning your access to and use of the StartInProduct website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms of service, then you are expressly prohibited from using the site and you must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CheckCircle size={24} className="text-gray-900" />
              Intellectual Property Rights
            </h2>
            <p className="mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertCircle size={24} className="text-gray-900" />
              User Representations
            </h2>
            <p className="mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Mail size={24} className="text-gray-900" />
              Contact Us
            </h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
