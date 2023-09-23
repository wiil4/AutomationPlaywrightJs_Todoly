Feature: Create New Todo

Scenario: Create a new Todo in Inbox tab
    Given I navigate to home page
    And I login with "username" and "password"
    When I click on Inbox tab
    And I add new Todo item with name "New Todo"
    And I click on Add button
    Then I should see a new task with "New Todo" name