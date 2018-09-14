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
