import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/i18n';
import { imageAssets } from '../data/images';

const slides = [
    {
        image: imageAssets.homePage.hero1,
        titleKey: 'home_hero_title',
        buttonKey: 'home_hero_button',
    },
    {
        image: imageAssets.homePage.hero2,
        titleKey: 'home_promo_title',
        buttonKey: 'home_promo_button',
    },
    {
        image: imageAssets.homePage.hero3,
        titleKey: 'home_hero_title', // Re-using for variety
        buttonKey: 'home_hero_button',
    },
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t(slide.titleKey)}</h1>
                        <button className="mt-6 px-8 py-3 border border-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                            {t(slide.buttonKey)}
                        </button>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
