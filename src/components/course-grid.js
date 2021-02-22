import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "./course-row";

export default function CourseGrid(props){
    let mappedCourses;
    return(
            <div>
                <div className="row">
                    <div className="col-5">
                        Recent Documents
                    </div>
                    <div className="col-4">
                        Owned by me
                    </div>
                    <div className="col-1">
                        <i className="fas fa-folder fa-2x float-right"></i>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-sort-alpha-down fa-2x float-right"></i>
                    </div>
                    <div className="col-1">
                        <Link to="/courses/table">
                            <i className="fas fa-2x fa-list black-color float-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {
                        mappedCourses=props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                deleteCourse={props.deleteCourse}
                                updateCourse={props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>
                        // return(console.log(course._id),
                        // deleteCourse=props.deleteCourse,
                        // updateCourse=props.updateCourse,
                        // console.log(course),
                        // console.log(course.title),
                        // console.log(course.lastModified),
                        // console.log(course.owner))
                    )

                    }
                </div>
            </div>
        );

}
