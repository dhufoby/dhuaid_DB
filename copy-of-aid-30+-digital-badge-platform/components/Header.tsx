
import React, { useState, useRef, useEffect } from 'react';
import { NavItem, SubMenuItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  activePage: string;
  setActivePage: (pageId: string, subMenuId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleNavClick = (item: NavItem) => {
    if (item.subMenus) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      setActivePage(item.id);
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleSubMenuClick = (mainMenuId: string, subMenu: SubMenuItem) => {
    setActivePage(mainMenuId, subMenu.id);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => setActivePage('home')}>
          AID 30+
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item)}
                className={`text-lg font-medium transition duration-300 ${activePage === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.name}
                {item.subMenus && <i className="fas fa-chevron-down text-xs ml-1"></i>}
              </button>
              {item.subMenus && openDropdown === item.id && (
                <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  {item.subMenus.map((subMenu) => (
                    <a
                      key={subMenu.id}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleSubMenuClick(item.id, subMenu); }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {subMenu.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-600`}></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 absolute w-full shadow-lg">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="text-center">
              <button onClick={() => handleNavClick(item)} className="w-full py-2 text-lg font-medium text-gray-700 hover:bg-blue-50">
                {item.name}
              </button>
              {item.subMenus && openDropdown === item.id && (
                <div className="bg-gray-50">
                   {item.subMenus.map((subMenu) => (
                    <a
                      key={subMenu.id}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleSubMenuClick(item.id, subMenu); }}
                      className="block py-2 text-sm text-gray-600 hover:bg-blue-100"
                    >
                      {subMenu.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
