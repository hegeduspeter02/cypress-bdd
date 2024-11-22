Feature: Anonymous user interactions with UI and behaviors

    Scenario: If anon clicks on hire hero button, a dialog is opened
        Given I am on the home page
        When I click on the renting button
        Then I should see a hire warning dialog

    Scenario: If anon clicks on like hero button, a dialog is opened
        Given I am on the home page
        When I click on the like hero button
        Then I should see a like warning dialog
