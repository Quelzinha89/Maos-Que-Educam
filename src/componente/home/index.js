import './home.css'
import logo from '../../imagens/logo.png'
import homemSinalizando from '../../imagens/homem-sinalizando.png'
import ouvido from '../../imagens/ouvido-icon.svg'
import vector from '../../imagens/Vector.png'
import Botao from '../Botao'


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
                    <Botao texto='Professor'/>
                </div>
                <div className='aluno'>
                    <img src={ouvido} alt='Aluno'/>
                    <Botao texto='Aluno'/>
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