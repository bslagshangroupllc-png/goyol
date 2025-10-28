
import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import type { Page } from '../App';
import type { CategoryId } from '../types';
import { useTranslation } from '../context/i18n';
import { categories } from '../data/mockData';
import { imageAssets } from '../data/images';

interface NavItem {
    id: CategoryId;
    name: string;
}

interface NavMenuItemProps {
    title: string;
    subItems?: NavItem[];
    onClick: () => void;
    onSubItemClick: (id: CategoryId) => void;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ title, subItems, onClick, onSubItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleSubItemClick = (id: CategoryId) => {
        onSubItemClick(id);
        setIsOpen(false);
    }

    if (!subItems || subItems.length === 0) {
        return (
            <button onClick={onClick} className="text-sm font-medium text-brand-text hover:text-brand-light-brown transition-colors">
                {title}
            </button>
        );
    }

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button onClick={onClick} className="text-sm font-medium text-brand-text hover:text-brand-light-brown transition-colors flex items-center">
                {title}
                <Icon name="chevron-down" className="w-4 h-4 ml-1" />
            </button>
            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 z-10">
                <div className="w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 mt-2">
                    {subItems.map(item => (
                        <button key={item.id} onClick={() => handleSubItemClick(item.id)} className="text-left w-full block px-4 py-2 text-sm text-brand-text hover:bg-stone-100">{t(item.name)}</button>
                    ))}
                </div>
              </div>
            )}
        </div>
    );
};

const MobileNavMenuItem: React.FC<NavMenuItemProps> = ({ title, subItems, onClick, onSubItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleTitleClick = () => {
        if (subItems && subItems.length > 0) {
            setIsOpen(!isOpen);
        } else {
            onClick();
        }
    };

    return (
        <div className="border-b border-stone-200">
            <button onClick={handleTitleClick} className="w-full flex justify-between items-center py-3 text-left">
                <span className="font-semibold">{title}</span>
                {subItems && <Icon name={isOpen ? 'minus' : 'plus'} className="w-4 h-4 text-stone-500" />}
            </button>
            {isOpen && subItems && (
                <div className="pl-4 pb-2">
                    {subItems.map(item => (
                        <button key={item.id} onClick={() => onSubItemClick(item.id)} className="block py-2 text-stone-600 hover:text-brand-text w-full text-left">
                            {t(item.name)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const Header: React.FC<{onNavigate: (page: Page, context?: CategoryId) => void;}> = ({ onNavigate }) => {
    const { t, language, setLanguage } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const handleNavigation = (page: Page, contextId: CategoryId) => {
        onNavigate(page, contextId);
    }
    
    const handleMobileNavigation = (page: Page, contextId: CategoryId) => {
        onNavigate(page, contextId);
        setIsMobileMenuOpen(false);
    }

    const eventSubItems = [
      {id: 'couple', name: 'nav_couple'},
      {id: 'christmas', name: 'nav_christmas'},
      {id: 'company', name: 'nav_company'},
    ] as NavItem[];

  return (
    <>
    <header className="bg-brand-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20 border-b border-stone-200">
          <div className="flex justify-start">
            <button onClick={() => onNavigate('home')} className="flex-shrink-0">
                <img src={imageAssets.logo} alt="Goyol Logo" className="h-14 w-auto" />
            </button>
          </div>

          <nav className="hidden md:flex justify-center space-x-8">
              <NavMenuItem 
                  title={t('nav_men')}
                  subItems={categories.men.subcategories}
                  onClick={() => handleNavigation('category', 'men')}
                  onSubItemClick={(id) => handleNavigation('category', id)}
              />
               <NavMenuItem 
                  title={t('nav_women')}
                  subItems={categories.women.subcategories}
                  onClick={() => handleNavigation('category', 'women')}
                  onSubItemClick={(id) => handleNavigation('category', id)}
              />
               <NavMenuItem 
                  title={t('nav_accessories')}
                  subItems={categories.accessories.subcategories}
                  onClick={() => handleNavigation('category', 'accessories')}
                  onSubItemClick={(id) => handleNavigation('category', id)}
              />
               <NavMenuItem 
                  title={t('nav_event')}
                  subItems={eventSubItems}
                  onClick={() => {}} 
                  onSubItemClick={(id) => handleNavigation('category', id)}
              />
          </nav>

          <div className="flex justify-end items-center">
             <div className="hidden md:flex items-center space-x-2 text-sm">
                <button 
                    onClick={() => setLanguage('en')}
                    className={`font-medium transition-colors ${language === 'en' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                    aria-pressed={language === 'en'}
                >
                    EN
                </button>
                <span className="text-stone-300">|</span>
                <button 
                    onClick={() => setLanguage('ko')}
                    className={`font-medium transition-colors ${language === 'ko' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                    aria-pressed={language === 'ko'}
                >
                    KO
                </button>
            </div>
             <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <Icon name="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <div className={`fixed inset-0 z-[100] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="relative w-full max-w-xs h-full bg-brand-background shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <Icon name="x" className="w-6 h-6" />
                </button>
            </div>
            <nav className="mt-8 flex flex-col">
                <MobileNavMenuItem 
                    title={t('nav_men')}
                    subItems={categories.men.subcategories}
                    onClick={() => handleMobileNavigation('category', 'men')}
                    onSubItemClick={(id) => handleMobileNavigation('category', id)}
                />
                <MobileNavMenuItem 
                    title={t('nav_women')}
                    subItems={categories.women.subcategories}
                    onClick={() => handleMobileNavigation('category', 'women')}
                    onSubItemClick={(id) => handleMobileNavigation('category', id)}
                />
                <MobileNavMenuItem 
                    title={t('nav_accessories')}
                    subItems={categories.accessories.subcategories}
                    onClick={() => handleMobileNavigation('category', 'accessories')}
                    onSubItemClick={(id) => handleMobileNavigation('category', id)}
                />
                <MobileNavMenuItem 
                    title={t('nav_event')}
                    subItems={eventSubItems}
                    onClick={() => {}}
                    onSubItemClick={(id) => handleMobileNavigation('category', id)}
                />
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-center space-x-2 text-sm mt-8 border-t border-stone-200 pt-6">
                    <button 
                        onClick={() => setLanguage('en')}
                        className={`font-medium transition-colors ${language === 'en' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                        aria-pressed={language === 'en'}
                    >
                        English
                    </button>
                    <span className="text-stone-300">|</span>
                    <button 
                        onClick={() => setLanguage('ko')}
                        className={`font-medium transition-colors ${language === 'ko' ? 'text-brand-text' : 'text-stone-400 hover:text-brand-text'}`}
                        aria-pressed={language === 'ko'}
                    >
                        한국어
                    </button>
                </div>
            </div>
        </div>
    </div>
    {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-[99] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

    </>
  );
};

export default Header;
