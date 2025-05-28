import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Noticia() {
    return (
        <Container className='mt-4'>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    <Form>  
                        <Form.Group className="mb-3" controlId="titulonoticia">
                            <Form.Label>Título da Notícia</Form.Label>
                            <Form.Control type="text" className='bg-primary-subtle' placeholder="Escreva aqui o título da notícia" />
                            <Form.Text className=".text-muted text-danger">
                                *Informe de forma clara e direta o título da notícia.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="conteudonoticia">
                            <Form.Label>Informe a Notícia</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Escreva aqui a sua notícia" className='bg-primary-subtle' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tiponotica">
                            <Form.Select aria-label="Selecione o tipo da notícia" className='bg-primary-subtle'>
                                <option>Selecione o tipo da notícia</option>
                                <option value="1">Ciência</option>
                                <option value="2">Educação</option>
                                <option value="3">Pesquisa</option>
                                <option value="4">Esportes</option>
                                <option value="5">Cultura</option>
                                <option value="6">Entretenimento</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}