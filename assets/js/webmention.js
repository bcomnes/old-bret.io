var pingback = function(mode, className) {
	var mentionElements = document.getElementsByClassName('webmentions');
	for (var i=0; i < mentionElements.length; i++) {
	    var placeHolderNode = mentionElements[i].firstElementChild;
	    mentionElements[i].removeChild(placeHolderNode);
	    var linkNode = document.createElement('LI');
	    var testData = document.createTextNode('Huston we have liftoff');
	    linkNode.appendChild(testData);
	    mentionElements[i].appendChild(linkNode);
	}
}
window.onload = pingback('mode', 'webmentions');