import { createContext, useState } from "react"

const MyContext = createContext()

export default MyContext;

export const ContextWrapper = ({children}) =>{

    const [mail,setEmail] = useState("")
    const [authorized,setAuthorized] = useState(false);

    const ContextData = {
        mail: mail,
        setEmail: setEmail,
        authorized : authorized,
        setAuthorized : setAuthorized
    }

    return <MyContext.Provider value={ContextData} >{children}</MyContext.Provider>;
};