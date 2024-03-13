const jwt = require('jsonwebtoken');
const  { config } = require('../config/auth');

const expires=config.expires;

const generateToken = (user) => {
    try {
        const payload = {
            user: user
        };

        const token = jwt.sign(payload, config.secret, { expiresIn: expires });

        return token;
    } catch (error) {
        throw error;
    }
}

module.exports={
    generateToken, expires
};
