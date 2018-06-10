console.log('start of js');

let questions = [
  'What is your name?',
  'How long have you been dressing yourself?',
  'What is your pants size?',
  'What is your annual net worth?',
];

let i = 0;

let questionTitleEl;

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOMContentLoaded fired');
  questionTitleEl = document.getElementById('question-title');
  questionTitleEl.innerHTML = questions[i++];
});

function next() {
  console.log('next ran')
  if (i < questions.length) {
    questionTitleEl.innerHTML = questions[i++];
  } else {
    questionTitleEl.innerHTML = 'Done';
    let nextButtonEl = document.getElementById('next-button');
    nextButtonEl.remove();
  }
};


console.log('end of js');
