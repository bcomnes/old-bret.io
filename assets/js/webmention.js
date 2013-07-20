// Global webmention.js object
var webMention = {};
console.log('Webmention.js initialized');
// webMention.get function for finding objects to interact with.
webMention.get = function(type) {
	console.log('get function just fired');
	// Get a list of all elements with the class of webmention and type
	webMention.elements = document.getElementsByClassName('webmentions ' + type);
	console.log('Elements were found');
	console.log(webMention.elements);
	// Process each element found
	webMention.preProcess();
}
// window.onload = pingback('mode', 'webmentions');

webMention.preProcess = function() {
	console.log('Preprocess was triggered');
	for (var i=0; i < webMention.elements.length; i++) {
		// For a given element, retrieve the URL from its ID and store it
		webMention.elements[i].slug = webMention.elements[i].id;
		console.log('Slugs were ammended');
		console.log(webMention.elements[i].slug);
		// For a given element, create the uniqe 
		webMention.elements[i].postProcess = function(data) {
			console.log('We are attempting to create our object functions');
			webMention.elements[i].parent = document.getElementById(webMention.elements[i].slug);
			webMention.elements[i].placeHolder = webMention.elements[i].parent.firstElementChild;
			webMention.elements[i].parent.removeChild(webMention.elements[i].placeHolder);
			var linkNode = document.createElement('LI');
			var testData = document.createTextNode('Huston we have liftoff');
			linkNode.appendChild(testData);
			webMention.elements[i].parent.appendChild(linkNode);
		}
		console.log('Scripts are about to be inserted');
		webMention.script(i);
	}
}

webMention.script = function (i) {
	console.log('Scripts are about to be inserted');
	// Create functon attached to element object 
    var jsonpName = "webMention.elements[" + i + "].postProcess"
    // Generate the API request URL 
    var apiUrl = "http://pingback.me/api/links?target="+ webMention.elements[i].slug + "&jsonp=" + jsonpName
    // Generate the script element to be inserted
    var container = document.createElement('SCRIPT');
    // Set the source of the script container
    container.src = apiUrl;
    document.head.appendChild(container)
    console.log('SCripts have been inserted maybe');
}

webMention.get('links');