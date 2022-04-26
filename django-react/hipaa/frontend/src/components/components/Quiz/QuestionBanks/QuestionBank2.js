const quiz = [
    {
        question: "What is the first letter in 'Hi'?",
        answers: ["h", "b", "c", "d"],
        correct: "h",
        questionId: "0"
    },
    {
        question: "What is the last digit in 10?",
        answers: ["1", "2", "3", "0"],
        correct: "0",
        questionId: "1"
    },
    {
        question: "Which of the following is not a fruit?",
        answers: ["apple", "table", "orange", "pear"],
        correct: "table",
        questionId: "2"
    },
    {
        question: "Which of the following is not a vegetable?",
        answers: ["broccoli", "lettuce", "computer", "green beans"],
        correct: "computer",
        questionId: "3"
    },
    {
        question: "Which of the following is a food?",
        answers: ["Pickle", "Android", "Bootstrap", "Springboot"],
        correct: "Pickle",
        questionId: "4"
    }
];

// Grab 5 questions from this bank
const grabQuiz = (n = 5) =>
    Promise.resolve(quiz.sort(() => 0.5 - Math.random()).slice(0,n));
export default grabQuiz;