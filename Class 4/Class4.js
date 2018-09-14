document.write('1'); //testing page loads fine


// Any HTML document is a tree structure defined by the DOM (Document Object Model).
//
// DOM Access
// Your browser automatically loads the content of a webpage into a Document object which serves as the entry point into a web page's content.
//
//
// Using the document you can:
//
// Change the content tree any way you want.
// Build an HTML document from scratch.
// Access or replace any existing DOM nodes (HTML elements in the DOM).
//

// DOM access by ID
// document.getElementById(id);

//  example

// to find <img id="kittenPic" src="www.kittenpics.com/pic1" alt="small cat"> we would use

// var imgKitten = document.getElementById(kittenPic);

// DOM access by tag name

// To find:

// <ul>
//   <li>Daisy</li>
//   <li>Tulip</li>
// </ul>
// We would use:
//
var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {

  var listItem = listItems[i];
  console.log(listItem);
}

// DOM Access: HTML 5
// In newer browsers, you can use methods getElementsByClassName, querySelector, and querySelectorAll.
//
//
// Available in IE9+, FF3.6+, Chrome 17+, Safari 5+:
//
// document.getElementsByClassName(className);
//
// Available in IE8+, FF3.6+, Chrome 17+, Safari 5+:
//
// document.querySelector(cssQuery);
// document.querySelectorAll(cssQuery);

// getElement vs. getElements
// Any method that starts with getElement will return a single node.
//
// document.getElementById('uniqueID'); // returns a single node
//
// Any method that starts with getElements will return an array of nodes. To modify a single node, you will need to use bracket notation to get the correct one.
//
// document.getElementsByTagName('p'); // returns multiple nodes
//
// var specificParagraph = document.getElementsByTagName('p')[2];

// Changing nodes

// You can change the page CSS using Style

// To make this CSS:
//
// body {
//   color: red;
// }

 var pageBody = document.getElementsByTagName('body') [0];
 pageBody.style.color = 'red';

 // See class-4-test-page/myscript.js for the task, I changed the header background to red using getElementById


//  Creating New Nodes
//  The document object also has methods to create nodes from scratch:
//
//  document.createElement(tagName);
//
// document.createTextNode(text);
//
// element.appendChild(element);

// sample page by creating new nodes

var pageBody = document.getElementsByTagName('body') [0];

// Now we create our image tag with attributes.
var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/g/500/200';
newImg.style.border = '1px solid black';

// Then we add the image to the body
pageBody.appendChild(newImg);

// Time to create a paragraph tag with some content!
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('This is a cat. Hmmm. Shame it isn\'t a dog. Sad face.');
newParagraph.appendChild(paragraphText);

// Now we add the paragraph to the page
pageBody.appendChild(newParagraph);


// Events
// An event is an object that is sent when actions take place on your webpage, most often when a user interacts with your webpage.
//
//
// For example, JavaScript creates an event when a user clicks an element.

element.addEventListener('click', function(event) {
  // code to be executed when user clicks
});

// Types of Events
// There are a variety of events. Some of the more common events are:
//
// click: Occurs when the user clicks on an element
// mouseover: Occurs when the pointer is moved onto an element
// mouseout: Occurs when the pointer is moved off an element
// keyup: Occurs when the user releases a key
// load: Occurs when a document has been loaded
// focus: Occurs when an element gets focus
// blur: Occurs when an element loses focus

// You can call a function directly from your HTML code

// See line 14 of the HTML page to see the HTML counterpart to this
function sayHi (event) {
  alert('Hi!');
}
