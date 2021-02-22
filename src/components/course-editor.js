import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
{
return(
    <div className="container">
        <h3>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i className="fas fa-times float-right"
               onClick={() => history.goBack()}></i>
        </h3>
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-success bg-primary">
                    <div className="col-1 col-md-1 d-none d-sm-table-cell">
                        <i className="float-left fa fa-times white-color"></i>
                    </div>
                    <div className="col-3 col-md-3 d-none d-sm-table-cell">
                        <a className="navbar-brand white-color navbar-collapse" href="#">CS5610-WebDev</a>
                    </div>
                     <div className="col-7 col-md-7 col-sm-10" id="navbarNav">
                        <ul className="navbar-nav navbar-nav nav-fill">
                            <li className="nav-item">
                                <a className="nav-link active" href="#"> Build <i className="float-right fa fa-pen"></i></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link white-color" href="#">Pages <i className="float-right fa fa-pen"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white-color" href="#">Theme <i className="float-right fa fa-pen"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white-color" href="#">Store <i className="float-right fa fa-pen"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 col-md-1 col-sm-2">
                        <i className="fa fa-plus white-color"></i>
                    </div>
                </nav>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-4">

                <ul className="list-group">
                    <li className="list-group-item">
                        Module 1 - JQuery
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item active">
                        Module 2 - React
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item">
                        Module 3 - Redux
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item">
                        Module 4 - Native
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item">
                        Module 5 - Angular
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item">
                        Module 6 - Node
                        <i className="float-right fa fa-pen"></i>
                    </li>
                    <li className="list-group-item">
                        Module 7 - Mongo
                        <i className="fa fa-pen float-right" ></i>
                    </li>
                    <li className="list-group-item">
                        <i className="float-center fa fa-plus"></i>
                    </li>
                </ul>

            </div>
            <div className="col-8">
                <ul className="nav nav-pills nav-fill w-100 mt-2">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1 <i className="float-right fa fa-pen"></i></a>
                    </li>
                    <li className="nav-item pl-1">
                        <a className="nav-link black-color" href="#">Topic 2 <i className="float-right fa fa-pen"></i></a>
                    </li>
                    <li className="nav-item pl-1">
                        <a className="nav-link black-color" href="#">Topic 3 <i className="float-right fa fa-pen"></i></a>
                    </li>
                    <li className="nav-item pl-1">
                        <a className="nav-link black-color" href="#" tabindex="-1" aria-disabled="true">Topic 4</a>
                    </li>
                    <li className="nav-item pl-1">
                        <a className="nav-link black-color" href="#" tabindex="-1" aria-disabled="true">
                            <i className="fa fa-plus"></i></a>
                    </li>
                </ul>
            </div>
            <br/>
        </div>
    </div>
)
}
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
