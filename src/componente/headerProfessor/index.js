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
                <a 
                    href="https://drive.google.com/file/d/12ISmQZjWTttM-KkhSyb6VOfZ-FROLR-O/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Botao texto="Dicionário" />
                </a>
            </div>
        </header>
    );
};

export default HeaderProfessor;
