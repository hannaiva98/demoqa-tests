const { Given, When, Then, After } = require('@badeball/cypress-cucumber-preprocessor');
const selectMenuPage = require('../../pages/SelectMenuPage');

Given('I open the Select Menu page', () => {
  selectMenuPage.open();
});

When('I select {string} in Select Value dropdown', (optionText) => {
  selectMenuPage.selectValue(optionText);
});

When('I select {string} in Select One dropdown', (optionText) => {
  selectMenuPage.selectOne(optionText);
});

When('I select {string} in Old Style Select Menu', (optionText) => {
  selectMenuPage.selectOldStyle(optionText);
});

When('I select {string} and {string} in Multiselect Dropdown', (option1, option2) => {
  selectMenuPage.selectMultipleOptions([option1, option2]);
});

Then('The selected options should be displayed correctly', () => {
  selectMenuPage.verifySelectedValues({
    selectValue: 'Group 2, option 1',
    selectOne: 'Other',
    oldStyle: 'Green',
    multiSelect: ['volvo', 'audi']
  });
});

After(() => {
  cy.screenshot();
});