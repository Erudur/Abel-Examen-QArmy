@BugsForm @Smoke
Feature: Bugs Form - Register

  Background:
    Given User is on the Bugs Form page

  # TC-01
  Scenario: Verify last name is required
    When User fills the form without last name
    And User clicks Register
    Then Last Name field should be invalid

  # TC-02
  Scenario: Verify phone enforces minimum 10 digits and rejects non-digits
    When User fills the form with phone "12345"
    And User clicks Register
    Then Phone field should be invalid
    When User refreshes and fills the form with phone "1234567890"
    And User clicks Register
    Then Phone field should be valid

  # TC-03
  Scenario: Verify email address format validation (common invalid)
    When User fills the form with email "plainaddress"
    And User clicks Register
    Then Email field should be invalid

  # TC-04
  Scenario: Verify password length boundaries [6,20]
    When User fills the form with password "abc12"
    And User clicks Register
    Then Password field should be invalid
    When User refreshes and fills the form with password "abc123"
    And User clicks Register
    Then Password field should be valid
    When User refreshes and fills the form with password "aaaaaaaaaaaaaaaaaaaaa"
    And User clicks Register
    Then Password field should be invalid

  # TC-05
  Scenario: Verify terms & conditions checkbox required and country selection handling
    When User fills the form without accepting terms
    And User clicks Register
    Then Terms checkbox should be invalid or required
    When User refreshes and fills the form selecting country "Argentina" and accepting terms
    And User clicks Register
    Then Country field should be valid
