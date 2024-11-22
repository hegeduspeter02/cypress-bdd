Feature: I am successfully logged in with every type of user

  Scenario: I am successfully logged in with an admin
    Given I log in manually with "admin@test.com"
    Then I can see the logout button

  Scenario: I am successfully logged in with a regular user
    Given I log in manually with "test@test.com"
    Then I can see the logout button
