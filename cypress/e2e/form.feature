Feature: Automation Practice Form

  Scenario: Заполнение обязательных полей формы
    Given I open the practice form page
    When I fill in the required fields
    And I click the submit button
    Then I should see a confirmation popup with correct data