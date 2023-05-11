let geographyButton = document.getElementById('geography');
geographyButton.addEventListener('click', getQuestion);

function getQuestion() {
  let questionDisplay = document.getElementById("displayQuestion");
  let geographyTriviaUrl = 'https://opentdb.com/api.php?amount=50&category=22&difficulty=medium&type=multiple'
  fetch(geographyTriviaUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let questionInfo = data.results[0];
        let question = `${questionInfo.question} ${questionInfo.incorrect_answers},${questionInfo.correct_answer}`;
        questionDisplay.textContent = "";
        questionDisplay.append(question);
      })
      .catch(error => {
        console.error(error);
      })};