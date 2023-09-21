import { useEffect } from "react";
import { getSessionApi } from "../utils/Api"

const useSetup = () => {
    useEffect(()=>{
        fetchLoggedInUser()
    },[]);
    const fetchLoggedInUser= async()=>{
        try {
             const {status,data} =    await getSessionApi();            
             if(status===200){
    
             }
        } catch (error) {
            console.log(error)
        }
    }
}

export default useSetup