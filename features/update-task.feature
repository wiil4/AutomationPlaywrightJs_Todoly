Feature: Update Todo Name

Scenario: Update previously created task name in Inbox tab
    Given I navigate to home page
    And I login with "username" and "password"
    And I click on Inbox tab
    And I create a Todo with name "Updatable Todo"
    When I hover over the created Todo
    And I click on options icon
    And I click on edit from options menu
    And I change the Todo name to "Updated Todo"
    And I press enter
    Then I should see the task with the name updated