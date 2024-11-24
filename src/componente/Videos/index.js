import './videos.css'
import Header from '../header'
import arrow from '../../imagens/maki_arrow.svg'
import VideoCard from '../VideoCard'
import animais from '../../imagens/animais.png'
import emocoes from '../../imagens/emocoes.png'
import familia from '../../imagens/familia.png'
import objetos from '../../imagens/objetos.png'
import escola from '../../imagens/escola.png'
import { Link } from 'react-router-dom'


const Videos = () => {
    return (
        <div className='paginaVideos'>
            <Header/>
            <div className='titulo'>
                <Link to="/aluno" style={{ textDecoration: 'none' }}>
                    <h1><img className='seta' src= {arrow} alt='Seta de Voltar'/> Voltar</h1>
                </Link>
                <div className='linhaVertical'/>
                <h1>Vídeos</h1>
            </div>
            <div className='videoCards'>
                <VideoCard texto='Animais' img={animais} tipo='animais'></VideoCard>
                <VideoCard texto='Emoções' img={emocoes} tipo='emocoes'></VideoCard>
                <VideoCard texto='Família' img={familia} tipo='familia'></VideoCard>
                <VideoCard texto='Objetos' img={objetos} tipo='objeto'></VideoCard>
                <VideoCard texto='Escola' img={escola} tipo='escola'></VideoCard>
            </div>
        </div>
    )
}

export default Videos