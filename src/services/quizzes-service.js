
const QUIZZES_URL = 'https://wbdv-sp21-devanshi-server-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
export const submitQuiz = (qid, questions) => {
    // console.log("aamhi ikde",questions)
    //     console.log("aamhi ikde 2",JSON.stringify(questions))
        return fetch(`${QUIZZES_URL}/${qid}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };

const getQuizAttempts = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json());


export default {
    findAllQuizzes, findQuizById, submitQuiz, getQuizAttempts
}

