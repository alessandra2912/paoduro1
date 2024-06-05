import React from 'react';
import './Conheça.css';
import Padaria from './padaria.jpeg';
import CarrinhoIcon from './carrinho.png'; // Adicione o ícone do carrinho de compras

const Conheça = () => {
  return (
    <div className="Titulo">
      <h1>Conheça a nossa Padaria</h1>
      <div className="imagem">
        <img src={Padaria} alt="imagem-padaria" className="imagemconheça" />
      </div>
      <div className="texto">
        <h2>Endereço:</h2>
        <p>Shopping Barra - 1º Piso - Praça de Alimentação. Av. Centenário, 2992 - Chame-Chame. Salvador-BA</p>
        <h2>Telefone(s):</h2>
        <p>(71) 3033-4455 / (71) 1122-5890</p>
        <h2>Horário de Funcionamento:</h2>
        <p>Segunda à Sábado: 9h às 22h. Domingo: 12h às 20h</p>
        <div className="button-container">
          <button className="button button-transparent">Ouvimos você</button>
          <button className="button button-white">
            <img src={CarrinhoIcon} alt="Carrinho de Compras" />
            Encomendas Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conheça;


