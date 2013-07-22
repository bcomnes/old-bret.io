// Global webmention.js object
var webMention = {};
// webMention.get function for finding objects to interact with.
webMention.get = function(type) {
	// Get a list of all elements with the class of webmention and type
	webMention.elements = document.getElementsByClassName('webmentions ' + type);
	// preProcess each element found
	webMention.preProcess();
}

// webMention.preProcess sets up each object function for each
// element found.  It's not done yet, but the identification process
// uses the ID of the page for the URL of interest, and the class
// to describe how the element should be processed. 
webMention.preProcess = function() {
	// For all of the elements found...
	for (var i=0; i < webMention.elements.length; i++) {
		// retrieve the URL from its ID and store it
		webMention.elements[i].slug = webMention.elements[i].id;
		// For a given element, create the unique object function
		// that can be wrapped around our API data that will target
		// The element of the loop.  This function is called postProcess
		webMention.elements[i].postProcess = function(data) {
			this.parent = document.getElementById(this.slug);
			this.placeHolder = this.parent.firstElementChild;
			this.parent.removeChild(this.placeHolder);
			this.mentions = data;
			for (var j=0; j < this.mentions.links.length; j++) {
				var listItem = document.createElement('LI');
				var linkText = document.createTextNode(this.mentions.links[j].source);
				var linkAnchor = document.createElement('A');
				linkAnchor.href = this.mentions.links[j].source;
				linkAnchor.appendChild(linkText);
				listItem.appendChild(linkAnchor);
				this.parent.appendChild(listItem);
			}
		}
		webMention.insertScript(i);
	}
}

webMention.insertScript = function (i) {
	// Create functon attached to element object 
    var jsonpName = "webMention.elements[" + i + "].postProcess"
    // Generate the API request URL 
    var apiUrl = "http://pingback.me/api/links?target="+ webMention.elements[i].slug + "&jsonp=" + jsonpName
    // Generate the script element to be inserted
    var container = document.createElement('SCRIPT');
    // Set the source of the script container
    container.src = apiUrl;
    document.head.appendChild(container)
}


webMention.get('links');