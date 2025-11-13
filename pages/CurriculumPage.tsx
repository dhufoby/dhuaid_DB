
import React from 'react';
import { COURSES } from '../constants';
import Card from '../components/Card';

interface CurriculumPageProps {
  activeSubMenu: string;
}

const CurriculumPage: React.FC<CurriculumPageProps> = ({ activeSubMenu }) => {
    const renderContent = () => {
        switch (activeSubMenu) {
            case 'intensive':
                return (
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">AID 30+ 집중캠프</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            AID 30+ 집중캠프는 30시간 이상의 집중 교육을 통해 AI 및 디지털 분야의 핵심 실무 역량을 단기간에 완성하는 프로그램입니다. 프로젝트 기반 학습(PBL)을 통해 실제 산업 현장의 문제를 해결하며, 협업 능력과 실무 적용 능력을 동시에 기를 수 있습니다.
                        </p>
                        <h3 className="font-semibold text-xl mb-2">주요 교육과정</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>머신러닝 모델 개발 및 평가</li>
                            <li>빅데이터 분석 및 시각화</li>
                            <li>클라우드 기반 AI 서비스 구축</li>
                            <li>디지털 전환 전략 수립</li>
                        </ul>
                        <a href="https://gamjaoppa.github.io/AID30-clean/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                            자세히 보기 <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                );
            case 'bundled':
                return (
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">AID 묶음강좌</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            AID 묶음강좌는 학습자의 필요와 수준에 맞춰 다양한 AI 및 디지털 강좌를 선택하여 수강할 수 있는 유연한 교육 과정입니다. K-MOOC 플랫폼과 연계하여 언제 어디서든 양질의 교육 콘텐츠를 학습할 수 있으며, 기초부터 심화까지 체계적인 학습이 가능합니다.
                        </p>
                        <h3 className="font-semibold text-xl mb-2">대표 강좌</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>파이썬 프로그래밍 기초</li>
                            <li>인공지능 개론</li>
                            <li>데이터 과학을 위한 통계</li>
                            <li>블록체인 기술의 이해와 활용</li>
                        </ul>
                        <a href="https://www.kmooc.kr/view/course/institution/dhuk" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                           K-MOOC 링크로 이동 <i className="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                );
            case 'all-courses':
                 return (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">전체 교육과정</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                           {COURSES.map(course => (
                                <Card 
                                    key={course.id}
                                    title={course.title}
                                    description={course.description}
                                    imageUrl={course.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                );
            default:
                return <div>교육과정 메뉴를 선택해주세요.</div>;
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 border-b-4 border-blue-500 pb-4">교육과정</h1>
            {renderContent()}
        </div>
    );
};

export default CurriculumPage;
