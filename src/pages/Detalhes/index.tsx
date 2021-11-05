import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from 'react-icons/md';

import { useParams, Link, useHistory } from 'react-router-dom';

import api from "../../services/api";


import "./styles.css";

interface Request {
  nameUser: string; //ok
  telephone: string; //ok
  idUser: number; //ok
  idProduct: number, //ok
  nameProduct: string; //ok
  description: string;  //ok
  value: number; //ok
  quantidade: number; //ok
  entrega: string; //ok
  valorEntrega: number; //ok
  valorTotal: number; //ok
  formaPag: string; //ok
  bandeira: string; //ok
  valorCliente: number;
  troco: number;

  hora: string;
  date: string;
  status: boolean,
  statusEntrega: string;
}

interface User {
  name: string;
  telephone: string;
  city: string;
  bairro: string;
  rua: string;
  number: number;
  reference: string;
  note: string;
}

interface Product {
  id: number;
  name: string;
  type: string;
  value: number
  description: string;
  url: string;
}

interface RouteParams {
  id: string;
}
/*
[x] Verificar qual é o pedido que está sendo feito
[x] Dados do usuário que pediu com ederenço e informações
[x] dados do produto comprado

[ ] Adiconar dados em tela e trabalhar com eles
*/

export default function Datalhe() {

  const params = useParams<RouteParams>();
  const { goBack } = useHistory();

  const [request, setRequest] = useState<Request>();
  const [user, setUser] = useState<User>();
  const [product, setProduct] = useState<Product>();

  function finalizar(status: string){
    if(status == 'em preparo'){
      api.put(`/request/${params.id}`, {
        statusEntrega: "em rota",
      })
    }

    if(status == 'em rota'){
      api.patch(`/request/${params.id}`);

      api.put(`/request/${params.id}`, {
        statusEntrega: "entregue",
      });
    } 

    goBack();
  }

  useEffect(() => {
    api.get(`/request/data/${params.id}`).then(res => {
        setRequest(res.data);
    });
  }, [params.id]);

  function buscaDados(){
    api.get(`/user/${request.idUser}`).then(res => {
      setUser(res.data);
    });

    api.get(`/product/${request.idProduct}`).then(res => {
      setProduct(res.data);
    });
  }

  if(!request)
    return <p>carregando...</p>
  
  if(!user || !product){
    buscaDados();
  } 

  if(!user || !product)
    return <p>carregando...</p>

  return (
    <div id="page-detalhe">
      <header>
        <a onClick={goBack}><MdKeyboardBackspace /></a>
      </header>

      <main>
        <div className="card-l">
          <h3>Dados do Usuário</h3>
          <strong>{user.name}</strong>
          <strong>Telefone: {user.telephone}</strong>
          <strong>Cidade: {user.city}</strong>
          <strong>Bairro: {user.bairro}</strong>
          <strong>Rua: {user.rua}</strong>
          <strong>Número: {user.number}</strong>
          <strong>Referencia: {user.reference}</strong>
          <strong>Notas: {user.note}</strong>

          <h3>Dados do Produto</h3>
          <strong>Nome: {product.name} </strong>
          <strong>Valor: R$ {product.value.toFixed(2)}</strong>
          <strong>Descrição: {product.description}</strong>
        </div>

        <div className="card-c">
            <h3>Itens comprados</h3>
          <strong>Quantidade: {request.quantidade} Unidades</strong>
          <strong>Descrição: {request.description}</strong>
          <strong>Entrega: {request.entrega}</strong>
          <strong>Valor Total: R$ {request.valorTotal.toFixed(2)}</strong>
          <strong>Forma de Pagamento: {request.formaPag}</strong>
          <strong>Bandeira: {request.bandeira}</strong>
          <strong>Valor do Cliente: R$ {request.valorCliente.toFixed(2)}</strong>
          <strong>Troco: R$ {request.troco.toFixed(2)}</strong>
        </div>
        
        <div className="card-r">
          <img src={product.url} />
          {request.statusEntrega === 'em preparo' ? (
             <a onClick={() => finalizar(request.statusEntrega)}>Enviar Pedido</a>
          ):(
            <a onClick={() => finalizar(request.statusEntrega)}>Finalizar Pedido</a>
          )}
         
        </div>
      </main>
    </div>
  );
}