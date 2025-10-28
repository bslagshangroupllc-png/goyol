import React from 'react';
import type { Product, Category, CategoryId } from '../types';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { useTranslation } from '../context/i18n';
import CollectionCard from '../components/CollectionCard';
import { imageAssets } from '../data/images';
import { categories } from '../data/mockData';
import type { Page } from '../App';

interface CategoryPageProps {
  category: Category;
  products: Product[];
  onViewProduct: (productId: number) => void;
  onNavigate: (page: Page, contextId: CategoryId) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, onViewProduct, onNavigate }) => {
  const { t } = useTranslation();
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="text-center sm:text-left border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-sm text-stone-500">{t('product_count', { count: category.productCount })}</p>
      </div>
      
      <div className="flex justify-end mt-6">
        <div className="relative">
          <select className="appearance-none bg-transparent border border-stone-300 pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-brown focus:border-brand-brown">
            <option>{t('sort_latest')}</option>
            <option>{t('sort_price_low_high')}</option>
            <option>{t('sort_price_high_low')}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
             <Icon name="chevron-down" className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <section className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onViewProduct(product.id)} />
          ))}
        </div>
      </section>

      {['men', 'women'].includes(category.id) && (
        <section className="mt-16 sm:mt-24">
            <h2 className="text-2xl font-medium text-center mb-10">{t('collection_section_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CollectionCard
                    titleKey={categories.couple.name}
                    imageUrl={imageAssets.collections.couple}
                    onClick={() => onNavigate('category', 'couple')}
                />
                <CollectionCard
                    titleKey={categories.christmas.name}
                    imageUrl={imageAssets.collections.christmas}
                    onClick={() => onNavigate('category', 'christmas')}
                />
                <CollectionCard
                    titleKey={categories.company.name}
                    imageUrl={imageAssets.collections.company}
                    onClick={() => onNavigate('category', 'company')}
                />
            </div>
        </section>
      )}

    </main>
  );
};

export default CategoryPage;