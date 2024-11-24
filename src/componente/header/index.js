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
                <Botao texto='Dicionário'/>
                <Link to= "/empregabilidade" style={{ textDecoration: 'none' }} >
                        <Botao texto='Empregabilidade'/>
                </Link>
            </div>
        </header>
    )
}
export default Header