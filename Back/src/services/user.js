const User = require('../models/user')


const getAll = async () => {
    return await User.getAllUsers();
} 


module.exports = {
    getAll
}