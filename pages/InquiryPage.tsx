
import React, { useState, useCallback } from 'react';
import { FAQ } from '../types';
import { generateFaqs } from '../services/geminiService';
import FAQItem from '../components/FAQItem';

interface InquiryPageProps {
  activeSubMenu: string;
}

const InquiryPage: React.FC<InquiryPageProps> = ({ activeSubMenu }) => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFaqs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setFaqs([]);
    try {
      const generated = await generateFaqs();
      setFaqs(generated);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    switch (activeSubMenu) {
      case 'faq':
        return (
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">자주 묻는 질문 (FAQ)</h2>
              <button
                onClick={handleGenerateFaqs}
                disabled={isLoading}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    <span>생성 중...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic mr-2"></i>
                    <span>AI로 최신 FAQ 생성하기</span>
                  </>
                )}
              </button>
            </div>
            {error && <div className="text-red-500 bg-red-100 p-4 rounded-md mb-4">{error}</div>}
            
            <div className="mt-6">
                {faqs.length > 0 ? (
                    faqs.map((faq, index) => <FAQItem key={index} faq={faq} />)
                ) : (
                    !isLoading && <p className="text-gray-500 text-center py-8">버튼을 클릭하여 AI로 FAQ를 생성해보세요.</p>
                )}
            </div>
          </div>
        );
      case 'one-on-one':
        return (
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">1:1 문의</h2>
            <p className="text-lg text-gray-600 mb-8">
              더 궁금한 점이 있으신가요? <br/>
              아래 버튼을 클릭하여 문의를 남겨주시면 신속하게 답변해드리겠습니다.
            </p>
            <a 
              href="#" // Placeholder for the actual link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300"
            >
              대구한의대 AID30+ 1:1 문의하기 <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        );
      default:
        return <div>문의 메뉴를 선택해주세요.</div>;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 border-b-4 border-blue-500 pb-4">온라인 문의</h1>
      {renderContent()}
    </div>
  );
};

export default InquiryPage;
