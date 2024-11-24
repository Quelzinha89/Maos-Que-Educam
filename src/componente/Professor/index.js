import React from "react";
import "./professor.css"; 
import HeaderProfessor from '../headerProfessor';
import cursoDeLibras from '../../imagens/cursoDeLibras.svg';
import materialDeApoio from '../../imagens/material de apoio escolar.svg';

function Professor() {
  return (
    <div className="container">
         <HeaderProfessor/>
     
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
            <a href="https://drive.google.com/file/d/1a8nm-Mht8jcZaWXYpUnt2z3xEj74b5tg/view" className="descricao-cartao" target="_blank" rel="noopener noreferrer">
      Documentos
    </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professor;
