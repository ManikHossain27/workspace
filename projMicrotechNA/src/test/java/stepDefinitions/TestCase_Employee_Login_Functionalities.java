package stepDefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.EmpLoginPage;
import pages.EmployeeHomePage;
import pages.LandingPage;

public class TestCase_Employee_Login_Functionalities {
	
	LandingPage landingPage = new LandingPage();
	EmpLoginPage empLoginPage = new EmpLoginPage();
	EmployeeHomePage employeeHomePage = new EmployeeHomePage();
	
	
	@Given("I am in landing page")
	public void i_am_in_landing_page() {
	    landingPage.navigateURl();
	}

	@When("I click on Longin Button Menu")
	public void i_click_on_Longin_Button_Menu() {
	    landingPage.click_Login_Btn();
	}

	@Then("Verify I am in Employee login Page")
	public void verify_I_am_in_Employee_login_Page() {
	    //empLoginPage.getEmployeeLoginLabel();
	    assertEquals("Employee Login", empLoginPage.getEmployeeLoginLabel());
	}

	@Then("I enter login Id {string}")
	public void i_enter_login_Id(String string) {
	    empLoginPage.enterUserId(string);
	}

	@Then("I enter Password {string}")
	public void i_enter_Password(String string) {
	    empLoginPage.enterUserPassword(string);
	}

	@Then("Click on Login Button")
	public void click_on_Login_Button() {
	    empLoginPage.clickLoginBtn();
	}

	@Then("I will be on empLoginPage")
	public void i_will_be_on_empLoginPage() {
	    assertEquals("Welcome Test", employeeHomePage.getWelcomeText());
	}
}
