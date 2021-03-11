const initialState = {
    course_title: ""
        // {_id: 123, title: "Module 123"},
        // {_id: 234, title: "Module 234"},
        // {_id: 345, title: "Module 345"}

}
const courseTitleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_COURSE_TITLE":
            return {
                course_title: action.course_title
            }
        default:
            return state
    }
}
export default courseTitleReducer