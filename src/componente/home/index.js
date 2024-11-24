import './home.css'
import logo from '../../imagens/logo.png'
import homemSinalizando from '../../imagens/homem-sinalizando.png'
import ouvido from '../../imagens/ouvido-icon.svg'
import vector from '../../imagens/Vector.png'
import Botao from '../Botao'
import { Link } from 'react-router-dom'

function Home () {
    return (
    <div className="home">
        <div className='ladoEsquerdo'>
            <img src={homemSinalizando} alt='Homem Sinalizando'/>
        </div>
        <div className='ladoDireito'>
            <img className='logo' src={logo} alt='Logo Mãos que Educam'/>
            <div className='painel'>
                <div className='professor'>
                    <img src={vector} alt='Professor'/>
                    <Link to="/professor">
                          <Botao texto='Professor'/>
                    </Link>
                </div>
                <div className='aluno'>
                    <img src={ouvido} alt='Aluno'/>
                    <Link to="/aluno">
                        <Botao texto='Aluno' />
                    </Link>
                </div>
            </div>
            <h1 className='texto'>
                Ensinamento bilingue para surdos
            </h1>
        </div>
    </div>
    )

}

export default Home