$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TestCase_Customer_Profile_Login_Page.feature");
formatter.feature({
  "name": "Customer Profile Login page.",
  "description": "As a customer\nI want to login  with a user id and password\nSo that i can see the customer home page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_am_in_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Longin Button Menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_click_on_Longin_Button_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Customer_Profile_Login_Page.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Customer_Profile_Login_Page.i_enter_Customer_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Customer_Profile_Login_Page.i_enter_Customer_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be on customerLoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Customer_Profile_Login_Page.i_will_be_on_customerLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestCase_Employee_Login_Functionalities.feature");
formatter.feature({
  "name": "Employee Login Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Employee Login Functionalities",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_am_in_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Longin Button Menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_click_on_Longin_Button_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I am in Employee login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.verify_I_am_in_Employee_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login Id \"testpilot@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_enter_login_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be on empLoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_will_be_on_empLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestCase_Landing_Page_Verification.feature");
formatter.feature({
  "name": "Landing page Verification.",
  "description": "As a Customer\nI want to see landing page\nSo that i can do login",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify landing page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Landing_Page_Verification.i_am_in_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate landing page url",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Landing_Page_Verification.i_navigate_landing_page_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Landing Page appear",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Landing_Page_Verification.the_Landing_Page_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});