Feature: Angular demo
  As an AutoQA
  I want to check the Angular page
  So I can show a nice demo, how automation basics work

  #@current
  Scenario: 1. The User should have access to Angular's main page
    Given the Angular page is loaded

    Then the Angular logo should be visible
    And the "GET STARTED" text should be displayed on the home page
    And the page title should be "Angular"

  Scenario: 2. The User should be able to reach the introduction page
    Given the Angular page is loaded

    When the "GET STARTED" button is clicked
    Then the "INTRODUCTION" page should be visible
    And the page title should be "Angular - Introduction to the Angular Docs"

  Scenario Outline: 3. The User should be able to search - term: <term>
    Given the Angular page is loaded

    # When I wait for 60 seconds
    When the "<term>" text is entered into the search bar
    And I wait for 5 seconds
    Then the suggestion list should be displayed
    And the link with "<text>" text should be present

    Examples:
    |term       |text         |
    |protractor |Testability  |
    |config     |Data         |