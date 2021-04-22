import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        // fetch("http://localhost:3000/api/quizzes")
        //     .then(response => response.json())
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(<div className="row list-group-item">
                                {/*<div className="col-sm-6">*/}
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                // className="list-group-item"
                            >
                                {quiz.title}
                            </Link>
                                {/*</div>*/}
                                {/*<div className="col-sm-4"></div>*/}
                                {/*<div className="col-sm-6">*/}

                            <Link
                            to={`/courses/${courseId}/quizzes/${quiz._id}`}
                            className="btn btn-primary float-right">
                            Start
                            </Link>
                                <Link className='btn btn-secondary float-right'
                                      to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                                    Attempts Histories
                                </Link>
                                {/*</div>*/}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;