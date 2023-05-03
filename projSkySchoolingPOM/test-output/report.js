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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d112.0.5615.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MANIK\u0027, ip: \u0027192.168.31.82\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 112.0.5615.138, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\rjman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:5243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8971c27e00a923137c1d3231b01b30a4\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027elogin.php\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat base.Base.click(Base.java:12)\r\n\tat pages.LandingPage.click_Login_Btn(LandingPage.java:18)\r\n\tat stepDefinitions.TestCase_Employee_Login_Functionalities.i_click_on_Longin_Button_Menu(TestCase_Employee_Login_Functionalities.java:26)\r\n\tat ✽.I click on Longin Button Menu(file:///C:/Java/git/workspace/projSkySchoolingPOM/src/test/resources/features/TestCase_Employee_Login_Functionalities.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify I am in Employee login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.verify_I_am_in_Employee_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter login Id \"testpilot@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_enter_login_Id(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will be on empLoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestCase_Employee_Login_Functionalities.i_will_be_on_empLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
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