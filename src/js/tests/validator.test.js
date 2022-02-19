import Validator from '../validateUsername';

test.each([
  ['User_Name', true],
  ['12User', false],
  ['User15', false],
  ['User1555Name', false],
  ['User_', false],
])(
  'username validator test',
  (username, expected) => {
    const validator = new Validator(username);
    const result = validator.validateUsername();
    expect(result).toBe(expected);
  },
);
