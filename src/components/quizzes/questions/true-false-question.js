import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const TrueFalseQuestion = ({question,grade,questions, setQuestions}) => {
    const [answer, setAnswer] = useState(null)
    useEffect(() => {
        if (grade) {
            console.log(questions);
            const unrelated = questions.filter(q => q._id !== question._id);
            const target = questions.find(q => q._id === question._id);
            target.answer = JSON.stringify(answer);
            console.log("target is ",target.answer)
            const updatedQuestions = [...unrelated, target];
            setQuestions(updatedQuestions);
        }
    }, [grade])
    // const [grade, check] = useState(false)
    return (
        <div>
            <h4>
                {question.question}

                {
                    grade &&
                    <>
                {
                    (JSON.stringify(answer)).toLowerCase() === question.correct.toLowerCase() &&
                    <i className="fas fa-check green-color float-right"></i>
                }
                {
                    (JSON.stringify(answer)).toLowerCase() !== question.correct.toLowerCase() &&
                    <i className="fas fa-times red-color float-right"></i>
                }
                    </>
                }

            </h4>
            {/*{question.correct}*/}
            {/*<br/>*/}
            <div className={(grade && ("true" !== question.correct.toLowerCase()) &&("true"===JSON.stringify(answer).toLowerCase())) ?
                "red-highlight row list-group-item" : (grade && ("true" === question.correct.toLowerCase()))?"green-highlight row list-group-item":"black-color row list-group-item"}>
            <label>
                <input
                type="radio"
                onClick={() => setAnswer(true)}
                name={question._id}
            />&nbsp; True</label>
                {
                    <>
                        {
                            (grade && ("true" !== question.correct.toLowerCase()) &&("true"===JSON.stringify(answer).toLowerCase())) &&
                            <i className="fas fa-times float-right red-color"></i>
                        }

                        {
                            (grade && ("true" === question.correct.toLowerCase())) &&
                            <i className="fas fa-check float-right green-color"></i>
                        }
                    </>
                }
            <br/>
        </div>

        <div className={(grade && ("false" !== question.correct.toLowerCase()) &&("false"===JSON.stringify(answer).toLowerCase())) ?
            "red-highlight row list-group-item" : (grade && ("false" === question.correct.toLowerCase()))?"green-highlight row list-group-item":"black-color row list-group-item"}>
            <label
                // className={(grade && ("false" !== question.correct.toLowerCase()) &&("false"===JSON.stringify(answer).toLowerCase())) ?
                // "red-color" : "green-color"}
            ><input
                type="radio"
                onClick={() => setAnswer(false)}
                name={question._id}/>&nbsp; False</label>
            {
                <>
                    {
                (grade && ("false" !== question.correct.toLowerCase()) &&("false"===JSON.stringify(answer).toLowerCase())) &&
                <i className="fas fa-times float-right red-color"></i>
                    }

                    {
                (grade && ("false" === question.correct.toLowerCase())) &&
                    <i className="fas fa-check float-right green-color"></i>
                    }
                </>
            }
        </div>
            <div>
            {/*<br/>*/}
            Your answer: {(JSON.stringify(answer)).toLowerCase()}
            </div>
            {/*<div>*/}
            {/*<Link*/}
            {/*    onClick={() => check(true)}*/}
            {/*    className="btn btn-success">*/}
            {/*    Grade*/}
            {/*</Link>*/}
            {/*</div>*/}
            <br></br>
        </div>
    )
}

export default TrueFalseQuestion;