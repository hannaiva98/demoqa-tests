Feature: Tooltips page tests

Scenario: Hover over tooltip elements
  Given I open the tool tips page
  When I hover over each tooltip element
  Then tooltips should appear