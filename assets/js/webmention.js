var mentionElements
var webmentionGet = function(type) {
	mentionElements = document.getElementsByClassName('webmentions ' + type);
	for (var i=0; i < mentionElements.length; i++) {
		var mentionTarget = mentionElements[i].id;
	    var mentionData = document.createElement('SCRIPT');
	    var jasonpName = "webmentionProcess";
	    var token = 'NTAxNTJmM2RmNzA4YTQ4ODllMWQ2NWJm';
	    var mentionDataUrl = "http://pingback.me/api/links?target="+mentionTarget+"&jsonp=webmentionProcess&access_token="+token;
	    mentionData.src = mentionDataUrl;
	    document.head.appendChild(mentionData)
	}
}
// window.onload = pingback('mode', 'webmentions');

var mentions;
var webmentionProcess = function ( data ) {
	mentions = JSON.parse( data );
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