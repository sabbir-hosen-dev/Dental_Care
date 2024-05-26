import { createContext, useState } from "react";

export const DoctorContex = createContext();


export const DoctorContextProvider = ({children}) => {

  const [user,setUser] = useState({
    name:"",
    email:"",
    image:"",
    login:false
  })

  const data = {
    name: "",
    login:"",
    user: user,
    setUser: setUser
  }
  console.log(user)
  return (
    <DoctorContex.Provider value={data}>
      {children}
    </DoctorContex.Provider>
  )

}