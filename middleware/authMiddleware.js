const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '').trim();
  if (!token)
    return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('Decoded user:', req.user);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid.' });
  }
};

module.exports = auth;
