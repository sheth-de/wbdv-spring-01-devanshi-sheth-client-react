import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseTitleReducer from "../../reducers/course-title-reducer";
import {combineReducers, createStore} from "redux";
import {Provider, connect} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-pills";
import courseService from "../../services/course-service";
import CourseTitle from "./course-title";
import WidgetList from "../widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    courseTitleReducer: courseTitleReducer,
    widgetReducer: widgetReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h3>
                <Link to={`/course/${layout}`}>
                    <i className="fas fa-times"></i>
                </Link>
                {/*<Link>*/}
                {/*    <i onClick={() => history.goBack()}*/}
                {/*        className="fas fa-arrow-left"></i>*/}
                {/*</Link>*/}
                <CourseTitle/>
                {/*{courseId} {moduleId}*/}
                {/*<Link to={`/course/${layout}`}>*/}
                {/*<i className="fas fa-times float-right"></i>*/}
                {/*</Link>*/}
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h3>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <div>
                        <TopicTabs/>
                    </div>
                    <div>
                        <WidgetList/>
                    </div>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col-4">*/}
            {/*    </div>*/}
            {/*    <div className="col-8">*/}
            {/*        <TopicTabs/>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    </Provider>)
}
export default CourseEditor