import './video.css'
import Header from '../header'
import arrow from '../../imagens/maki_arrow.svg'
import { Link, useParams  } from 'react-router-dom'

const Video = () => {

    const tipoTitulo = {
        animais: 0,
        emocoes: 1,
        familia: 2,
        objeto: 3,
        escola: 4,
        0: 'Animais',
        1: 'Emoções',
        2: 'Família',
        3: 'Objetos',
        4: 'Escola'
    }
    const {tipo} = useParams()
    const titulo = tipoTitulo[tipoTitulo[tipo]]

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
                <h1>{titulo}</h1>
            </div>
            {(() => {
                switch (tipo) {
                    case 'animais':
                        return <iframe className='videoAluno' src="https://www.youtube.com/embed/oe2Z2IX9sTo?si=PBWrtVFFt3m--jUS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    case 'emocoes':
                        return <iframe className='videoAluno' src="https://www.youtube.com/embed/W9-J_6b2tuo?si=8wTzIBKsS_2FCJYT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  default:
                    return <div className='videoAlunoPlaceholder'/>
                }
              })()}
        </div>
    )
}

export default Video