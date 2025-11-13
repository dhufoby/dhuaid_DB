
import React from 'react';
import { COURSES } from '../constants';
import Card from '../components/Card';

const HomePage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white h-[60vh] flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center p-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">AI·디지털(AID) 집중과정</h1>
                    <p className="text-lg md:text-2xl mb-8">대구한의대학교에서 미래를 선도할 디지털 인재를 양성합니다.</p>
                    <a href="https://www.dhu.ac.kr/pages/sub.htm?nav_code=dhu1755843061" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg">
                        사업 페이지 바로가기 <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </section>
            
            {/* Program Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">프로그램 소개</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">AID 30+ 프로그램은 최신 AI 기술과 디지털 전환에 필요한 핵심 역량을 단기간에 집중적으로 학습할 수 있도록 설계된 전문 교육 과정입니다.</p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-gray-100 p-8 rounded-lg">
                           <i className="fas fa-laptop-code text-blue-500 text-4xl mb-4"></i>
                           <h3 className="text-2xl font-bold mb-2">실무 중심 교육</h3>
                           <p className="text-gray-600">이론에만 그치지 않고, 실제 산업 현장에서 마주할 문제들을 해결하는 프로젝트 기반의 실습을 통해 실무 역량을 극대화합니다.</p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg">
                           <i className="fas fa-certificate text-blue-500 text-4xl mb-4"></i>
                           <h3 className="text-2xl font-bold mb-2">디지털 배지 인증</h3>
                           <p className="text-gray-600">과정 이수 시, 국제 표준 규격의 디지털 배지를 발급하여 학습 성과를 공식적으로 증명하고 전 세계와 공유할 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Class List Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">대표 클래스</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {COURSES.slice(0, 2).map(course => (
                            <Card 
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                imageUrl={course.imageUrl}
                                buttonText="자세히 보기"
                                onButtonClick={() => {}}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;