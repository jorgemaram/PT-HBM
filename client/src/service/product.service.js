import axios from 'axios'

export default class ProductService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/products',
            //baseURL: `${process.env.REACT_APP_API_URL}/products`,
        })
    }

    getProducts = () => this.apiHandler.get('/getAllProducts')
    getProduct = productId => this.apiHandler.get(`/getOneProduct/${productId}`)
    saveProduct = productInfo => this.apiHandler.post('/newProduct/', productInfo)
    editProduct = (productId, product) => this.apiHandler.put(`/editProduct/${productId}`, product)
    deleteProduct = productId => this.apiHandler.delete(`/deleteProduct/${productId}`)

}