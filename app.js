function wikiSearch() {
	const searchTerm = document.getElementById('search').value;
	const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
	console.log(url);
}