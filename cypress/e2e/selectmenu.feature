Feature: Select Menu functionality on demoqa.com

Scenario: Selecting options from various select menus
  Given I open the Select Menu page
  When I select "Group 2, option 1" in Select Value dropdown
  When I select "Other" in Select One dropdown
  And I select "Green" in Old Style Select Menu
  When I select "volvo" and "audi" in Multiselect Dropdown

Then The "Select Value" dropdown should contain "Group 2, option 1"
And The "Select One" dropdown should contain "Other"
And The "Old Style Select Menu" dropdown should contain "Green"
And The "Multiselect Dropdown" should contain "volvo" and "audi"