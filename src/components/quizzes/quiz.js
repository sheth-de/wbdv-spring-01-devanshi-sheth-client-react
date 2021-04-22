import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionsService from "../../services/questions-service";
import QuizService from "../../services/quizzes-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState({});
    const [questions, setQuestions] = useState([]);
    const [grade, check] = useState(false);
    const [attempt, setAttempt] = useState({});
    useEffect(() => {
        QuizService.findQuizById(quizId)
            .then(res => setQuiz(res));
        QuestionsService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions));
        if (grade) {
            console.log("ye hai hamre questions",JSON.stringify(questions))
            QuizService.submitQuiz(quiz._id, questions)
                .then(res => setAttempt(res));
        }
    },[quizId,grade])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            {grade && <Link className='btn btn-secondary'
                             to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>See attempts</Link>}
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question
                                question={question}
                                questions={questions}
                                grade={grade}
                                setQuestions={setQuestions}
                            />
                        </li>
                    )
                }
            </ul>
            <div>
                <Link
                    onClick={() => check(true)}
                    className="btn btn-danger"
                    disabled={grade}>
                    Submit
                </Link>
            </div>
            {
                grade &&
                <div>

                    <h2>Submitted Score: {attempt.score}</h2>
                    <h2>
                        Submitted Id: {attempt._id}
                    </h2>
                </div>
            }
        </div>
    );
}

export default Quiz;