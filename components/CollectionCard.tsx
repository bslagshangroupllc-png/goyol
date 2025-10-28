import React from 'react';
import { useTranslation } from '../context/i18n';

interface CollectionCardProps {
    titleKey: string;
    imageUrl: string;
    onClick: () => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ titleKey, imageUrl, onClick }) => {
    const { t } = useTranslation();
    return (
        <div 
            onClick={onClick}
            className="group relative h-96 bg-cover bg-center overflow-hidden cursor-pointer" 
        >
            <div className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
                <h3 className="text-2xl font-semibold">{t(titleKey)}</h3>
                <div className="mt-4 relative inline-block">
                    <span className="text-sm font-medium uppercase tracking-wider">{t('collection_button')}</span>
                    <div className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
