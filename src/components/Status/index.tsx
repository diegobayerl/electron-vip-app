import React, { useEffect, useState } from "react";

import { MdDonutLarge } from 'react-icons/md';

import api from "../../services/api";


import './styles.css';

interface Products {
    id: number;
    nameProduct: string;
    value: number;
    statusEntrega: string;
}

export default function Status(){
    const [data, setData] = useState<Products[]>([]);
    const [status, setStatus] = useState(false);

    function Preparo(value: Products){
        if(value.statusEntrega == 'em preparo')
            return value;
    }

    function Rota(value: Products){
        if(value.statusEntrega == 'em rota')
            return value;
    }

    function Entrega(value: Products){
        if(value.statusEntrega == 'entregue')
            return value;
    }

    useEffect(() => {
        api.get('/requests').then(product => {
            setData(product.data);
            setStatus(false);
        });
    }, [status]);

    setTimeout( function run(){
        setStatus(true);
        setTimeout(run, 120000);
    }, 30000);

    var preparo = data.filter(Preparo);
    var rota = data.filter(Rota);
    var entregue = data.filter(Entrega);

    return(
        <div id="status">
            <div className="card">
                <div className="icon-item">
                    <MdDonutLarge color="#3366CC" size={48} />
                </div>
                 <div className="data-item">
                    <strong>{preparo.length}</strong>
                    <strong>Em Preparo</strong>
                </div>
            </div>
            <div className="card">
                <div className="icon-item">
                    <MdDonutLarge color="#FF9900" size={48} />
                </div>
                 <div className="data-item">
                    <strong>{rota.length}</strong>
                    <strong>Em Rota</strong>
                </div>
            </div>
            <div className="card">
                <div className="icon-item">
                    <MdDonutLarge color="#DC3912" size={48} />
                </div>
                 <div className="data-item">
                    <strong>{entregue.length}</strong>
                    <strong>Entregue</strong>
                </div>
            </div>
            <div className="card">
                <div className="icon-item">
                    <MdDonutLarge color="#109618" size={48} />
                </div>
                 <div className="data-item">
                    <strong>{data.length}</strong>
                    <strong>Total</strong>
                </div>
            </div>
        </div>
    );
}