# features/swag_labs.feature

Feature: Swag Labs E2E Testing

  Scenario: Positive Login
    Given I am on the login page
    When I login with valid credentials "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Negative Login - Invalid Credentials
    Given I am on the login page
    When I login with invalid credentials "invalid_user" and "wrong_password"
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Negative Login - Locked Out User
    Given I am on the login page
    When I login with locked out credentials "locked_out_user" and "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Select Items and Validate Cart
    Given I am logged in as "standard_user"
    When I add the item "Sauce Labs Backpack" to the cart
    And I add the item "Sauce Labs Bike Light" to the cart
    And I navigate to the cart
    Then the cart should contain "Sauce Labs Backpack"
    And the cart should contain "Sauce Labs Bike Light"
    And the cart item count should be 2

  Scenario: Checkout and Confirm Order
    Given I am logged in as "standard_user" with items in cart
    When I navigate to the cart
    And I proceed to checkout
    And I fill in checkout information "John" "Doe" "12345"
    And I continue to overview
    Then the overview should show total with tax
    When I finish checkout
    Then I should see the order confirmation "Thank you for your order!"

  Scenario: Logout
    Given I am logged in as "standard_user"
    When I logout
    Then I should be redirected to the login page