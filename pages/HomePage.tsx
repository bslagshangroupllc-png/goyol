
import React from 'react';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { useTranslation } from '../context/i18n';
import { imageAssets } from '../data/images';
import HeroSlider from '../components/HeroSlider';

interface HomePageProps {
    products: Product[];
    onViewProduct: (productId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onViewProduct }) => {
    const recommendedProducts = products.slice(0, 8);
    const { t } = useTranslation();
    
    return (
        <main>
            <HeroSlider />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
                <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center flex items-end p-6 sm:p-8 lg:p-12" style={{backgroundImage: `url('${imageAssets.homePage.promo}')`}}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold">{t('home_promo_title')}</h2>
                        <a href="#" className="mt-4 inline-block text-sm font-medium uppercase tracking-wider border-b border-white pb-1 hover:opacity-80 transition-opacity">
                            {t('home_promo_button')}
                        </a>
                    </div>
                </div>
            </div>
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
                <h2 className="text-2xl font-medium text-center mb-8 sm:mb-12">{t('home_recommended_title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                    {recommendedProducts.map(product => (
                        <ProductCard key={product.id} product={product} onClick={() => onViewProduct(product.id)} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;
