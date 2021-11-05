import React, { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router";
import { MdAdd } from 'react-icons/md'
import api from '../../services/api'

import Header from "../../components/Header";

import InputMask from 'react-input-mask'


import "./styles.css";


export default function Create() {
  const [ name, setName ] = useState('');
  const [ type, setType ] = useState('');
  const [ value, setValue ] = useState<number>();
  const [ description, setDescription ] = useState('');
  const [ estoque, setEstoque ] = useState('');

  const [ image, setImage ] = useState<File>();
  const [ previ, setPrev ] = useState<string>()

  const history = useHistory();

  function selectImage(event: ChangeEvent<HTMLInputElement>){

    if(!event.target.files){
      return;
    }

    setImage(event.target.files[0]);

    const preview = URL.createObjectURL(event.target.files[0]);

    setPrev(preview);
    
  }

  async function createNewProduct(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('type', type);
    data.append('value', String(value));
    data.append('description', description);
    data.append('estoque', estoque);
    data.append('image', image);

    await api.post('/product', data);

    alert('cadastro realizado com sucesso!');

    history.push('/');
  }

  return (
    <div id="page-create">
      <Header page="create"/>
      <main>
      <form onSubmit={createNewProduct} className="create-product-form">
          <fieldset>
            <legend>Dados</legend>

            <div className="input-block">
              <label htmlFor="name">Nome do produto</label>
              <input id="name" value={name} onChange={ event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="name">Tipo do produto</label>
              <div className="chackbox">
                <div>
                  <input type="radio" id="tipo1" name="fav" value="cerveja" onChange={event => setType(event.target.value)} />
                  <label htmlFor="tipo">Cerveja</label>
                </div>

                <div>
                  <input type="radio" id="tipo2" name="fav" value="cervejaEspecial" onChange={event => setType(event.target.value)} />
                  <label htmlFor="tipo">Cerveja Especial</label>
                </div>

                <div>
                  <input type="radio" id="tipo3" name="fav" value="refrigerante" onChange={event => setType(event.target.value)} />
                  <label htmlFor="tipo">Refrigerante</label>
                </div>

                <div>
                  <input type="radio" id="tipo3" name="fav" value="gas" onChange={event => setType(event.target.value)} />
                  <label htmlFor="tipo">Gás</label>
                </div>

                <div>
                  <input type="radio" id="tipo3" name="fav" value="agua" onChange={event => setType(event.target.value)} />
                  <label htmlFor="tipo">Água</label>
                </div>

              </div>
            </div>

            <div className="input-block">
              <label htmlFor="name">Valor</label>
              <input type="number" step=".01" value={value} id="name" onChange={event => setValue(Number(event.target.value))} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Descrição do produto <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" value={description} onChange={event => setDescription(event.target.value)} maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                <img src={previ} />

                <label htmlFor="image" className="new-image">
                  <MdAdd size={24} color="#15b6d6" />
                </label>
              </div>
              <input type="file" id="image" accept=".png, .jpg" size={1} onChange={selectImage}/>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Em Estoque ?</label>

              <div className="select-estoque">
                <div>
                  <input type="radio" name="est" value="true" onChange={event => setEstoque(event.target.value)} />
                  <label htmlFor="tipo">SIM</label>
                </div>

                <div>
                  <input type="radio" name="est" value="false" onChange={event => setEstoque(event.target.value)} />
                  <label htmlFor="tipo">NÃO</label>
                </div>

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
