// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/tk_JGu2AbJY

var input;
var button;
nlp.extend(compromiseSentences);

// const nlp = require("compromise");
// nlp.extend(require("compromise-sentences"));

function setup() {
  noCanvas();
	// var t = window.nlp('dinosaur').nouns().toPlural();
    	// alert(t.out('text'));
  input = createInput('It was a dark and stormy night.');
  button = createButton('submit');
  button.mousePressed(process);
  input.size(200);
}

function process() {
  var s = input.value();
  // nlp(s);
  var statement = nlp(s).sentences();
  var output = statement.toNegative().text();
//  var sentence = nlp.sentence(s);
//  var output = '';
//  for (var i = 0; i < sentence.terms.length; i++) {
//    var pos = sentence.terms[i].pos;
//    var word = sentence.terms[i].text;
//    if (pos.Noun && !pos.Pronoun) {
//      word = nlp.noun(word).pluralize();
//    } else if (pos.Verb) {
//      word = nlp.verb(word).conjugate().future;
//    }
//    output += word;
//    output += sentence.terms[i].whitespace.trailing;
//  }
  createP(output);
}
