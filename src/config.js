require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    dotEnv: process.env.NODE_ENV || 'development' ,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres', 
        name: process.env.DB_NAME || 'productos',
        pass: process.env.DB_PASS || 'root',
        port: process.env.DB_PORT || '5432'
    }
}

module.exports = config
