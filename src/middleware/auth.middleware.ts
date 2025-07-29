import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorException from '../errors/custom.error';
import jwt, { JwtPayload} from 'jsonwebtoken';
import AppLanguage from '../constants/app.language';
import { Roles } from '../models/user.model';

const auth = (userType: Roles) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
      throw new ErrorException(AppLanguage.authenticationTokenMissing, StatusCodes.UNAUTHORIZED);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload
    
    if (!decoded) {
      throw new ErrorException(AppLanguage.invalidToken, StatusCodes.UNAUTHORIZED);
    }

    if (userType && decoded.role != userType) {
      throw new ErrorException(AppLanguage.unauthorizedAccess, StatusCodes.FORBIDDEN);
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log('Error in JWT auth:', err);
    next(err);
  }
}

export default auth;