import AppLanguage from "../constants/app.language";

export const assertString = (input: string) => {
  if (input.trim().length === 0 || input.trim() === '' || input === null) {
    throw new Error(AppLanguage.stringEmpty);
  }
  return input;
}

export const assertNumber = (input: number) => {
  if (input < 0 || typeof input != 'number' || input === null) {
    throw new Error(AppLanguage.numberEmpty);
  }
  return input;
}

export const assertEnviromentables = (key: string) => {
  if ( process.env[key] === undefined || key === null) {
    throw new Error(AppLanguage.envNotDefined);
  }
  return key;
}