const question = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'What year JavaScript launch?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of these',
    'correct': 'b'
},
{
    'que': 'CSS stands for?',
    'a': 'Hyper Text Markup Language',
    'b': 'Civil Special Service',
    'c': 'JavaScript Object Notation',
    'd': 'Cascading Style Sheet',
    'correct': 'd'
},
{
    'que': 'HTML stands for?',
    'a': 'Hyper Text Markup Language',
    'b': 'Civil Special Service',
    'c': 'JavaScript Object Notation',
    'd': 'Cascading Style Sheet',
    'correct': 'a'
},
{
    'que': 'JavaScript which type of language?',
    'a': 'Hyper Text Markup Language',
    'b': 'Static Type',
    'c': 'Dynamic Type',
    'd': 'Designing Type',
    'correct': 'c'
}
]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById('questionBox');
const mcqOption = document.querySelectorAll("input[type='radio']");


const loadBox = () => {
    if (index === total) {
        return quizEnd();
    }
    reset();
    const data = question[index];
    quesBox.innerHTML = `${index + 1}: ${data.que}`;
    mcqOption[0].nextElementSibling.innerText = data.a;
    mcqOption[1].nextElementSibling.innerText = data.b;
    mcqOption[2].nextElementSibling.innerText = data.c;
    mcqOption[3].nextElementSibling.innerText = data.d;


}

document.querySelector("#submit").addEventListener("click",
    function () {
        const data = question[index];
        const ans = getAnswer();
        if (ans === data.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadBox();
    }
)

const getAnswer = () => {
    let answer;
    mcqOption.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })
    return answer;
}

const reset = () => {
    mcqOption.forEach((input) => {
        input.checked = false;
    })
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `<div><h1 style= "text-align: center">Thank You For Your Participating</h1></br><h1 style= "text-align: center">Your Score: ${right}/ ${question.length}</h1></div>`;
}


loadBox();



