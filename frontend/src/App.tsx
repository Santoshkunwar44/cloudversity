
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'
import CourseRoom from './pages/CourseRoom/CourseRoom'

function App() {


  return (
    <>
    <div className="App">

    <Routes>

      <Route path='/courses' element={<Course/>}  />
      <Route path='/course/:courseName' element={<CourseRoom/>} />
   
      
    </Routes>
    </div>

    </>
  )
}

export default App
