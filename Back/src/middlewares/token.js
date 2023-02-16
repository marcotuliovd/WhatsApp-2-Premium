const jwt = require('jsonwebtoken');
require('dotenv/config');
const serviceUser = require('../services/user');

const key = process.env.JWT_SECRET || 'toppppppp';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token === undefined) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, key);
    const user = await serviceUser.getByUserEmail(decoded.payload.email);
    if (user === 'invalid') {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = validateToken;