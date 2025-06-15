Feature: Tooltips test

# Checking the display of tooltips on hover

Scenario: Hover over tooltips
  Given I open the tool tips page
  When I hover over each tooltip element
  Then tooltips should appear