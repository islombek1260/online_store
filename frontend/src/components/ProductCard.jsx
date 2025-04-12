import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} ₽</p>
            <button>Добавить в корзину</button>
        </div>
    );
};

export default ProductCard;