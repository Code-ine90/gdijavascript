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
