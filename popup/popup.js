function content_generater(json_obj){
	let title = json_obj.live_title;
	let url = json_obj.live_url;
	let liveid = url.replace("https://www.youtube.com/watch?v=", "");
	let liver = json_obj.uid.liver_name;
	let production = json_obj.uid.production;
	var content = "<div class='cardw'>" + 
	"<div class='row contentbox'>" +
	"<div class='col-xs-12 col-lg-6'>" +
	"<div class='content' id='img'>" +
	'<iframe width="336" height="189" src="https://www.youtube.com/embed/' + liveid + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
	"</div>" +
	"</div>" +
	"<div class='col-xs-12 col-lg-6'>" +
	"<div class='content' id='detail'>" +
	"<h5 class='title-text'>" +
	"<a href='https://www.youtube.com/watch?v=" + liveid + "' target='_blank' class='title-text'>" + title + " </a>" +
	"</h5>" +
	"<p class='name'>" + production + " : " + liver + " </p>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
	return content;
}

function fetch_api(){
	var URL = 'https://vtuber-livestatus-api.herokuapp.com/api/onlive/';
	fetch(URL)
	.then(function(data){
		return data.json();
	})
	.then(function(json){
		for(let i=0; i<json.length; i++){
			//console.log(json[i])
			//var main_content = '<div><p>' + json[i].live_title + '</p></div>';
			var main_content = content_generater(json[i])
			var insertBlock = document.getElementById('wrap');
			insertBlock.insertAdjacentHTML('beforeend', main_content);
		}
	})
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-149456660-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
//google analytics


//window読み込み時に実行
window.onload = function(){
	fetch_api()
}
