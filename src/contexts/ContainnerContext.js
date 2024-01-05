import React ,{useState, createContext} from 'react';

export const ContainnerContext=createContext();

 const  ContainnerProvider=({children})=> {
  const [isOpen, setIsOpen]=useState(false);
  const handleClose=()=>{
    setIsOpen(false);
  }
  return (
    <ContainnerContext.Provider value={{isOpen,setIsOpen,handleClose}}>{children}</ContainnerContext.Provider>
  )
}
export default ContainnerProvider;