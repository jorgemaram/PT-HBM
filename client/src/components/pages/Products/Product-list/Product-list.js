import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductService from '../../../../service/product.service'
import ProductCard from './Product-card'
import Loader from '../../../shared/Spinner/Loader'


class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            user: "",
            showModal: false
        }

        this.productService = new ProductService()
    }

    componentDidMount = () => {
        this.refreshProducts()
        this.isLoggedUser()
    }

    refreshProducts = () => {

        this.productService
            .getProducts()
            .then(res => this.setState({ products: res.data, filteredProduct: [...res.data] }))
            .catch(err => console.log(err))

    }

    isLoggedUser = () => { this.props.loggedUser && this.setState({ user: this.props.loggedUser._id }) }

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <>
                <div className="product_list">
                    <Container>
                        <>
                            <h1 style={{ color:"#1C4C23"}}>Listado de productos</h1>

                            <hr></hr>
                            <Row>
                                {
                                    this.props.loggedUser ? 
                                    (this.state.products ? this.state.products.map(elm => <ProductCard key={elm._id} userId={this.state.user} {...elm} />) : <Loader />)
                                        :
                                    (    
                                    this.state.products ?
                                    this.state.products.filter(elm => elm.active === true)
                                                    .map(elm => <ProductCard key={elm._id} userId={this.state.user} {...elm} />)
                                    : <Loader />)
                                    }
                            </Row>
                            <br></br>
                        </>
                    </Container>
                </div>
            </>
        )
    }
}

export default ProductList
