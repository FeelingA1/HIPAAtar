const questionBank = [
    {
        question: "What letter comes first?",
        answers: ["a", "b", "c", "d"],
        correct: "a",
        questionId: "0"
    },
    {
        question: "What number comes last?",
        answers: ["1", "2", "3", "4"],
        correct: "4",
        questionId: "1"
    },
    {
        question: "Who is not a member of this team?",
        answers: ["Irene", "Samantha", "Sujitt", "Connor"],
        correct: "Samantha",
        questionId: "2"
    },
    {
        question: "What is the name of our project?",
        answers: ["Studies", "RADIR", "HIPAAtar", "Genius"],
        correct: "HIPAAtar",
        questionId: "3"
    },
    {
        question: "What front-end framework are we using?",
        answers: ["REACT", "Android", "Bootstrap", "Springboot"],
        correct: "REACT",
        questionId: "4"
    }
];

// Grab 5 questions from this bank
export default (n = 5) =>
    Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0,n));