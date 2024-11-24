import './card.css'

const Card = ({texto, texto2, img}) => {
    return (
        <div className='card'>
            <img src= {img} alt='Imagem video do youtube'/>
            <div className='textosCard'>
                <h1 className='cardh1'>{texto}</h1>
                <small>{texto2}</small>
            </div>
        </div>
    )
}
export default Card