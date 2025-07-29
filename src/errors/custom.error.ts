class ErrorException extends Error {
  public readonly isOperational: boolean;

  constructor(message: string, public readonly statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorException;