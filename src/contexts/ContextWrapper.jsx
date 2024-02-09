import { useCookieContext } from "./CookieContext";
import { createContext } from "react"
import { useNavigate } from "react-router-dom";
const MyContext = createContext();
export default MyContext;

export const ContextWrapper = ({children}) =>{
    const {cookies} = useCookieContext();
    const navigate = useNavigate();

    const contextData = {
        
    }


    return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
};