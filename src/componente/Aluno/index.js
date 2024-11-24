import './aluno.css'
import Header from '../header'
import destaqueVideo from '../../imagens/Design destaque video (54).png'
import videos from '../../imagens/Design videos(50).png'
import historias from '../../imagens/Design historias (52).png'
import miniDicionario from '../../imagens/Design mini-dicionario(51).png'
import jogos from '../../imagens/Design jogos (53).png'

function Aluno () {
    return (
  
    <div className="aluno">
        <Header/>
        <img src= {destaqueVideo} alt='Mulher sinalizando'/>
        <div className='cards'>
            <img src= {videos} alt='Imagem video do youtube'/>
            <img src= {miniDicionario} alt='Imagem video do youtube'/>
            <img src= {historias} alt='Imagem de livro aberto'/>
            <img src= {jogos} alt='Imagem video do youtube'/>
        </div>
        <h1>Hello World</h1>
    </div>
    

    )
}

export default Aluno