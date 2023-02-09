'use strict';

console.log('Hello');

let userName = prompt('What is your name?');

alert(`Hello, hope your doing well ${userName}! Games keeps us all on our toes..please answer yes or no`);

let questionOneGuess = prompt('A football field contains two field goals?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry incorrect answer');
}

let questionTwoGuess = prompt('At any given time ther are 22 players on a football field at a time?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('Corret!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Maybe next time');
}

let questionThreeGuess = prompt('First downs are every 20 yards').toLowerCase();

if (questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('Yes your right!');
} else if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('Maybe next time');
}

let questionFourGuess = prompt('Helmets protect players from concussions').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('Right again!');
} else if(questionFourGuess === 'no' || questionfourGuess === 'n'){
  alert('Maybe next time');
}

let questionFiveGuess = prompt('If you score the most points you win').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert('Your Big Time Now!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('Sorry');
}








alert(`Thanks for playing ${userName}!`);

