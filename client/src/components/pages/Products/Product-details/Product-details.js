
import React, { Component } from 'react'
import ProductService from '../../../../service/product.service'
import './Product-details.css'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'


class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                manufacturer: '',
                description: '',
                active: '',
                rate: '',
                imageFileName: '',
                origin: '',
            },
        }
        this.productService = new ProductService()
    }

    componentDidMount = () => {
        const product_id = this.props.match.params.product_id
        this.productService
            .getProduct(product_id)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err))
    }

    deleteThisProduct = () => {

        const product_id = this.props.match.params.product_id


        this.productService
            .deleteProduct(product_id)
            .then(res => { this.props.history.push('/productos') })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <>
                <Container className="product-details">
                    <h1 className="mt-4 title_name">{this.state.product.name}</h1>
                    <Row className="align-items-center">
                        <Col md={4} >
                            <img className="product_img" src={this.state.product.imageFileName} alt={this.state.product.name} />
                        </Col>
                        <Col md={{ span: 6, offset: 1 }} >
                            <h3 className="title_name">Descripción</h3>
                            <p>{this.state.product.description}</p>
                            <hr />
                            <h3 className="title_name">Información del producto</h3>
                            <p>Origen: {this.state.product.origin}</p>
                            <p>Precio: {this.state.product.rate}€/kilo</p>
                            {this.state.product.active ? <p>Disponible: En stock</p> : <p>Disponible: Agotado</p>}
                            <p>Distribuidor: <i>{this.state.product.manufacturer}</i></p>
                            <hr />
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Link to="/productos" className="btn btn-sm btn-card">Volver</Link>
                        {
                            this.props.loggedUser
                            &&
                            <>
                                <Link className="btn btn-sm btn-card" to={`/productos/editar/${this.state.product._id}`}>Edita este producto</Link>
                                <Link onClick={() => this.deleteThisProduct()} className="btn btn-danger btn-sm" to={'/'}>Elimina este producto</Link>
                            </>
                        }
                    </div>
                    <br />
                    <br />
                </Container>
            </>
        )
    }
}

export default ProductDetails