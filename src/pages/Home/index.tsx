import React from "react";
import { Chart } from "react-google-charts";

import Header from "../../components/Header";
import Status from "../../components/Status";

import List from "../../components/RenderList";

import "./styles.css";

export default function Home() {

  const data = {
    bebida: 20,
    aguaGas: 15,
    entregue: 30,
    pendente: 5
  }

  return (
    <div id="page-home">
      <Header page="home"/>
      <Status />
      <div className="main-container">
        <div>
            <div className="header">
                <h3>Em Preparo</h3>
                <div className="header-item">
                    <strong>Id</strong>
                    <strong>Produto</strong>
                    <strong>Valor</strong>
                    <strong></strong>
                </div>
            </div>
          <List rote='em preparo' />
        </div>
        <div>
            <div className="header">
                <h3>Em Rota</h3>
                <div className="header-item">
                    <strong>Id</strong>
                    <strong>Produto</strong>
                    <strong>Valor</strong>
                    <strong></strong>
                </div>
            </div>
          <List rote='em rota'/>
        </div>
        </div>
      </div>
  );
}
