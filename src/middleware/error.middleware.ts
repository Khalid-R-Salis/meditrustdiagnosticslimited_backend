import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import ErrorException from '../errors/custom.error';
import AppLanguage from '../constants/app.language';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  let customError = {
    message: err.message || AppLanguage.somethingWentWrong,
    statusCode: err.statusCode || 500
  }

  if (err instanceof ErrorException && err.isOperational) {
    customError.message = err.message;
    customError.statusCode = err.statusCode;
  } 
  
  if (err.name === AppLanguage.validationError) {
    customError.message = AppLanguage.validationErrorMessage,
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code === 11000) {
    customError.message = AppLanguage.duplicateEntry,
    customError.statusCode = StatusCodes.CONFLICT; 
  }

  if (err.name === AppLanguage.castError) {
    customError.message = AppLanguage.invalidDataType(err);
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  res.status(customError.statusCode).json({ errorMsg: customError.message });
}

export default errorHandler;