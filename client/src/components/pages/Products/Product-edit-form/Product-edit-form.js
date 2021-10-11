import React, { Component } from 'react'
import ProductService from './../../../../service/product.service'
import { Container, Form, Button } from 'react-bootstrap'

class ProductForm extends Component {

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

    handleInputChange = e => this.setState({ product: { ...this.state.product, [e.target.name]: e.target.value } })

    handleSubmit = e => {

        const product_id = this.props.match.params.product_id
        e.preventDefault()

        this.productService
            .editProduct(product_id, this.state.product)
            .then(res => this.props.history.push('/productos'))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div>
                <Container style={{ paddingBottom: "120px", paddingTop: "50px" }}>
                    <h1> Agrega un nuevo producto</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.product.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="manufacturer">
                            <Form.Label>Vendedor</Form.Label>
                            <Form.Control type="text" name="manufacturer" value={this.state.product.manufacturer} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="description" value={this.state.product.description} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="length">
                            <Form.Label>Género</Form.Label>
                            <Form.Control as="select" defaultValue="Elige una opción" name="active" value={this.state.active} onChange={this.handleInputChange} >
                                <option value="true">En stock</option>
                                <option value="false">Fuera de stock</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="rate">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="rate" value={this.state.product.rate} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="origin">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" name="origin" value={this.state.product.origin} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-1" >Imagen del producto</Form.Label>
                            <br />
                            <Form.Control type="file" onChange={this.handleImageUpload} className="mt-1 mb-3" />
                        </Form.Group>
                        <Button className="btn-success" type="submit">Edita el producto</Button>
                    </Form>
                </Container>
            </div >
        )
    }
}

export default ProductForm