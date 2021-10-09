// Seed here!
const mongoose = require('mongoose')
const Product = require('../models/product.model')

const dbtitle = 'Harbest-Market'
mongoose.connect(process.env.DB_REMOTE, { useUnifiedTopology: true, useNewUrlParser: true })




const products = [
    {
        "name": "Lechuga iceberg",
        "manufacturer": "Frutas Paco",
        "description": "La lechuga más fresquita del mercado",
        "active": true,
        "rate": 0.79,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770046/Harbest/lechuga_iceberg_xxtuwg.jpg",
        "origin": "Murcia",
    },
    {
        "name": "Cebolla",
        "manufacturer": "Frutería Lola",
        "description": "Una cebolla de primera calidad",
        "active": true,
        "rate": 1.15,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770047/Harbest/mockup-graphics-bC1fXU1v98U-unsplash_pg0ejm.jpg",
        "origin": "Albacete",
    },
    {
        "name": "Uva negra",
        "manufacturer": "Frutas Paco",
        "description": "Las primeras uvas de temporada",
        "active": true,
        "rate": 1.29,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770047/Harbest/rajesh-rajput-y2MeW00BdBo-unsplash_r8sgjp.jpg",
        "origin": "Vinalopó",
    },
    {
        "name": "Fresas",
        "manufacturer": "Frutería Tomás",
        "description": "Las mejores para un postre",
        "active": true,
        "rate": 1.99,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770047/Harbest/maksim-shutov-IXOjM_g-XBQ-unsplash_p7n4fn.jpg",
        "origin": "Huelva",
    },
    {
        "name": "Cebolla roja",
        "manufacturer": "Jesús e hijos fruteros",
        "description": "El mejor acompañante",
        "active": true,
        "rate": 0.99,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770047/Harbest/paul-magdas-SSIwIRCu7bM-unsplash_xw7u3l.jpg",
        "origin": "Ciudad Real",
    },
    {
        "name": "Plátano canario",
        "manufacturer": "Frutería canaria",
        "description": "Los plátanos más sabrosos",
        "active": true,
        "rate": 2.45,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770046/Harbest/anastasia-eremina-VI2rIoZUrks-unsplash_vfhm6c.jpg",
        "origin": "La Palma",
    },
    {
        "name": "Tomate ensalada",
        "manufacturer": "Frutas Paco",
        "description": "Una buena ensalada con ellos",
        "active": true,
        "rate": 1.25,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770046/Harbest/josephine-baran-g4wzhY8qiMw-unsplash_el49tk.jpg",
        "origin": "Cáceres",
    },
    {
        "name": "Ajo blanco",
        "manufacturer": "Jesús e hijos fruteros",
        "description": "Los odiados por vampiros",
        "active": true,
        "rate": 1.45,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1610735108/Phone%20cave/IPhone_7_aofiyd.png",
        "origin": "Murcia",
    },
    {
        "name": "Melocotón",
        "manufacturer": "Frutería Tomás",
        "description": "Bocado exquisito",
        "active": true,
        "rate": 4.95,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770045/Harbest/masa-zeks-P_n9OZOcGrw-unsplash_eflvu3.jpg",
        "origin": "Toledo",
    },
    {
        "name": "Patata para freir",
        "manufacturer": "Frutería Tomás",
        "description": "Las mejores",
        "active": true,
        "rate": 3.96,
        "imageFileName": "https://res.cloudinary.com/jorgemaram/image/upload/v1633770045/Harbest/hai-nguyen-LSZfNPVZjTw-unsplash_c8znca.jpg",
        "origin": "Alicante",
    }
]


Product
    .create(products)
    .then(allProductsCreated => {
        console.log(`Created ${allProductsCreated.length} products`)
        mongoose.connection.close();
    })
    .catch(err => console.log('It was a mistake,', err))