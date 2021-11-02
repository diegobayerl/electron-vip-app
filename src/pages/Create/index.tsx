import React from "react";

import { MdAdd } from 'react-icons/md'

import Header from "../../components/Header";


import "./styles.css";

export default function Create() {
  return (
    <div id="page-create">
      <Header page="create"/>
      <main>
      <form className="create-product-form">
          <fieldset>
            <legend>Dados</legend>

            <div className="input-block">
              <label htmlFor="name">Nome do produto</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Tipo do produto</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Valor</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Descrição do produto</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <MdAdd size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Em Estoque ?</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
