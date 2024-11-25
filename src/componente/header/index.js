import { Link } from 'react-router-dom'
import logoMenor from '../../imagens/logo-menor.png'
import Botao from '../Botao'
import './header.css'

const Header = () => {
    return (
        <header className='cabecalho'>
            <img src= {logoMenor} className='logo' alt='Logo menor Mãos que educam'/>
            <div className='menu'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Botao texto='Início'/>
                </Link>
                <Link to="/aluno/videos" style={{ textDecoration: 'none' }}>
                    <Botao texto='Vídeos'/>
                </Link>
                <a 
                    href="https://drive.google.com/file/d/12ISmQZjWTttM-KkhSyb6VOfZ-FROLR-O/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Botao texto="Dicionário" />
                </a>
                <Link to= "/empregabilidade" style={{ textDecoration: 'none' }} >
                        <Botao texto='Empregabilidade'/>
                </Link>
            </div>
        </header>
    )
}
export default Header