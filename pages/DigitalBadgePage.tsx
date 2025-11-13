
import React from 'react';
import { BADGES } from '../constants';
import BadgeCard from '../components/BadgeCard';

const DigitalBadgePage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">디지털 배지</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    AID 30+ 프로그램의 학습 성과를 증명하는 디지털 배지 목록입니다.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                {BADGES.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                ))}
            </div>
        </div>
    );
};

export default DigitalBadgePage;
