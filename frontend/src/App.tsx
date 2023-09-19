
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'
import CourseRoom from './pages/CourseRoom/CourseRoom'
import Welcome from './pages/Auth/Welcome/Welcome'
import Authenticate from './pages/Auth/Authenticate/Authenticate'
import Otp from './pages/Auth/Otp/Otp'

function App() {


  return (
    <>
    <div className="App">

    <Routes>
      
      <Route path='/' element={<Navigate to={"/courses"}/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/courses' element={<Course/>}  />
      <Route path='/authenticate' element={<Authenticate/>}/>
      <Route path='/course/:courseName' element={<CourseRoom/>} />
      <Route path='/otpConfirmation' element={<Otp/>} />
   
      
    </Routes>
    </div>

    </>
  )
}

export default App
