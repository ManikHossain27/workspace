package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LandingPage;

public class TestCase_Landing_Page_Verification {
	
	LandingPage landingPage = new LandingPage();
	
	
	@Given("I am in Chrome Browser")
	public void i_am_in_Chrome_Browser() {
	    landingPage.navigateURl();
	}

	@When("I navigate landing page url")
	public void i_navigate_landing_page_url() {
	    landingPage.navigateURl();
	}

	@Then("The Landing Page appear")
	public void the_Landing_Page_appear() {
		landingPage.getTitle();
	}
	    
}
