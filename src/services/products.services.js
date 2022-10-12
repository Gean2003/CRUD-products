const productsController = require('../controllers/products.controller')

const getAllProducts = (req, res) => {
        productsController.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}

const postProduct = (req, res) => {
    
    const  data  = req.body

    if (data.name && data.category && data.price && data.isAvailable) {
        productsController.createProducts(data)
            .then((response)=> {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else {
        res.status(400).json({message: "migin data"})
    }

}

const getProductsById = (req, res) => {
        const id = req.params.id
        
        productsController.getProductById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
    
}

const patchProduct = (req ,res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body 

    productsController.editProduct(id, {name, category, price, isAvailable})
        .then(()=> {
            res.status(200).json({message: `User with id: ${id}, edited succesfully`})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
        
    
}

const deleteProduct = (req, res) => {
    const id = req.params.id

    productsController.deletProduct(id)
        .then(response => {
            if (response) {
                res.status(204).json()
            }else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
    
}

module.exports = {
    getAllProducts,
    postProduct,
    getProductsById,
    patchProduct,
    deleteProduct
}
