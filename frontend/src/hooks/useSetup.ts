import { useEffect } from "react";
import { getSessionApi } from "../utils/Api"
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useDispatch } from "react-redux";

const useSetup = () => {

    const dispatch = useDispatch()
    const {AddUserAction} = bindActionCreators(actionCreators,dispatch)

    useEffect(()=>{
        fetchLoggedInUser()
    },[]);
    const fetchLoggedInUser= async()=>{
        try {
             const {status,data} =  await getSessionApi();            
             if(status===200){
                AddUserAction(data.message)
             }
        } catch (error) {
            console.log(error)
        }
    }
}

export default useSetup