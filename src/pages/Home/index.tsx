import React from "react";
import { Chart } from "react-google-charts";

import Header from "../../components/Header";
import Status from "../../components/Status";

import List from "../../components/RenderList";

import "./styles.css";

export default function Home() {

  return (
    <div id="page-home">
      <Header page="home"/>
      <Status />
      <div className="main-container">
        <div>
            <div className="header">
                <h3>Em Preparo</h3>
            </div>
          <List rote='em preparo' />
        </div>
        <div>
            <div className="header">
                <h3>Em Rota</h3>
            </div>
          <List rote='em rota'/>
        </div>
        </div>
      </div>
  );
}
