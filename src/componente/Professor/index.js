import React from "react";
import "./professor.css"; 
import Header from '../header';
import cursoDeLibras from '../../imagens/cursoDeLibras.svg';
import materialDeApoio from '../../imagens/material de apoio escolar.svg';

function Professor() {
  return (
    <div className="container">
      <Header/>
     
      <h1 className="titulo-principal">Material do Professor</h1>

      <div className="secao-conteudo">
        <video controls className="video">
          <source src="video.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>

        <h2 className="titulo-secao">Dicas para ensinar uma criança surda a ler</h2>

        <div className="cartoes">
          <div className="cartao">
            <img
              src={cursoDeLibras}
              alt="Descrição da imagem 1"
              className="imagem-cartao"
            />
            <h3 className="titulo-cartao">Cursos de Libras</h3>
             <p className="descricao-cartao">
             Aprendendo Libras
             </p>
          </div>

          <div className="cartao">
            <img
              src={materialDeApoio}
              alt="Descrição da imagem 2"
              className="imagem-cartao"
            />
            <h3 className="titulo-cartao">Material de Apoio</h3>
             <p className="descricao-cartao">
             Documentos
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professor;
