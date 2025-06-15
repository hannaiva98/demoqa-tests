Feature: Textbox Testing

Scenario: Submit textbox with name
  Given I visit the textbox page
  When I enter "Hanna Ivanova" into the textbox
  And I submit the form
 Then I should see the submitted text