const userService = require('../services/user');

const postUser = async (req, res) => {
    const userReq = req.body;
    const { user, token } = await userService.postUser(userReq);
    if (user === 'invalid') {
        return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json({ token });
};

const tofuncionando = async (req, res) => res.status(201).json('opaaaaaaaaaaaaaaaaa');

// const getUserAll = async (_req, res) => {
//     const users = await userService.getUserAll();
//     return res.status(200).json(users);
// };

// const getUserbyId = async (req, res) => {
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).json({ message: 'id not given' });
//     }
//     const user = await userService.getUserbyId(id);
//     if (user === 'invalid') {
//         return res.status(404).json({ message: 'User does not exist' });
//     }
//     return res.status(200).json(user);
// };

module.exports = {
    postUser,
    tofuncionando,
    // getUserAll,
    // getUserbyId,
};