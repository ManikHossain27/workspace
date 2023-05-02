package draft;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonItemSets {

	public static void main(String[] args) {
		WebDriver driver;
		ChromeOptions options= new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver(options);
		//navigate url
		driver.get("https://amazon.com");
		//Enter camera
		driver.findElement(By.xpath("//input[@id='twotabsearchtextbox']")).sendKeys("camera" + Keys.ENTER);
		
		List<WebElement> items = driver.findElements(By.xpath("//div[@data-component-type='s-search-result']"));
		System.out.println(items.size());
		for(WebElement item : items) {
			String itemName = item.findElement(By.xpath(".//a/span[@class='a-size-medium a-color-base a-text-normal']")).getText();
			System.out.println(itemName);
		}
		
		driver.quit();

	}//main

}//class
