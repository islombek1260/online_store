import { useEffect, useState } from 'react';
import api from '../utils/api';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get('/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return products;
};

export default useFetchProducts;