package pages;

import org.openqa.selenium.By;

import base.Base;

public class CustomerHomePage extends Base {
	By welcomeText = By.xpath("//h2[text()='Welcome David']");
	
	public String getWelcomeText() {
		return getText(welcomeText);
	}
}
