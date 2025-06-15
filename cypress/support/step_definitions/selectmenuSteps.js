const { Given, When, Then, After } = require('@badeball/cypress-cucumber-preprocessor');
const selectMenuPage = require('../../pages/SelectMenuPage');

Given('I open the Select Menu page', () => {
  selectMenuPage.open();
});

When('I select {string} in Select Value dropdown', (optionText) => {
  selectMenuPage.selectValue(optionText);
  cy.wrap(optionText).as('selectedValue');
});

When('I select {string} in Select One dropdown', (optionText) => {
  selectMenuPage.selectOne(optionText);
  cy.wrap(optionText).as('selectedOne');
});

When('I select {string} in Old Style Select Menu', (optionText) => {
  selectMenuPage.selectOldStyle(optionText);
  cy.wrap(optionText).as('oldStyle');
});

When('I select {string} and {string} in Multiselect Dropdown', (option1, option2) => {
  selectMenuPage.selectMultipleOptions([option1, option2]);
  cy.wrap([option1, option2]).as('multiSelect');
});

Then('The selected options should be displayed correctly', function () {
  cy.get('@selectedValue').then(selectValue => {
    cy.get('@selectedOne').then(selectOne => {
      cy.get('@oldStyle').then(oldStyle => {
        cy.get('@multiSelect').then(multiSelect => {
          selectMenuPage.verifySelectedValues({
            selectValue,
            selectOne,
            oldStyle,
            multiSelect,
          });
        });
      });
    });
  });
});

Then('The {string} dropdown should contain {string}', (dropdownName, expectedValue) => {
  switch (dropdownName) {
    case 'Select Value':
      selectMenuPage.verifySelectedValue('selectValue', expectedValue);
      break;
    case 'Select One':
      selectMenuPage.verifySelectedValue('selectOne', expectedValue);
      break;
    case 'Old Style Select Menu':
      selectMenuPage.verifySelectedValue('oldStyle', expectedValue);
      break;
    default:
      throw new Error(`Unknown dropdown name: ${dropdownName}`);
  }
});

Then('The {string} should contain {string} and {string}', (dropdownName, option1, option2) => {
  if (dropdownName === 'Multiselect Dropdown') {
    // Проверяем, что мультивыборочный dropdown содержит оба значения
    selectMenuPage.verifySelectedValuesInMultiSelect([option1, option2]);
  } else {
    throw new Error(`Step definition for dropdown "${dropdownName}" is not implemented`);
  }
});

After(() => {
  cy.screenshot();
});
