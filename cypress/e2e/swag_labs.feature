# features/swag_labs.feature
@regression
Feature: Swag Labs E2E Testing

  Background: Login
    Given I am on the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click login
    Then I should be redirected to the inventory page
  @smoke @cart
  Scenario: Select Items and Validate Cart
    Given I am logged in as "standard_user"
    When I add the item "Sauce Labs Backpack" to the cart
    And I add the item "Sauce Labs Bike Light" to the cart
    And I navigate to the cart
    Then the cart should contain "Sauce Labs Backpack"
    And the cart should contain "Sauce Labs Bike Light"
    And the cart item count should be 2

  @checkout
  Scenario: Checkout and Confirm Order
    Given I am logged in as "standard_user" with items in cart
    When I navigate to the cart
    And I proceed to checkout
    And I fill in checkout information "John" "Doe" "12345"
    And I continue to overview
    Then the overview should show total with tax
    When I finish checkout
    Then I should see the order confirmation "Thank you for your order!"

  @logout
  Scenario: Logout
    Given I am logged in as "standard_user"
    When I logout
    Then I should be redirected to the login page