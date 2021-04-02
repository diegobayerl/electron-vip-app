import React from 'react';
import '../styles/pages/login.css';
import { Link } from 'react-router-dom';

function LoginPage(){
    return(
        <div id="login-page">
            <div className="container">
                <main>
                    <h1>Teste</h1>
                    <Link to="/Home">Navegar</Link>
                </main>
            </div>
        </div>
    );
};

export default LoginPage;