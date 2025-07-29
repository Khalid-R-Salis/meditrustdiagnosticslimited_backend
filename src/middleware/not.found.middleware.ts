import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import AppLanguage from '../constants/app.language';

const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: AppLanguage.routeDoesNotExist});
}

export default routeNotFound;