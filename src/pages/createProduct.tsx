import React from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft, FiPlus } from "react-icons/fi";


import '../styles/pages/createProducts.css';


export default function CreateProduct() {
  const { goBack } = useHistory();

  return (
    <div id="page-create-orphanage">
      <aside>
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Adicionar Produto</legend>

            <div className="input-block">
              <label htmlFor="name">Nome do Produto</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Preço do Produto</label>
              <input type="number" id="preco" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Tipo do Produto</label>
              <input id="type" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Descrição do Produto</label>
              <input id="description" />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="uploaded-image">
              </div>

              <button className="new-image">
                <FiPlus size={24} color="#D13438" />
              </button>

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
