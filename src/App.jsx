import MyLayout from "./components/logOut/MyLayout"
import {Routes,Route} from 'react-router-dom'
import StudentType from "./pages/student/studentType"
import StudentList from "./pages/student/studentList"
import ClassType from "./pages/class/classType"
import ClassList from "./pages/class/classList/classList"
import CourseMenu from "./pages/courseMenu/courseMenu"

function App() {

  return (
    <MyLayout>
      <Routes>
        <Route path="student_menu/student_type" element={<StudentType/>}/>
        <Route path="student_menu/student_list" element={<StudentList/>}/>
        <Route path="class_menu/class_type" element={<ClassType/>}/>
        <Route path="class_menu/class_list" element={<ClassList/>}/>
        <Route path="course_menu" element={<CourseMenu/>}/>
      </Routes>
    </MyLayout>
  )
}

export default App
 