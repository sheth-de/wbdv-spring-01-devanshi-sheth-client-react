import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import QuizAttempts from "./components/quizzes/quiz-attempts";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
            <Route path="/courses" component={CourseManager}/>
            <Route path="/courses/:courseId/quizzes" exact={true}>
                <QuizzesList/>
            </Route>
            <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                <Quiz/>
            </Route>
            <Route path='/courses/:courseId/quizzes/:quizId/attempts' exact={true}>
                <QuizAttempts/>
            </Route>
          <Route path="/course" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
            <Route path={[
                           "/courses/:layout/edit/:courseId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                           "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                       ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
