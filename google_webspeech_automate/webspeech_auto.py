from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

class element_has_src(object):
  def __init__(self, locator, src):
    self.locator = locator
    self.src = src

  def __call__(self, driver):
    element = driver.find_element(*self.locator)
    if self.src in element.get_attribute("src"):
        return element
    else:
        return False

driver = webdriver.Chrome()
driver.get("https://www.google.com/intl/it/chrome/demos/speech.html")

#Trovo i vari elementi della pagina
lan = driver.find_element_by_id("select_language")
start = driver.find_element_by_id("start_img")
final_text = driver.find_element_by_id("final_span")
middle_text = driver.find_element_by_id("interim_span")

#Cambio lingua
lan.send_keys("italiano")
print("Inizio a registrare...")
while True:
    start.click()
    wait = WebDriverWait(driver,100000)
    wait.until(element_has_src((By.ID, "start_img"), "/intl/en/chrome/assets/common/images/content/mic.gif"))
    with open("transcript.txt", "a") as myfile:
        myfile.write(final_text.text)
        myfile.write(middle_text.text)
        myfile.write(" ")














