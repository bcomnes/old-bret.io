// Global webmention.js object
var webMention = {};
// webMention.get function for finding objects to interact with. WIP
webMention.get = function() {
	// Get a list of all elements with the class of webmention and type
	webMention.elements = document.getElementsByClassName('webmentions');
	// preProcess each element found
	if ( webMention.elements ) {
		webMention.preProcess();
	}
}

// webMention.preProcess sets up each object function for each
// element found.  It's not done yet, but the identification process
// uses the ID of the page for the URL of interest, and the class
// to describe how the element should be processed. 
webMention.preProcess = function() {
	// For all of the elements found...
	for (var i = 0; i < webMention.elements.length; i++) {
		// retrieve the URL from its ID and store it
		webMention.elements[i].slug = webMention.elements[i].id;
		// For a given element, create the unique callback function
		// that can be wrapped around our API data that will target
		// The element of the loop.  This function is called postProcess.
		// Should this be done with a prototype? 
		webMention.elements[i].postProcess = webMention.postProcess;
		// Insert the script with the source of the data we want wrapped in our
		// callback function.  Do you see a better way to do this?
		webMention.insertScript(i);
	}
}

// This inserts a script element with the source set to a jsonp call to pingback.me
// that is wrapped in our callback function.
webMention.insertScript = function(i) {
	// Generate our callback function that correlates with the element we are preProsessing
	var jsonpName = "webMention.elements[" + i + "].postProcess"
	// Generate the API request URL 
	var apiUrl = "http://pingback.me/api/links?target=" + webMention.elements[i].slug + "&jsonp=" + jsonpName
	// Generate the script element to be inserted
	var container = document.createElement('SCRIPT');
	// Set the source of the script container
	container.src = apiUrl;
	// Insert this into the head, where it will immediately execute. 6
	document.head.appendChild(container)
}

// This is the callback function.  After the script is inserted into the head,
// this is what processes the data, formats it and inserts it into the page.
webMention.postProcess = function(data) {
			// Identify the UL element that we are going to be adding items
			// too
			this.parent = document.getElementById(this.slug);
			// Locate the placeholder LI
			this.placeHolder = this.parent.firstElementChild;
			// Remove that placeholder
			this.parent.removeChild(this.placeHolder);
			// For all of the data elements, do something.  WIP
			for (var j = 0; j < data.links.length; j++) {
				var listItem = document.createElement('LI');
				var linkText = document.createTextNode(data.links[j].source);
				var linkAnchor = document.createElement('A');
				linkAnchor.href = data.links[j].source;
				linkAnchor.appendChild(linkText);
				listItem.appendChild(linkAnchor);
				this.parent.appendChild(listItem);
			}
		}

webMention.listLinks = function() {};

// Bastardization of http://jsfiddle.net/cR9dB/2/ TODO: Unserstand this code :/
webMention.hasClass = function (element, selector) {
    var className = ' ' + selector + ' ';
    var rclass = /[\t\r\n\f]/g;

    return element.nodeType === 1 && (' ' + element.className + ' ')
    .replace(rclass, ' ')
    .indexOf(className) >= 0;      
	}

webMention.get();