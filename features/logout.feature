Feature: LogOut Action

Scenario: LogOut
    Given I navigate to home page
    And I login with "username" and "password"
    And I see the main page
    When I click on logout button
    Then I should see the home page