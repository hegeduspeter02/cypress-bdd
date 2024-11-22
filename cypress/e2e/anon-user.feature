Feature: Anonymous user interactions with UI and behaviors

    Backgound:
        Given I am on the home page

    Rule: seperate test

    Scenario: If anon clicks on hire hero button, a dialog is opened
        When I click on the "hire" hero button
        Then I can see the anon warning with text: "You must log in to hire this hero."

    Scenario: If anon clicks on like hero button, a dialog is opened
        When I click on the "like" hero button
        Then I can see the anon warning with text: "You must log in to like."

    Rule: Outline

    Scenario Outline: I click on <buttonType> button an error dialog is opened
        Given I am on the home page
        When I click on the "<buttonType>" hero button
        Then I can see the anon warning with text: "<warningText>"

        Examples:
            | buttonType | warningText                            |
            | hire       | "You must log in to hire this hero.  |
            | like       | "You must log in to like." |