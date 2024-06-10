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

    // Click on Add new button
    cy.get('.cursor-pointer.text-white.outline-none.font-inter.font-medium.text-sm.rounded-md.px-4.py-2.bg-primary-500').click();

    // Click on the optional field (assuming it's a dropdown)
    cy.get('.px-3 > .mb-3').click();

    // Leave the optional field blank and submit the form
    cy.get('.fill').click(); // Assuming this triggers form submission

    // Type random values in the input fields
    const firstName = generateRandomString(8);
    const lastName = generateRandomString(8);
    const email = generateRandomEmail();
    cy.get('#first_name').type(firstName);
    cy.get('#last_name').type(lastName);
    cy.get('#email').type(email);

    // Select the first option in the employment type dropdown
    cy.get(':nth-child(7) > .css-b62m3t-container > .select__control').click(); // Click to open the dropdown
    cy.get('#react-select-3-option-0').click(); // Click to select the first option

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Select the current date as the starting date
    selectDateFromPicker(':nth-child(8) > .relative > .react-datepicker-wrapper > .react-datepicker__input-container > .lg\:min-w-\[300px\]', currentDay.toString(), currentMonth, currentYear.toString());

    // Calculate the end date (3 years from the starting date)
    const endDate = new Date(currentYear + 3, currentMonth, currentDay);
    const endDay = endDate.getDate();
    const endMonth = endDate.toLocaleString('default', { month: 'long' });
    const endYear = endDate.getFullYear();

    // Select the end date
    selectDateFromPicker(':nth-child(9) > .relative', endDay.toString(), endMonth, endYear.toString());

    // Calculate the close date (5 years from the starting date)
    const closeDate = new Date(currentYear + 5, currentMonth, currentDay);
    const closeDay = closeDate.getDate();
    const closeMonth = closeDate.toLocaleString('default', { month: 'long' });
    const closeYear = closeDate.getFullYear();

    // Select the close date
    selectDateFromPicker(':nth-child(11) > .relative', closeDay.toString(), closeMonth, closeYear.toString());

    // Submit the form
    cy.get('.fill').click(); // Assuming this triggers form submission

    // Assert that the form submission is successful
    // For example, you could assert that a success message appears
    cy.contains('.success-message', 'Form submitted successfully').should('be.visible');
  });
});
