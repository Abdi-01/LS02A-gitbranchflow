import React from 'react'
import { Text } from '@chakra-ui/react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';

export default function NavbarComponent() {
   // HOOKS

   // VAR
   const iconClasses = 'd-inline ms-2'

	return (
      <>
         <div className='row m-auto p-2' style={{ backgroundColor: 'rgb(240,244,247)', overflowX: 'hidden'}}>
            <div className='col-10'>
               <Text fontSize='xs' style={{fontWeight: 500}} className='d-inline'>
                  Follow us:
               </Text>
               <AiFillFacebook className={iconClasses}/>
               <AiFillTwitterSquare className={iconClasses}/>
               <AiFillInstagram className={iconClasses}/>
               <AiFillYoutube className={iconClasses}/>
            </div>
            <div className='col-2 text-center' style={{backgroundColor: 'white'}}>
               <div className='p-1 d-inline'>
                  <IoMdCall className='d-inline' />
               </div>
               <Text fontSize='xs' style={{fontWeight: 500}} className='p-1 d-inline'>
                  (818) 919-5619
               </Text>
            </div>
         </div>

         <div className='row m-auto p-2 my-2'>
            <div className='col-10'>
               <Text fontSize='2xl' style={{fontWeight: 50, cursor: 'pointer'}} color='rgb(55,60,97)' className='d-inline'>
                  News Reporting
               </Text>
               <Text fontSize='sm' style={{fontWeight: 500, cursor: 'pointer'}} color='rgb(55,60,97)' className='d-inline ms-4'>
                  Stories
               </Text>
               <Text fontSize='sm' style={{fontWeight: 500, cursor: 'pointer'}} color='rgb(55,60,97)' className='d-inline ms-4'>
                  Forum
               </Text>
               <Text fontSize='sm' style={{fontWeight: 500, cursor: 'pointer'}} color='rgb(55,60,97)' className='d-inline ms-4'>
                  Store
               </Text>
               <Text fontSize='sm' style={{fontWeight: 500, cursor: 'pointer'}} color='rgb(55,60,97)' className='d-inline ms-4'>
                  Contact
               </Text>
            </div>
            <div className='col-2 text-end py-2' style={{backgroundColor: 'white'}}>
               <div className='p-1 d-inline'>
                  <FiSearch color='rgb(55,60,97)' className='d-inline' />
               </div>
               <div className='p-1 d-inline ms-5'>
                  <BsBag color='rgb(55,60,97)' className='d-inline' />
               </div>
            </div>
         </div>

         <div className='row m-auto py-1' style={{ backgroundColor: 'rgb(255,252,228)'}}>
            <div className='col-5 p-1' style={{marginLeft: '10vw'}}>
               <div className='d-inline'>
                  <AiOutlineInfoCircle className='d-inline' size={20}/>
               </div> 
               <Text fontSize='sm' style={{fontWeight: 500}} className='d-inline ms-2'>
                  Create a free account to join discussions! 
               </Text>
               <div className='d-inline ms-3'>
                  <AiOutlineClose className='d-inline' size={15}/>
               </div>
            </div>
         </div>
      </>
   )
}
