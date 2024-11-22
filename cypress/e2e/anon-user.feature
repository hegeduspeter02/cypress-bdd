Feature: Anonymous user interactions with UI and behaviors

    Scenario: If anon clicks on renting button, a dialog is opened
        Given I am on the home page
        When I click on the renting button
        Then I should see a warning dialog