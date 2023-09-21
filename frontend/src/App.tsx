
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'
import CourseRoom from './pages/CourseRoom/CourseRoom'
import Welcome from './pages/Auth/Welcome/Welcome'
import Authenticate from './pages/Auth/Authenticate/Authenticate'
import Otp from './pages/Auth/Otp/Otp'
import UserSetup from './pages/Auth/UserSetup/UserSetup'
import useSetup from './hooks/useSetup'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { State } from './redux/reducer'



function App() {

  useSetup()
  const {user} = useSelector((state:State)=>state.user)

  console.log("the user ",user)

  


  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element={  <Navigate to={user ? "/courses":"/authenticate"}/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/courses' element={<Course/>}  />
      <Route path='/authenticate' element={<Authenticate/>}/>
      <Route path='/course/:courseName' element={<CourseRoom/>} />
      <Route path='/otp-confirmation' element={<Otp/>} />
      <Route path='/usersetup' element={<UserSetup/>}/>
    </Routes>
    </div>

    </>
  )
}

export default App
