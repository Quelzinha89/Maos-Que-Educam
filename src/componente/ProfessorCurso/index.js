import React from "react";
import "./professorCurso.css";
import cursoBasico from '../../imagens/curso basico.svg';
import cursoIniciante from '../../imagens/curso iniciante.svg';
import cursoIntermediario from '../../imagens/curso intermediario.svg';
import setaEsquerda from '../../imagens/maki_arrow.svg';
import HeaderProfessor from "../headerProfessor";
import { Link } from "react-router-dom"; 

function ProfessorCurso() {
  return (
    <div className="container-pagina {
">

      <HeaderProfessor/>

      <div className="links-superiores">
      <Link to="/professor" className="link">
          <img src={setaEsquerda} alt="Seta para voltar" className="icone-imagem" />
          Voltar
        </Link>
        <span className="separador">|</span>
        <Link to="/professorCurso" className="link">Curso</Link>
      </div>

      <div className="contêiner-cartões">
  <a
    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre o Curso Básico."
    className="cartão"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={cursoBasico}
      alt="Descrição do cartão 1"
      className="imagem-cartão"
    />
    <div className="conteúdo-cartão">
      <h3 className="titulo-cartão">Curso Básico</h3>
      <p className="descricao-cartão">R$ 180,00 / mês - 6 meses de curso</p>
    </div>
  </a>

  <a
    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre o Curso para Iniciantes."
    className="cartão"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={cursoIniciante}
      alt="Descrição do cartão 2"
      className="imagem-cartão"
    />
    <div className="conteúdo-cartão">
      <h3 className="titulo-cartão">Curso para Iniciantes</h3>
      <p className="descricao-cartão">R$ 99,90 - 3 meses de curso</p>
    </div>
  </a>

  <a
    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre o Curso Intermediário."
    className="cartão"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={cursoIntermediario}
      alt="Descrição do cartão 3"
      className="imagem-cartão"
    />
    <div className="conteúdo-cartão">
      <h3 className="titulo-cartão">Curso Intermediário</h3>
      <p className="descricao-cartão">R$ 260,00 / mês - 6 meses</p>
    </div>
  </a>
</div>
    </div>
  );
}

export default ProfessorCurso;
