package pages;

import org.openqa.selenium.By;

import base.Base;

public class EmpLoginPage extends Base {
	By employeeLoginLabel = By.xpath("//h1[text()='Employee Login ']");
	By userIdBox = By.name("mailuid");
	By userPaasswordBox = By.name("pwd");
	By loginBtn = By.name("login-submit");

	
	public String getEmployeeLoginLabel() {
		//return driver.findElement(employeeLoginLabel).getText();
		return getText(employeeLoginLabel);
	}
	public void enterUserId(String user) {
		sendKeys(userIdBox, user);
	}
	public void enterUserPassword(String pass) {
		sendKeys(userPaasswordBox, pass);
	}
	public void clickLoginBtn() {
		click(loginBtn);
	}
}
