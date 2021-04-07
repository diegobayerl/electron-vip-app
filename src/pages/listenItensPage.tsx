import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/headerPages';

import Menu from '../components/sideMenu';

import '../styles/pages/listenPage.css';

export default function ListenItens(){
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        api.get('/products').then(response => {
            setProducts(response.data);
        })
       
    }, []);

    return (
        <>
        <Header />
        <Menu />
            <div id="page-liste-home">
            <div className="flat-list">
            <div className="menu-card">
                <Link to="">Bebidas</Link>
                <Link to="">Gás</Link>
                <Link to="">Água</Link>
                <Link to="">Promoção</Link>
            </div>
            <div className="container-card">

            {products.map(product => {
                return(
                    <div key={product.id} className="card">
                    <div className="body-product">
                    <h1>{product.name}</h1>
                    <label>{product.type}</label>
                    <label>R$ {product.value}</label>
                    <p>{product.description}</p>
                    <Link to="">Por em Promoção</Link>
                </div>
                 <div className="image-product">
                    <img src={product.url} alt="image" />
                 </div>
             </div>
                )
            })}

            </div>
            </div>
        </div>
        </>
    );
};