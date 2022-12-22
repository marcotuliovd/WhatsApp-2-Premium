const jwt = require('jsonwebtoken');
const model = require('../models/index');
require('dotenv').config();

const key = process.env.JWT_SECRET || 'toppppppp';

const postUser = async (userReq) => {
    const { userName, name, birthDate, email, password, icon, verification } = userReq; 
    const user = await model.User.findOne({ where: { email } });
    if (user === null) {
        const { id } = await 
            model.User.create({ userName, name, birthDate, email, password, icon, verification });
        const token = jwt.sign({ payload: { email, id } }, key,
            { algorithm: 'HS256', expiresIn: '480min' });
        return { user: email, token };
    }
    return { user: 'invalid' };
};

// const getByUserEmail = async (email) => {
//     const user = await model.User.findOne({ where: { email } });
//     if (user === null) {
//         return 'invalid';
//     }
//     return user.dataValues;
// };

// const getUserAll = async () => {
//     const users = await model.User.findAll();
//     const response = users.map((user) => {
//         const objUser = {
//             id: user.id,
//             displayName: user.displayName,
//             email: user.email,
//             image: user.image,
//           };
//           return objUser;
//     });
//     return response;
// };

// const getUserbyId = async (id) => {
//     const user = await model.User.findOne({ where: { id } });
//     if (!user || user === null) {
//         return 'invalid';
//     }
//     const userbyId = {
//         id: user.id,
//         displayName: user.displayName,
//         email: user.email,
//         image: user.image,
//     };
//     return userbyId;
// };

module.exports = {
    postUser,
    // getByUserEmail,
    // getUserAll,
    // getUserbyId,
};