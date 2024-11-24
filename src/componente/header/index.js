import logoMenor from '../../imagens/logo-menor.png'
import Botao from '../Botao'
import './header.css'

const Header = () => {
    return (
        <header className='cabecalho'>
            <img src= {logoMenor} className='logo' alt='Logo menor Mãos que educam'/>
            <div className='menu'>
                <Botao texto='Início'/>
                <Botao texto='Vídeo'/>
                <Botao texto='Dicionário'/>
            </div>
        </header>
    )
}
export default Header