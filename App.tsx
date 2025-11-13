
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CurriculumPage from './pages/CurriculumPage';
import DigitalBadgePage from './pages/DigitalBadgePage';
import CommunityPage from './pages/CommunityPage';
import InquiryPage from './pages/InquiryPage';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState('home');
    const [activeSubMenu, setActiveSubMenu] = useState('');

    const handleSetActivePage = (pageId: string, subMenuId?: string) => {
        setActivePage(pageId);
        if (subMenuId) {
            setActiveSubMenu(subMenuId);
        } else {
            // Set a default submenu if the main menu is clicked
            const navItem = NAV_ITEMS.find(item => item.id === pageId);
            if (navItem?.subMenus && navItem.subMenus.length > 0) {
                setActiveSubMenu(navItem.subMenus[0].id);
            } else {
                setActiveSubMenu('');
            }
        }
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        // Set default submenu for the initial page load if needed
        handleSetActivePage('home');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage />;
            case 'about':
                return <AboutPage activeSubMenu={activeSubMenu} />;
            case 'curriculum':
                return <CurriculumPage activeSubMenu={activeSubMenu} />;
            case 'badges':
                return <DigitalBadgePage />;
            case 'community':
                return <CommunityPage activeSubMenu={activeSubMenu} />;
            case 'inquiry':
                return <InquiryPage activeSubMenu={activeSubMenu} />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage={activePage} setActivePage={handleSetActivePage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
