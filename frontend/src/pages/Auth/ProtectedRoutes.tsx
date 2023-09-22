
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducer'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {user} = useSelector((state:State)=>state.user)

    return user ? <Outlet/> : <Navigate to={"/authenticate"}/>
    
}

export default ProtectedRoutes