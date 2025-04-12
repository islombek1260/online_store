import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [
        // Пример данных о продуктах
        { id: 1, name: 'Товар 1', price: 1000, image: '/images/product1.jpg' },
        { id: 2, name: 'Товар 2', price: 2000, image: '/images/product2.jpg' },
    ];

    return (
        <div>
            <h2>Все товары</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;