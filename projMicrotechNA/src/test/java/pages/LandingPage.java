package pages;

import org.openqa.selenium.By;

import base.Base;

public class LandingPage extends Base {

	By LoginBtn = By.xpath("//a[@href='elogin.php']");
	
	public void navigateURl() {
		driver.get("https://it.microtechlimited.com/");
	}
	public String getTitle() {
		return driver.getTitle();
	}
	public void click_Login_Btn() {
		click(LoginBtn);
	}
}
