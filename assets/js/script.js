let generalButton = document.getElementById('general');
let geographyButton = document.getElementById('geography');
let historyButton = document.getElementById('history');
let languageButton = document.getElementById('language');
let sportsButton = document.getElementById('sports');
let mathButton = document.getElementById('mathematics');
let questionDisplay = document.getElementById('question-display');

let answerButton = document.getElementById('answer');
let answerDisplay = document.getElementById('answer-display');

let category;

let triviaData = [];
let currentIndex = 0;

async function fetchTriviaData() {
  apiUrl = `https://api.api-ninjas.com/v1/trivia?category=${category}`;
  const apiKey = 'EAfOoPPMEREEYVCzrtEUjw==cJHiRTre6GwfFxIz';
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    triviaData = data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

function getQuestion() {
  if (triviaData.length === 0 || currentIndex >= triviaData.length) {
    currentIndex = 0;
    fetchTriviaData().then(data => {
      showQuestion(data);
    });
  } else {
    showQuestion(triviaData);
  }
}

function showQuestion(data) {
  if (currentIndex < data.length) {
    let question = data[currentIndex].question;
    questionDisplay.textContent = question;
    answerDisplay.textContent = '';
    currentIndex++;
  }
}

function showAnswer() {
  let currentQuestion = questionDisplay.textContent;
  let questionData = triviaData.find(data => data.question === currentQuestion);
  if (questionData) {
    answerDisplay.textContent = questionData.answer;
  }
}

generalButton.addEventListener('click', function() {
  category = 'general';
  getQuestion();
  answerButton.style.display = 'inline';
});

geographyButton.addEventListener('click', function() {
  category = 'geography';
  getQuestion();
  answerButton.style.display = 'inline';
});

historyButton.addEventListener('click', function() {
  category = 'historyholidays';
  getQuestion();
  answerButton.style.display = 'inline';
});

languageButton.addEventListener('click', function() {
  category = 'language';
  getQuestion();
  answerButton.style.display = 'inline';
});

sportsButton.addEventListener('click', function() {
  category = 'sportsleisure';
  getQuestion();
  answerButton.style.display = 'inline';
});

mathButton.addEventListener('click', function() {
  category = 'mathematics';
  getQuestion();
  answerButton.style.display = 'inline';
});

answerButton.addEventListener('click', showAnswer);