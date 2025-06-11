
import { Card, Col, Container, Row } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

export async function getServerSideProps() {
    return {
        props: {
            repo:
                { "var1": "Info A", "var2": "FW1", "nome": "IFMS" }
        }
    }
}
export default function Gsspcard({ repo }) {

    return (
        <>
            <Container className="text-center">
                <h1>Server Side Props - Card</h1>
                {Array.isArray(repo) ? "sim" : "não"}
                {Object.entries(repo).map(([key, value]) => (
                    <p>{key}: {value}</p>
                ))}
            </Container>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.isArray(noticias) ?
                        noticias.map(noticia =>
                            <Col key={noticia.idnoticia}>
                                <Card>
                                    <Card.Header>{noticia.titulonoticia}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{noticia.tiponoticia}</Card.Title>
                                        <Card.Text>{noticia.conteudonoticia}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{new Date(noticia.datahoracadastro).toLocaleString()}</Card.Footer>
                                </Card>
                            </Col>
                        )
                        : "não"}
                </Row>
            </Container >
        </>
    )
}
