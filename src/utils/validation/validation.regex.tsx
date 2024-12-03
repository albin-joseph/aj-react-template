export enum validationRegex {
  EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
  PASSWORD = '.{4,}',
  PHONENUMBER = '^[0-9]{7,14}$',
  TEAM_NAME = `^.*$`,
  SPECIALCAHARCTERS = '[^A-Za-z0-9]',
}
