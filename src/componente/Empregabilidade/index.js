import './empregabilidade.css'
import Header from '../header'
import arrow from '../../imagens/maki_arrow.svg'
import emConstrucao from '../../imagens/Em-construcao.png'
import { Link  } from 'react-router-dom'

const Empregabilidade = () => {



    return (
        <div className='paginaEmpregabilidade'>
            <Header/>
            <div className='titulo'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className='tituloH1'><img className='seta' src= {arrow} alt='Seta de Voltar'/> Voltar</h1>
                </Link>
                <div className='linhaVertical'/>
                <h1>Empregabilidade</h1>
            </div>
            <img className='imagemConstrucao' src={emConstrucao} alt='Imagem-construcao'/>
        </div>
    )
}

export default Empregabilidade