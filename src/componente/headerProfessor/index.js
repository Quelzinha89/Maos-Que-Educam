import { Link } from "react-router-dom";
import logoMenor from '../../imagens/logo-menor.png';
import Botao from '../Botao';
import './header.css';

const HeaderProfessor = () => {
    return (
        <header className="cabecalhoProfessor">
            <img src={logoMenor} className="logo" alt="Logo menor Mãos que educam" />
            <div className="menu">
                <Link to="/">
                    <Botao texto="Início" />
                </Link>
                <Link to="/professorCurso">
                    <Botao texto="Curso" />
                </Link>
                <Link to="/dicionario">
                    <Botao texto="Dicionário" />
                </Link>
            </div>
        </header>
    );
};

export default HeaderProfessor;
