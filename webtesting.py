from selenium import webdriver
import time

driver = webdriver.Chrome("C:/Users/ASUS/Documents/praktikumpwl3/chromedriver.exe")
driver.get("http://localhost:3000/")
driver.find_element_by_id("name").send_keys("OG.Notail")
driver.find_element_by_id("email").send_keys("OG.Notail@gmail.com")
driver.find_element_by_id("password").send_keys("matikanakusetelahusai")
driver.find_element_by_id("password2").send_keys("matikanakusetelahusai")
driver.find_element_by_css_selector(".btn-success").click()


