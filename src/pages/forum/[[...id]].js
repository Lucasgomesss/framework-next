import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function Page() {
    const router = useRouter()
    const subnoticias = router.query.id
    return <>
        <Container className="text-center">
            <h1>Sub-Notícias: </h1>
                {Array.isArray(subnoticias)? subnoticias.map((subnoticia, index) => (
                    <p>Subnoticia: {subnoticia}, Indice do Vetor: {index}</p>
                )):
                <h2>Não encontrado</h2>}
        </Container>
    </>
}