import { useContext } from "react";
import { DoctorContex } from "../Contex/UseContext";

 const useDoctorContex = () => {
  return useContext(DoctorContex);
};

export default useDoctorContex;