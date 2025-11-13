
import React from 'react';
import { DigitalBadge } from '../types';

interface BadgeCardProps {
  badge: DigitalBadge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="w-40 h-40 mb-4">
        <img src={badge.imageUrl} alt={badge.title} className="w-full h-full object-cover rounded-full border-4 border-blue-200" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{badge.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{badge.course}</p>
    </div>
  );
};

export default BadgeCard;
