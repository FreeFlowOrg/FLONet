import wikipedia

def jargon_search(term):
	return wikipedia.summary(term, sentences = 4)

