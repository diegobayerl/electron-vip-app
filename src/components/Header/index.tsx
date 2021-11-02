import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { 
    MdHome, 
    MdShoppingBasket, 
    MdReceipt,MdTrendingUp, 
    MdAdd, MdSettings 
} from 'react-icons/md'

import './styles.css';
interface Page {
    page: string;
}

export default function Header({page}: Page){

    return(
        <div id="header">
                <div>
                    {page === "home" ? (
                            <Link className="item-select" to="">
                                <MdHome /> home
                            </Link>
                        ) : (
                            <Link to="">
                                <MdHome /> home
                            </Link>
                    )}

                    {page === "promo" ? (
                            <Link className="item-select" to="/promo">
                                <MdShoppingBasket /> promoções
                            </Link>
                        ) : (
                            <Link to="/promo">
                                <MdShoppingBasket /> promoções
                            </Link>
                    )}

                    {page === "produto" ? (
                            <Link className="item-select" to="/produto">
                                <MdReceipt /> produto
                            </Link>
                        ) : (
                            <Link to="/produto">
                                <MdReceipt /> produto
                            </Link>
                    )}

                    {page === "dados" ? (
                            <Link className="item-select" to="/dados">
                                <MdTrendingUp /> dados
                            </Link>
                        ) : (
                            <Link to="/dados" >
                                <MdTrendingUp /> dados
                            </Link>
                    )}

                    {page === "create" ? (
                            <Link className="item-select" to="/create" >
                                <MdAdd /> novo Produto
                            </Link>
                        ) : (
                            <Link to="/create" >
                                <MdAdd /> novo Produto
                            </Link>
                    )}

                </div>
                <div>
                    {page === "settings" ? (
                            <Link className="item-select" to="/settings" >
                                <MdSettings size={32} />
                            </Link>
                        ) : (
                            <Link to="/settings" >
                                <MdSettings size={32} />
                            </Link>
                    )}
                </div>
        </div>
    );
}