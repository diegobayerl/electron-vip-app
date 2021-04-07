import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/headerPages';

import Menu from '../components/sideMenu';

import '../styles/pages/listenPage.css';

export default function RequestsPage(){
    const [ Users, setUsers ] = useState([]);
    useEffect(() => {
        api.get('/requests').then(response => {
            setUsers(response.data);

            console.log(response);
        })
       
    }, []);

    return (
        <>
        <Header />
        <Menu />
        <div id="page-liste-home">
            <div className="flat-list">
            <div className="container-card">

            {Users.map(user => {
                return(
                    <div className="card">
                <div className="body-product">
                    <h1>{user.name}</h1>
                    <label>{user.type}</label>
                    <label>R$ {user.value}</label>
                    <p>{user.description}</p>
                    <Link to="">Por em Promoção</Link>
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