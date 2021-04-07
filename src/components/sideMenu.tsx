import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/sideMenu.css';

export default function Menu() {
    return (
        <div className="menu-list">
                <Link to="/listen">Produtos</Link>
                <Link to="/create">Novo Produto</Link>
                <Link to="">Pedidos</Link>
        </div>
    );
}