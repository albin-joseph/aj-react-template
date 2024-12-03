import { validationRegex } from './validation.regex';

export const isValidValue = (value: any, key: string) => {
  if (value === '') {
    return false;
  }

  const regex = getRegex(key);
  if (!regex) {
    return false;
  }
  const regexPattern = new RegExp(regex);
  return regex ? regexPattern.test(value) : false;
};

const getRegex = (key: string) => {
  switch (key) {
    case 'email':
      return validationRegex.EMAIL;
    case 'password':
      return validationRegex.PASSWORD;
    case 'phonenumber':
      return validationRegex.PHONENUMBER;
    case 'teamName':
      return validationRegex.TEAM_NAME;
    default:
      return null;
  }
};
