import React, {useState} from "react";
import {Link} from "react-router-dom";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [grade, check] = useState(false)
    return(
        <div>
            <h4>{question.question}
            {
                grade &&
                <>
                    {
                        answer.toLowerCase() === question.correct.toLowerCase() &&
                        <i className="fas fa-check green-color float-right"></i>
                    }
                    {
                        answer.toLowerCase() !== question.correct.toLowerCase() &&
                        <i className="fas fa-times red-color float-right"></i>
                    }
                </>
            }
            </h4>
            {/*{question.correct}*/}
            {
                question.choices.map((choice) => {
                    return(
                        <div className={(grade && (choice.toLowerCase() !== question.correct.toLowerCase()) &&(choice.toLowerCase()===answer.toLowerCase())) ?
                            "red-highlight row list-group-item" : (grade && (choice.toLowerCase() === question.correct.toLowerCase()))?"green-highlight row list-group-item":"black-color row list-group-item"}>
                        <label>
                            <input type="radio"
                                   onClick={() => setAnswer(choice)}
                                   name={question._id}/>
                            &nbsp;
                            {choice}
                        </label>
                            {
                                <>
                                    {
                                        (grade && (choice.toLowerCase() !== question.correct.toLowerCase()) &&(choice.toLowerCase()===answer.toLowerCase())) &&
                                        <i className="fas fa-times float-right red-color"></i>
                                    }

                                    {
                                        (grade && (choice.toLowerCase() === question.correct.toLowerCase())) &&
                                        <i className="fas fa-check float-right green-color"></i>
                                    }
                                </>
                            }
                        </div>
                    )
                })
            }
            <div>
            Your answer: {answer}
            </div>
            <div>
                <Link
                    onClick={() => check(true)}
                    className="btn btn-success">
                    Grade
                </Link>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion;