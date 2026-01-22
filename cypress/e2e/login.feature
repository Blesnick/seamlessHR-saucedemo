@regression @login
Feature: Login
    @positive
    Scenario: Positive Login
        Given I am on the login page
        When I enter username "standard_user" and password "secret_sauce"
        And I click login
        Then I should be redirected to the inventory page
    @negative
    Scenario: Negative Login - Invalid Credentials
        Given I am on the login page
        When I login with invalid credentials "invalid_user" and "wrong_password"
        Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
    @negative
    Scenario: Negative Login - Locked Out User
        Given I am on the login page
        When I login with locked out credentials "locked_out_user" and "secret_sauce"
        Then I should see an error message "Epic sadface: Sorry, this user has been locked out."