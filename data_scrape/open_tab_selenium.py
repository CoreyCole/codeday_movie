from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class Movie:
	def __init__():
		name=""
		rating=""
		cover_url=""
		description=""

driver = webdriver.Firefox()
driver.get("http://www.rottentomatoes.com/m/paul_blart_mall_cop_2/")
driver.close()
