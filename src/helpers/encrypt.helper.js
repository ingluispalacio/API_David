const bcrypt = require('bcrypt');
const  { config } = require('../config/auth');


const encrypt = async (password) => {
    try {
        const salt=parseInt(config.rounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

const compare = async (password, passwordUser) => {
    return await bcrypt.compare(password, passwordUser); 
};

module.exports = {
    encrypt, compare
};


