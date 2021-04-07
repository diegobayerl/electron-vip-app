import React from "react";
import { Link } from "react-router-dom";

import Header from '../components/headerPages';

import '../styles/pages/login.css';

export default function CreateOrphanage() {

  return (
    <>
    <Header />
    <div id="page-login">
      <main>
        <form className="login-form">
          <fieldset>

            <div className="input-block">
              <label htmlFor="name">Login</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <input id="name" />
            </div>

          </fieldset>

          <Link to="/listen" className="navigator">
          <button className="confirm-button" type="submit">
                Entrar
          </button>
          </Link>
        </form>
      </main>
    </div>
    </>
  );
}
