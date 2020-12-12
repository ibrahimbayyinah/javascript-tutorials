var input, output, button, lexicon;

function setup() {
	noCanvas();
	lexicon = new RiLexicon();
	input = createInput("It was a dark and stormy night.");
	input.size(200);
	button = createButton("submit");
	output = select("#output");
	input.changed(processRita);
	button.mousePressed(processRita);
}

function processRita() {
	var s = input.value();
	var rs = new RiString(s);
	var words = rs.words();
	var pos = rs.pos();
	console.log(words);
	console.log(pos);

	var phrase = "";
	for (i = 0; i < words.length; i++){
		if (/nn.*/.test(pos[i])) {
			phrase += lexicon.randomWord(pos[i]);
		} else {
			phrase += words[i] + " ";
		}
	}
	output.html(phrase);
}
