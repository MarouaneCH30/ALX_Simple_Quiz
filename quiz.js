function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Get user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Get feedback element
  const feedback = document.getElementById("feedback");

  // Check if the answer is correct and provide feedback
  if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
  } else {
      feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
