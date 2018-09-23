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

	return soup
