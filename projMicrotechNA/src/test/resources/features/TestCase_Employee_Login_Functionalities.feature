#Author: manik.hossain_27@outlook.com
#User Story: MNA-7 Login Functionality

Feature: Employee Login Functionalities

Scenario: Verify Employee Login Functionalities
Given I am in landing page
When I click on Longin Button Menu
Then Verify I am in Employee login Page
And I enter login Id "testpilot@gmail.com"
And I enter Password "1234"
And Click on Login Button
Then I will be on empLoginPage