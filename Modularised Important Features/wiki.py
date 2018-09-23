import wikipedia
import requests
from bs4 import BeautifulSoup


def jargon_search(term):
	return wikipedia.summary(term, sentences = 4)
