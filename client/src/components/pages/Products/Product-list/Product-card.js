import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Product-card.css'

const ProductCard = ({ name, manufacturer, description, active, rate, imageFileName, _id }) => {

    return (
        <Col lg={4}>
            <Card className="product_card">
                <Card.Img variant="top" src={imageFileName} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className="btn btn-success btn-block btn-sm" to={`/productos/${_id}`}>Más información</Link>
                </Card.Body>
            </Card>
        </Col>
    )


}

export default ProductCard


