import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionsService from "../../services/questions-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        // fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
        //     .then(response => response.json())
        QuestionsService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[quizId])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;