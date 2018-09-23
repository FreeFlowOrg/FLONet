import wikipedia
import requests
from bs4 import BeautifulSoup


def jargon_search(term):
	return wikipedia.summary(term, sentences = 4)


def hackathon_search(country):
	base = "https://www.hackathon.com/country/"
	base += country

	response = requests.get(base, verify=False)

	soup = BeautifulSoup(response.content, "html.parser")

	comm_title_box = soup.find_all("a", attrs={"class":"ht-eb-card__title"})

	comm_date_box = soup.find_all("div", attrs={"class":"ht-eb-card__left"})

	idt_title_box = soup.find_all("a", attrs={"class":"ht-idt-card__title"})

	idt_date_box = soup.find_all("div", attrs={"class":"ht-idt-card__date"})

	titles = []
	dates = []
	links = []
	for a in comm_title_box:
		titles += [a.text]
		links += [a.get("href")]

	for a in idt_title_box:
		titles += [a.text]		
		links += [a.get("href")]

	for a in comm_date_box:
		dates += [a.text]

	for a in idt_date_box:
		dates += [a.text]

	return titles, dates, links



'''a, b, c = hackathon_search("india")

print(a, b, c)'''
