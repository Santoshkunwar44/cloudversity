
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'
import CourseRoom from './pages/CourseRoom/CourseRoom'
import Welcome from './pages/Auth/Welcome/Welcome'
import Authenticate from './pages/Auth/Authenticate/Authenticate'
import Otp from './pages/Auth/Otp/Otp'
import UserSetup from './pages/Auth/UserSetup/UserSetup'
import useSetup from './hooks/useSetup'
import { useSelector } from 'react-redux'
import { State } from './redux/reducer'
import CreateCourse from './pages/CreateCourse/CreateCourse'



function App() {

  useSetup()
  const {user} = useSelector((state:State)=>state.user)
  const {userFetched} =useSelector((state:State)=>state.other)
  console.log("the user ",user)

  if(!userFetched) return;


  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element={  <Navigate to={  user ? "/courses":"/authenticate"}/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/courses' element={<Course/>}  />
      <Route path='/authenticate' element={<Authenticate/>}/>
      <Route path='/course/:courseName' element={<CourseRoom/>} />
      <Route path='/otp-confirmation' element={<Otp/>} />
      <Route path='/usersetup' element={<UserSetup/>}/>
      <Route path='/create-course' element={<CreateCourse/>}/>
    </Routes>
    </div>

    </>
  )
}

export default App
