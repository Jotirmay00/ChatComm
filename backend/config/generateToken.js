const jwt = require('jsonwebtoken')

const generateToken = (id) => { 
    return jwt.sign({ id }, "Jotirmay", {
        expiresIn: "30d", 
        

    })
}


module.exports = generateToken