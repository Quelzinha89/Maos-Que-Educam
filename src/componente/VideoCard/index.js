import './videoCard.css'


const VideoCard = ({texto, img}) => {
    return (
        <div className='videoCard'>
            <img src= {img} alt='Imagem video do youtube'/>
            <div className='textosVideoCard'>
                <h1 className='videocardh1'>{texto}</h1>
            </div>
        </div>
    )
}
export default VideoCard