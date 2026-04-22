const jwt = require("jsonwebtoken");

function generateToken(user){
    const payload = {
        id: user.id,
        name: user.name,
        role: user.role
    };
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
}

module.exports = generateToken;