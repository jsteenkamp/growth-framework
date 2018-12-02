import config from 'config';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';
const JWT_SECRET = config.get('jwt.secret');
const JWT_EXPIRES = parseInt(config.get('jwt.expires'), 10);

export const generateToken = payload =>
  jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });

export const payloadFromToken = async req => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace('Bearer ', '');
    try {
      return await jwt.verify(token, JWT_SECRET, (err, payload) => {
        // you could verify payload against database/session
        return err ? null : payload;
      });
    } catch (e) {
      // apollo server AuthenticationError
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
  return null;
};

export default { generateToken, payloadFromToken };
