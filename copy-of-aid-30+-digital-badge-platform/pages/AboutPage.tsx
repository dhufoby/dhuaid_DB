
import React from 'react';

interface AboutPageProps {
  activeSubMenu: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ activeSubMenu }) => {
    const renderContent = () => {
        switch (activeSubMenu) {
            case 'greeting':
                return (
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">인사말</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            대구한의대학교 AID 30+ 프로그램에 오신 것을 환영합니다.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            급변하는 디지털 시대에 발맞추어, 우리는 AI와 디지털 기술을 통해 개인의 성장을 돕고 산업의 혁신을 이끌어갈 인재를 양성하고자 합니다. 본 프로그램은 단순한 지식 전달을 넘어, 학습자가 스스로 문제를 발견하고 해결하는 창의적인 전문가로 거듭날 수 있도록 최상의 교육 환경을 제공할 것입니다. 여러분의 빛나는 미래를 향한 여정에 AID 30+ 프로그램이 든든한 동반자가 되겠습니다. 감사합니다.
                        </p>
                    </div>
                );
            case 'introduction':
                return (
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">사업소개</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            본 사업은 국가평생교육진흥원의 지원을 받아 대구한의대학교에서 운영하는 재직자 대상 AI·디지털(AID) 역량 강화 프로그램입니다.
                        </p>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-xl mb-2">국가평생교육진흥원 연계</h3>
                                <p className="text-gray-600 mb-2">국가 차원의 평생교육 체계와 연계하여 공신력 있는 교육을 제공합니다.</p>
                                <a href="https://www.nile.or.kr/usr/wap/detail.do?app=13309&seq=29&lang=ko" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    관련 페이지 바로가기 <i className="fas fa-external-link-alt text-xs ml-1"></i>
                                </a>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-xl mb-2">대구한의대학교 주관</h3>
                                <p className="text-gray-600 mb-2">지역 산업의 특성과 요구를 반영한 맞춤형 교육과정을 개발하고 운영합니다.</p>
                                <a href="https://www.dhu.ac.kr/pages/sub.htm?nav_code=dhu1755843061" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    대학 사업소개 페이지 바로가기 <i className="fas fa-external-link-alt text-xs ml-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div>인사말 또는 사업소개를 선택해주세요.</div>;
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 border-b-4 border-blue-500 pb-4">사업소개</h1>
            {renderContent()}
        </div>
    );
};

export default AboutPage;
