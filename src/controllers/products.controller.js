const Products = require('../models/products.models')
const uuid = require('uuid')

const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}
    
// getAllProducts()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const createProducts = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })

    return newProduct
}

// createProducts({
//     name: 'Energetica Score',
//     category: 'Bebida energetica',
//     price: 1290,
//     isAvailable: true
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    })

    return data
    
}

const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id
        }
    })
   
    return response
}

const deletProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
   return data 
}

module.exports = {
    getAllProducts,
    createProducts,
    getProductById,
    editProduct,
    deletProduct
}
