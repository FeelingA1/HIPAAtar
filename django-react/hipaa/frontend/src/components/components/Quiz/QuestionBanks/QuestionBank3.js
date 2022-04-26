const quiz = [
    {
        question: "Which of the following is a math tool?",
        answers: ["calculator", "pineapple", "sunglasses", "lamp"],
        correct: "calculator",
        questionId: "0"
    },
    {
        question: "What is the last letter of the alphabet?",
        answers: ["p", "f", "e", "z"],
        correct: "z",
        questionId: "1"
    },
    {
        question: "Who sells popular cookies?",
        answers: ["OSU", "Doctors Offices", "Girl Scouts", "Boy Scouts"],
        correct: "Girl Scouts",
        questionId: "2"
    },
    {
        question: "Finish the phrase: Stranger ___ ",
        answers: ["Happy", "Danger", "Goes", "Loser"],
        correct: "Danger",
        questionId: "3"
    },
    {
        question: "What is not a type of oil?",
        answers: ["Sunlight", "Motor", "Olive", "Canola"],
        correct: "Sunlight",
        questionId: "4"
    }
];

// Grab 5 questions from this bank
const grabQuiz = (n = 5) =>
    Promise.resolve(quiz.sort(() => 0.5 - Math.random()).slice(0,n));
export default grabQuiz;