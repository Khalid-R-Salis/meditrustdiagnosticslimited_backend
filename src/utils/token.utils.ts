import jwt from 'jsonwebtoken';
import { assertEnviromentables } from './assertions.utils';
import { Roles } from '../models/user.model';

type User = {
  userId: string;
  fullName: string;
  role: Roles;
}

const JWT_SECRET = process.env[assertEnviromentables('JWT_SECRET')];
const createToken = (user: User) => {
  const token = jwt.sign(user, JWT_SECRET!, { expiresIn: '24h' });
  return token;
}

export default createToken;