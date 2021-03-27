module.exports = {
    port: process.env.PORT || 8081,
    db: {
       database : process.env.DB_NAME || 'amine',
       user: process.env.DB_USER || 'amine',
       password : process.env.DB_PASSWORD || 'amine',
       options : {
           dialect: process.env.DIALECT || 'sqlite',
           host: process.env.HOST || 'localhost',
           storage: './bricolage.sqlite'
       }
    },
    authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}