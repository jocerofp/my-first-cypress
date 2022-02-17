# In VS code I suggest using plugin Cucumber (Gherkin) Full Support
# It shows the syntax and allows to check the step implementation

Feature: User login
    As a User
    I want to be able to log in
    To be able to use the application

    # custom tags can be added to run specific case runs
    # or handle before and after
    @my-custom-tag
    Scenario: Login with correct credentials
        Given I am on the "login" page
        When I provide correct credentials
        Then I should be on the "home" page

    # focus tag is the same as running it.only
    @focus 
    Scenario: Error handling for incorrect credentials
        Given I am on the "login" page
        When I provide incorrect credentials
            | username              | password    |
            | notExisting@gmail.com | Password123 |
        Then I should be on the "login" page
        And I should see "There is no user record corresponding to this identifier. The user may have been deleted." error message