// const jwt = require('jsonwebtoken');

// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

require('dotenv').config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token');
      throw new Error('Invalid token'); // Throw an error if the token is invalid
    }

    // return updated request object
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
