import '../component/commands';

// Function to generate a random string of alphabetic characters
const generateRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Function to generate a random email
const generateRandomEmail = () => {
  const randomString = generateRandomString(8);
  return `user_${randomString}@example.com`;
};

// Function to select a date from the date picker
const selectDateFromPicker = (selector, day, month, year) => {
  cy.get(':nth-child(8) > .relative').click(); // Click to open the date picker
  cy.get(`.react-datepicker__day[aria-label="${month} ${day}, ${year}"]`).click(); // Select the specified date
};

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  it('should be authenticated across tests', () => {
    // Visit the page
    cy.visit('https://fly.rn-stage-fe.kuiperz.dev/');

    // Click on employee dropdown
    cy.get(':nth-child(2) > .child-dropdown > :nth-child(1) > a').click();


  });
});
