import { Container } from 'react-bootstrap'
import Cards from '../componentes/cards'
export async function getServerSideProps(req) {
    const res = await fetch('http://next-lucas-gomes.vercel.app/api/noticias/' + req.query.id)
    const repo = await res.json()
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container>
            <Cards idnoticia={noticia.idnoticia} titulonoticia={noticia.titulonoticia}
                tiponoticia={noticia.tiponoticia}  conteudonoticia={noticia.conteudonoticia}
                datahoracadastro={noticia.datahoracadastro} />
        </Container>
    </>
}