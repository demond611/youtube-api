function theRequest (searchTerm){
	var params = {
		part : 'snippet',
		key : 'AIzaSyBI1Ohuqg48BrFH9hqd8G6T_YwM1mwfrM0',
		q : searchTerm,
		maxResults : '3',
	};
	var url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function (data){
		displayResults(data.items);
		// console.log(data.items);
	});
}

function displayResults (videos){
	var information = "";
	$.each(videos, function (index, video){
		var videoLink = "https://www.youtube.com/watch?v=" + video.id.videoId;
		console.log(video.snippet.thumbnails.high.url);
		information += "<div class='video-display'>";
		information += "<p>" + video.snippet.title + "</p>";
		information += "<p><a href='"+videoLink+"'><img src='"+ video.snippet.thumbnails.high.url +"'></a></p>";
		information += "<p>" + video.snippet.description + "</p>";
		information += "</div>";
	});

	$("#search-results").html(information);
}

$(function (){

	$("#search-term").submit(function (event){
		event.preventDefault();

		var searchTerm = $("#query").val();

		theRequest(searchTerm);
	});
});