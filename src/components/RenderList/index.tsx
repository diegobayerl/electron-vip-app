import React, { useEffect, useState } from "react";
import { MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";
import api from "../../services/api";

import './styles.css';

interface Props {
    rote: string
}

interface Products {
    id: number;
    nameProduct: string;
    value: number;
    statusEntrega: string;
}

export default function RenderItem({ rote }: Props){
    const [data, setData] = useState<Products[]>([]);
    const [status, setStatus] = useState(false);

    function pendente(value: Products){
        if(value.statusEntrega == rote)
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

    var pedidos = data.filter(pendente);

    return(
        <div id="list-container">
            <ul>
                {pedidos.map( item => {
                    return (
                        <li key={item.id} className="list">
                            <Link to={`/detalhe/${item.id}`}>
                            <div className="main-item">
                                <strong>{item.id}</strong>
                                <strong>{item.nameProduct}</strong>
                                <strong>R$ {item.value.toFixed(2)}</strong>
                                <MdNavigateNext />
                            </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>                 
    );
}