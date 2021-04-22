import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question,grade,questions, setQuestions}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    questions={questions}
                    grade={grade}
                    setQuestions={setQuestions}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    questions={questions}
                    grade={grade}
                    setQuestions={setQuestions}
                />
            }
        </div>
    )
}

export default Question;