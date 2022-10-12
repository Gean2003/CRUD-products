const express = require('express')
const config = require('./config')

const db = require('./database/database')
const Products = require('./models/products.models')
const productRouter = require('./routes/products.routes')

const app = express()

app.use(express.json())


db.authenticate()
        .then( () => console.log('DB Authentication succesfully'))
        .catch( err => console.log(err) )

db.sync() 
    .then( ()=> console.log('Database connect'))
    .catch( err => console.log(err) )

Products

app.get('/', (req, res) => {
    res.status(200).json({message: 'status ok'})
})



app.listen(config.port, () => {
    console.log(`server on port ${config.port}`);
} )

app.use('/products', productRouter)
