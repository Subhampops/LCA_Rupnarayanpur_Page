import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12 bg-gradient-to-r from-violet-600 to-blue-500">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Lalani Computer Academy Rupnarayanpur, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
            
            <h2>2. Enrollment and Registration</h2>
            <p>
              To enroll in any course offered by Lalani Computer Academy, students must complete the registration process and provide accurate personal information. The Academy reserves the right to verify the information provided and may reject applications that contain false or misleading information.
            </p>
            
            <h2>3. Fees and Payment</h2>
            <p>
              Course fees must be paid according to the payment schedule provided at the time of enrollment. The Academy reserves the right to modify its fee structure, though changes will not affect students who have already paid in full. No refunds will be provided after the commencement of classes except in extraordinary circumstances, which will be evaluated on a case-by-case basis.
            </p>
            
            <h2>4. Attendance and Conduct</h2>
            <p>
              Regular attendance is required for all courses. Students are expected to maintain a minimum attendance level as specified in the course guidelines. The Academy reserves the right to take disciplinary action against students who engage in disruptive behavior, academic dishonesty, or any conduct that violates the Academy's code of ethics.
            </p>
            
            <h2>5. Intellectual Property</h2>
            <p>
              All course materials, including but not limited to lecture notes, presentations, videos, and software provided by Lalani Computer Academy are protected by intellectual property rights. Students are not permitted to reproduce, distribute, or use these materials for any purpose other than personal study without prior written consent from the Academy.
            </p>
            
            <h2>6. Certification</h2>
            <p>
              Certificates will be issued only to students who successfully complete their courses and meet all assessment criteria. The Academy reserves the right to withhold certificates from students who have not fulfilled all requirements, including attendance, assignments, and fee payments.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              While Lalani Computer Academy strives to provide high-quality education and training, we make no guarantees regarding employment opportunities after course completion. The Academy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              Lalani Computer Academy reserves the right to modify these Terms and Conditions at any time. Students will be notified of significant changes, and continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in the district where the Academy is located.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms and Conditions, please contact us at the address provided on the Contact Us page.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsPage;