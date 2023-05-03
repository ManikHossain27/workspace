package pages;

import org.openqa.selenium.By;

import base.Base;

public class CustomerLoginPage extends Base {
	By customerLoginMenuBtn = By.xpath("//a[@href='clogin.php']");
	By customerLoginLabel = By.xpath("//div/h1[text()='Customer Login ']");
	By customerId = By.name("mailuid");
	By customerPasword = By.name("pwd");
	By loginBtn = By.name("login-submit");
	
	public void clickcustomerLoginMenuBtn() {
		click(customerLoginMenuBtn);
	}
	public String getCustomerLoginLabel() {
		return getText(customerLoginLabel);
	}
	public void enterCustomerId(String value) {
		sendKeys(customerId, value);
	}
	public void enterCustomerPassword(String value) {
		sendKeys(customerPasword, value);
	}
	public void clickLoginbtn() {
		click(loginBtn);
	}
}
