import './video.css'
import Header from '../header'
import arrow from '../../imagens/maki_arrow.svg'
import { Link, useParams  } from 'react-router-dom'


const Video = () => {
    const {tipo} = useParams()
    return (
        <div className='paginaVideos'>
            <Header/>
            <div className='titulo'>
                <Link to="/aluno/videos" style={{ textDecoration: 'none' }}>
                    <h1><img className='seta' src= {arrow} alt='Seta de Voltar'/> Voltar</h1>
                </Link>
                <div className='linhaVertical'/>
                <h1>Vídeos</h1>
                <div className='linhaVertical'/>
                <h1>{tipo}</h1>
            </div>
        </div>
    )
}

export default Video