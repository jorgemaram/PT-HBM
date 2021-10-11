import React, { Component } from 'react'
import FilesService from './../../../../service/upload.service'
import { Container, Form, Button } from 'react-bootstrap'
import ProductService from './../../../../service/product.service'

class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            manufacturer: '',
            description: '',
            active: true,
            rate: 0,
            imageFileName: '',
            origin: ''
        }

        this.filesService = new FilesService()
        this.productService = new ProductService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.productService
            .saveProduct(this.state)
            .then(res => { this.props.history.push('/productos') })
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({ ...this.state, imageFileName: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <div style={{ backgroundColor: "#FDFAF6" }}>

                    <Container style={{ paddingBottom: "120px", paddingTop: "50px" }}>
                        <h1> Añade un nuevo producto</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="manufacturer">
                                <Form.Label>Vendedor</Form.Label>
                                <Form.Control type="text" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
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
                                <Form.Control type="number" name="rate" value={this.state.rate} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="origin">
                                <Form.Label>Origen</Form.Label>
                                <Form.Control type="text" name="origin" value={this.state.origin} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mt-1" >Imagen del producto</Form.Label>
                                <br/>
                                <Form.Control type="file" onChange={this.handleImageUpload} className="mt-1 mb-3" />
                            </Form.Group>
                            <Button className="btn-success" type="submit">Registra el producto</Button>
                        </Form>
                    </Container>
                </div>
            </>
        )
    }
}

export default ProductForm