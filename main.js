
var submit  = document.getElementById('submit').addEventListener('click', function(e){
 console.log('clicked');
var inputText = document.getElementsByName('type something')[0].value;
var rude = document.getElementsByName('gender')[0].checked;
var output = '';

if (rude){
  output = response('rude', inputText);
} else {
  output = response('polite', inputText);
}

var userOutput = document.getElementById('output');

var newChild = document.createElement('p');
var t = document.createTextNode(inputText);
newChild.appendChild(t);
userOutput.appendChild(newChild);	

var secondChild = document.createElement('p');
var t2 = document.createTextNode(output);
secondChild.appendChild(t2);
userOutput.appendChild(secondChild);


});

function response(personality, input){

if(personality === 'rude'){

if(asked === true){if(input === 'blue' || input === 'green' || input === 'yellow' || input === 'red'){return 'stupid choice';}
else{return 'thats not a primary colour mate!'}}

var randomResponse = Math.floor(Math.random()*10);
  if(randomResponse < 3){
  var b = /\w+/.exec(input);
  return 'I hate people who start sentences with the word ' + '"' + b + '". Whats your favourite color?'; asked = true;
  }
  else if(randomResponse <6){
  var c = /\w+$/.exec(input);
  return 'I dislike people who finish their sentences with the word ' + '"' + c + '"';
  }
  else if(randomResponse < 8){
  return 'you should work on your vocabulary a bit. Whats your favourite colour?'; asked = true;
  }
  else{
  return 'I dont care what you say, you are a moron';
  }

}

if(personality === 'polite'){

if(asked === true){if(input === 'blue' || input === 'green' || input === 'yellow' || input === 'red'){return 'thats my favourite too!!';}
else{return 'I regret to inform you thats not a primary colour.'}}

var randomResponse = Math.floor(Math.random()*10);
  if(randomResponse < 3){
  var b = /\w+/.exec(input);
  return 'I like people who start sentences with the word ' + '"' + b + '". Whats your favourite primary color?'; asked = true;
  }
  else if(randomResponse <6){
  var c = /\w+$/.exec(input);
  return 'I love people who finish their sentences with the word ' + '"' + c + '". Whats your favourite primary colour?';
  }
  else if(randomResponse < 8){
  return 'Before you say anything, can I offer you a hot beverage?'; asked = true;
  }
  else{
  return 'I dont care what you say, you are a moron';
  }

}

}