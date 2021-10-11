import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

const Home = (props) => {



    return (
        <>
            <section className="picture-home">
                    <Row>
                        <Col md={8}>
                            <h2 className="main_title ms-5">De la huerta a tu restaurante</h2>
                            <h4 className="main_subtitle ms-5">Compra frutas y hortalizas directamente a agricultores sin intermediarios</h4>
                        </Col>
                    </Row>
            </section>

            <div className="container-background">
                <Container className="second-container-home">
                    <Row >
                        <Col md={{ span: 8, offset: 3 }}>
                            <h2 className="second_container_title">Los mejores productos de la huerta a tu casa, solo en HarBest Market.</h2>
                            <p className="second-container-paragraph">HarBest Market, tu mejor oportunidad para comprar frutas y verduras frescas directamente de la huerta | Conectamos a TU restaurante con pequeños agricultores |</p>
                            <hr></hr>
                            <div className="button-area">
                            {
                                props.loggedUser
                                &&
                                    <Link className="btn btn-success btn-sm" to={'/productos/crear'}>Añade un nuevo producto</Link>
                            }
                            <Link className="btn btn-success btn-sm" to={'/productos'}>Listado de productos</Link>
                            <br />
                            <br />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Home
