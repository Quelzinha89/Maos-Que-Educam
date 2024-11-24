import './aluno.css'
import Header from '../header'
import Card from '../Card'
import destaqueVideo from '../../imagens/Design destaque video (54).png'
import videos from '../../imagens/videos.png'
import historias from '../../imagens/historia.png'
import miniDicionario from '../../imagens/dicionario.png'
import jogos from '../../imagens/jogos.png'

function Aluno () {
    return (
  
    <div className="paginaAluno">
        <Header/>
        <div className='corpoDaPagina'>
            <div className='parteSuperior'>
                <img className='imgMulher' src= {destaqueVideo} alt='Mulher sinalizando'/>
                <div className='cards'>
                    <Card texto='Vídeos' texto2='Aprendendo a ler' img={videos}/>
                    <Card texto='Mini Dicionário' texto2='Vocabulário' img={miniDicionario}/>
                    <Card texto='Historinhas em Libras' texto2='Primeira leitura' img={historias}/>
                    <Card texto='Jogos' texto2='Em breve' img={jogos}/>
                </div>
            </div>
            <div className='parteInferior'>
                <h1>Aprendendo o Português</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zhP41rUdWNA?si=fdGvbmvffGtE8XJn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    

    )
}

export default Aluno