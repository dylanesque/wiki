$(document).ready(function(){
	$('#wikiSearch').click(function(){
		var searchParams = $('#search').val();
		var searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchParams + "&format=json&callback=?";	

		$.ajax({
			type: "GET", 
			url: searchUrl, 
			async: false, 
			dataType: "json", 
			success: function(data){
				for(var i = 0; i < data[1].length; i++) {
					$('#searchResults').prepend("<li><a href=" + data[3][0] + ">" 
					+ data[1][0] + "</a><p>" + data[2][0]  + "</p></li>");
				}
			
			}, 
			error: function(error){
				alert("Error!");
			}
		
		});
	})
});
	
