
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
import ProtectedRoutes from './pages/Auth/ProtectedRoutes'



function App() {

  useSetup()
  const {user} = useSelector((state:State)=>state.user)
  const {userFetched} =useSelector((state:State)=>state.other)
  

  if(!userFetched) return;


  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element={  <Navigate to={  user ? "/courses":"/authenticate"}/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/authenticate' element={<Authenticate/>}/>
      <Route path='/otp-confirmation' element={<Otp/>} />
      <Route path='/usersetup' element={<UserSetup/>}/>
      <Route element={<ProtectedRoutes/>}>

      <Route path='/courses' element={<Course/>}  />
      <Route path='/course' element={<CourseRoom/>} />
      <Route path='/create-course' element={<CreateCourse/>}/>
      </Route>
    </Routes>
    </div>

    </>
  )
}

export default App
