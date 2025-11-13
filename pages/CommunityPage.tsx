
import React from 'react';
import { NEWS, ANNOUNCEMENTS } from '../constants';

interface CommunityPageProps {
  activeSubMenu: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ activeSubMenu }) => {
    const renderContent = () => {
        switch (activeSubMenu) {
            case 'news':
                return (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">교육 소식</h2>
                        <div className="space-y-6">
                            {NEWS.map(article => (
                                <div key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{article.title}</h3>
                                    <p className="text-gray-600">{article.excerpt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'announcements':
                return (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">공지사항</h2>
                        <div className="bg-white rounded-lg shadow-md">
                           <ul className="divide-y divide-gray-200">
                            {ANNOUNCEMENTS.map(announcement => (
                                <li key={announcement.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                                    <p className="text-sm text-gray-500 mb-1">{announcement.date}</p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{announcement.title}</h3>
                                    <p className="text-gray-600">{announcement.content}</p>
                                </li>
                            ))}
                           </ul>
                        </div>
                    </div>
                );
            default:
                return <div>커뮤니티 메뉴를 선택해주세요.</div>;
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 border-b-4 border-blue-500 pb-4">커뮤니티</h1>
            {renderContent()}
        </div>
    );
};

export default CommunityPage;
