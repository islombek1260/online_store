import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/cart">Корзина</Link>
        </nav>
    );
};

export default Navbar;