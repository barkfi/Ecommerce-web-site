import React ,{useContext}from 'react';
import { ContainnerContext } from '../contexts/ContainnerContext';
import { BsBag } from 'react-icons/bs';


 const Header=()=> {
   const { isOpen,setIsOpen}=useContext(ContainnerContext);
  return (
   <header className='bg-blue-300'>
     <div>Header</div>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
    </div>
    </header>
   

  
  )
}
export default Header;