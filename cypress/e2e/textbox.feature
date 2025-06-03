Feature: Textbox Testing
# How you check text in text box?
Scenario: Submit textbox with name
  Given I visit the textbox page
  When I enter "Hanna Ivanova" into the textbox
  When I submit the form
  #May be better use step "I should see "Hanna Ivanova" in the submitted text
  Then I should see the submitted text
