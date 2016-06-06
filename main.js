
var submit  = document.getElementById('output').addEventListener('click', function(e){

var inputText = document.getElementById('input-text').value;
var rude = document.getElementById('rude').checked;
var output = '';

if (rude){
  output = response('rude', inputText);
} else {
  output = response('polite', inputText);
}

var outputP = document.getElementById('output').appendChild("P");
var t = document.createTextNode(output);
outputP.appendChild(t);

});

function response(personality, input){

if(personality === 'rude'){
var randomResponse = Math.floor(Math.random()*10);
  if(randomResponse < 3){
   var b = /\w+/.exec(input);
   output = 'I hate people who start sentences with the word ' + b;
  }
  else if(randomResponse <6){
   output = 'I dont care what you say, you are a moron';
  }
  else{

  }
	return output;
}

}
