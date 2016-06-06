
var submit  = document.getElementById('id').addEventListener('click', function(e){

var inputText = document.getElementById('input-text').value;
var rude = document.getElementById('rude').checked;
var output = ''

if (rude){
  output = response('rude', inputText);
} else {
  output = response('polite', inputText);
}

var outputP = document.getElementById('output').appendChild("P");
var t = document.createTextNode(output);
outputP.appendChild(t);

});
