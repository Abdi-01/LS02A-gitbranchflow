import React from 'react'
import { Text, Input, InputGroup, Button } from '@chakra-ui/react'

export default function FooterComponent() {
	return (
		<>
			<div
				className="d-flex justify-content-center align-items-center"
				style={{
					height: '250px',
					backgroundImage: `url('https://images.unsplash.com/photo-1429292394373-ddbcc6bb7468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')`,
					backgroundColor: 'rgb(26,27,30,0.5)',
					backgroundBlendMode: 'multiply',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div style={{width: '45vw'}} className='text-center'>
					<Text fontSize="3xl" style={{ fontWeight: 500 }} className="d-inline fw-bold text-light">
						Subscribe to get latest stories!
					</Text>
               <InputGroup className='p-2 mt-2'>
                  <Input placeholder="Email" backgroundColor={'white'} className="border-0" borderRadius={0} />
                  <Button colorScheme="orange" className="border-0" style={{fontSize: '0.8rem'}} borderRadius={0}>Get Free Book</Button>
               </InputGroup>
				</div>
			</div>

         <div className='px-3 mt-5'>
            <div className='row'>
               <div className='col-3'>
                  <Text fontSize="md" style={{ fontWeight: 500}} color='rgb(55,60,97)'>
                     Logo
                  </Text>
                  <Text fontSize="md" color='rgb(55,60,97)'>
                     F1 456 Caron Town.
                  </Text>

               </div>
               <div className='col-3'>
                  <Text fontSize="md" style={{ fontWeight: 500 }} color='rgb(55,60,97)'>
                     Our Departments
                  </Text>
               </div>
               <div className='col-3'>
                  <Text fontSize="md" style={{ fontWeight: 500 }} color='rgb(55,60,97)'>
                     Helpful Links
                  </Text>
               </div>
               <div className='col-3'>
                  <Text fontSize="md" style={{ fontWeight: 500 }} color='rgb(55,60,97)'>
                     Subscribe Newsletter
                  </Text>
               </div>
            </div>
         </div>
		</>
	)
}
