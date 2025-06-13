const questions = [{
        "que": "Which of the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "javaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "Which year javaScript was launched?",
        "a": "1956",
        "b": "1955",
        "c": "1954",
        "d": "none of the above",
        "correct": "b"
    },
    {
        "que": "What does CSS stands for?",
        "a": "Hypertext Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "Helicopters Terminals Motorboats Lamborghini",
        "correct": "b"
    },
]

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
const heading = document.querySelector("h2");
const optionInputs = document.querySelectorAll(".options");


const loadQuestion = () => {

    if (index === total) {
        return endQuiz()
    }
    reset();

    const data = questions[index];
    heading.innerText = `${index + 1}) ${data.que}`

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let ans
    optionInputs.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    });
    return ans;
}
const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById("box").innerHTML =
        `<div style="text-align:center">
        <h2>Thank you for playing the quiz</h2>
        <h3 style="margin-top : 10px"> Your Score  is : ${right} / ${total}</h3></div>`
}

loadQuestion();