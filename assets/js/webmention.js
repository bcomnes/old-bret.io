var mentionElements
var webmentionGet = function(type) {
	mentionElements = document.getElementsByClassName('webmentions ' + type);
	for (var i=0; i < mentionElements.length; i++) {
		var mentionTarget = encodeURIComponent(mentionElements[i].id);
	    var mentionData = document.createElement('SCRIPT');
	    var jasonpName = "webmentionProcess";
	    var token = '';
	    //var mentionDataUrl = "http://pingback.me/api/links?target="+mentionTarget+"&jsonp=webmentionProcess&access_token="+token;
	    var mentionDataUrl = "http://pingback.me/api/links?target="+mentionTarget+"&jsonp=webmentionProcess"
	    mentionData.src = mentionDataUrl;
	    document.body.appendChild(mentionData)
	}
}
// window.onload = pingback('mode', 'webmentions');

var mentions;
var webmentionProcess = function ( data ) {
	console.log(mentions);
}

webmentionGet('links');
//var parseJson = function( data ){
//	
//}
//
//webmentionFind('mode', 'webmentions');
//
//var placeHolderNode = mentionElements[i].firstElementChild;
//	    mentionElements[i].removeChild(placeHolderNode);
//	    var linkNode = document.createElement('LI');
//	    var testData = document.createTextNode('Huston we have liftoff');
//	    linkNode.appendChild(testData);
//	    mentionElements[i].appendChild(linkNode);