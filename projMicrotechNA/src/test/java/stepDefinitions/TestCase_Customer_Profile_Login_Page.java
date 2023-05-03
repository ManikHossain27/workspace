package stepDefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.CustomerHomePage;
import pages.CustomerLoginPage;

public class TestCase_Customer_Profile_Login_Page {
	CustomerLoginPage customerLoginPage = new CustomerLoginPage();
	CustomerHomePage customerHomePage = new CustomerHomePage();
	
	@When("Click Customer Login")
	public void click_Customer_Login() {
	    customerLoginPage.clickcustomerLoginMenuBtn();
	}

	@Then("I enter Customer Id {string}")
	public void i_enter_Customer_Id(String string) {
	    customerLoginPage.enterCustomerId(string);
	}

	@Then("I enter Customer Password {string}")
	public void i_enter_Customer_Password(String string) {
	    customerLoginPage.enterCustomerPassword(string);
	}

	@When("I click Login button")
	public void i_click_Login_button() {
	    customerLoginPage.clickLoginbtn();
	}

	@Then("I will be on customerLoginPage")
	public void i_will_be_on_customerLoginPage() {
		assertEquals("Welcome David", customerHomePage.getWelcomeText());
	}

}
