class AppLanguage {
  static databaseConnected = 'Database Connected';
  static errorConnectingToDatabase = 'Error connecting to database.';
  static tooManyRequests = 'Too many requests. Try again later.';
  static retryingDatabase = (num: number) => `Retrying in ${num} seconds.`;
  static gmail = 'gmail';
  static OAuth2 = 'OAuth2';
  static mailSentSuccessfully = (mail: string) => `Mail sent to ${mail} successfully`;
  static authenticationTokenMissing = 'Authentication token is missing';
  static invalidToken = 'Invalid token';
  static unauthorizedAccess = 'Unauthorized access';
  static somethingWentWrong = 'Something went wrong, please try again later';
  static validationError = 'ValidationError';
  static validationErrorMessage = 'Validation Error, check fields and try again';
  static duplicateEntry = 'Duplicate entry, user is already registered';
  static castError = 'CastError';
  static invalidDataType = (err: any) => `Invalid data type for field, field: ${err.path}`;
  static routeDoesNotExist = 'Route does not exist';
  static connectionStringEmpty = 'Connection string is empty';
  static serverUpAndRunning = 'Server is up and running!!';
  static stringEmpty = 'Value entered not a string';
  static numberEmpty = 'Value entered not a number';
  static envNotDefined = 'Enviroment variable not defined in .env';
}

export default AppLanguage;