#Author: manik.hossain_27@outlook.com
#User Story: MNA-6 Customer Profile Login page

Feature: Customer Profile Login page.
As a customer
I want to login  with a user id and password
So that i can see the customer home page

Scenario: Login as an Customer
Given I am in landing page
When I click on Longin Button Menu
And Click Customer Login
Then I enter Customer Id "david@gmail.com"
And I enter Customer Password "1234"
When I click Login button
Then I will be on customerLoginPage


