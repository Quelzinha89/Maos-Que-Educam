import './videoCard.css'
import { Link } from 'react-router-dom'


const VideoCard = ({texto, img, tipo}) => {
    const path = '/aluno/videos/'+tipo
    return (
        <div className='videoCard'>
                <Link to={path} style={{ textDecoration: 'none', display: 'flex' }}>
                    <img className='videoCardImg' src= {img} alt='Imagem video do youtube'/>
                    <div className='textosVideoCard'>
                        <h1 className='videocardh1'>{texto}</h1>
                    </div>
                </Link>
        </div>
    )
}
export default VideoCard