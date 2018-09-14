function writeResults (result){
    //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');

    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);

    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}

writeResults('Hi there!');

var headerColor = document.getElementById('header');

headerColor.style.backgroundColor = 'red'; // changes the background on the header to red, which is well nice m8

// Create a new paragraph element and add it to a div on your page.

var footer = document.getElementById('footer');

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('This code was added to by Stuart White! He\'s awesome!');
newParagraph.appendChild(paragraphText);

footer.appendChild(newParagraph);

// Go back to the sample files you downloaded earlier.

// Make some JavaScript code fire after a mouseover event.

footer.addEventListener("mouseover", function(event) {
  footer.style.backgroundColor = 'blue';
});

footer.addEventListener("mouseout", function(){
  footer.style.backgroundColor = '#3B597D';
});
