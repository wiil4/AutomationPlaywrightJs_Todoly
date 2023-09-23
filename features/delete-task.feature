Feature: Deleting Todo item

Scenario: Delete previously created task with given name, in Inbox tab
    Given I navigate to home page
    And I login with "username" and "password"
    And I click on Inbox tab
    And I create a Todo with name "Deletable Todo"
    When I hover over the "Deletable Todo"
    And I click on options icon
    And I click on delete from options menu
    Then I should see a message bar confirming the deletion of task