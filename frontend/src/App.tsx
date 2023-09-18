
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Course from './pages/Course/Course'

function App() {


  return (
    <>
    <div className="App">

    <Routes>

      <Route path='/courses' element={<Course/>}  />
      
    </Routes>
    </div>

    </>
  )
}

export default App
