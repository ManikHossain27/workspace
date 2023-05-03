package pages;

import org.openqa.selenium.By;

import base.Base;

public class EmployeeHomePage extends Base{
	By welcomeText = By.xpath("//div//h2[text()='Welcome Test ']");
	
	public String getWelcomeText() {
		return getText(welcomeText);
	}
}
