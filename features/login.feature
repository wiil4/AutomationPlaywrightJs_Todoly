Feature: Check Login Form

Scenario: Login with valid credentials
    Given I navigate to home page
    And I click on login button
    When I fill the login form with "<username>" and "<password"
    Then I should see Todoly's the main page

    Examples:
    | username | password |
    | willcorreos@gmail.com | todoly |