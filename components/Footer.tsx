
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">AID 30+ Program</h2>
            <p className="text-gray-400">Daegu Haany University</p>
          </div>
          <div className="text-gray-400">
            <p>&copy; {new Date().getFullYear()} AID 30+ Digital Badge Platform. All rights reserved.</p>
            <p>This is a sample website for demonstration purposes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
