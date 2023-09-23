Feature: Check SignUp Form

Scenario: SignUp with unregistered email
    Given I navigate to home page
    And I click on signup button
    When I fill the signup form with "<username>" and "<password"
    Then I should see Todoly's the main page

    Examples:
    | username | password |
    | hosemok385@cdeter.com | todoly |