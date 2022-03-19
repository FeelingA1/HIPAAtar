const quiz1 = [
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

const quiz2 = [
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

const quiz3 = [
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

export default (quizNum, n = 5) => {
    if(quizNum === 1) {
        Promise.resolve(quiz1.sort(() => 0.5 - Math.random()).slice(0,n));
    } else if (quizNum === 2) {
        Promise.resolve(quiz2.sort(() => 0.5 - Math.random()).slice(0,n));
    } else if (quizNum === 3) {
        Promise.resolve(quiz3.sort(() => 0.5 - Math.random()).slice(0,n));
    }
};

// Grab 5 questions from this bank
export function questionBank1 (n = 5) {
    Promise.resolve(quiz1.sort(() => 0.5 - Math.random()).slice(0,n));
}
    
export function questionBank2 (n = 5) {
    Promise.resolve(quiz2.sort(() => 0.5 - Math.random()).slice(0,n));
}

export function questionBank3 (n = 5) {
    Promise.resolve(quiz3.sort(() => 0.5 - Math.random()).slice(0,n));
}


    