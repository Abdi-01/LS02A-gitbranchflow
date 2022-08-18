import React from 'react'
import { Text, Input, InputGroup, Button } from '@chakra-ui/react'
import { RiSendPlaneFill, RiInstagramFill } from 'react-icons/ri'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

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
				<div style={{ width: '40vw' }} className="text-center">
					<Text fontSize="2xl" style={{ fontWeight: 500 }} className="d-inline fw-bold text-light">
						Subscribe to get latest stories!
					</Text>
					<InputGroup className="p-2 mt-2">
						<Input placeholder="Email" backgroundColor={'white'} className="border-0" borderRadius={0} />
						<Button colorScheme="orange" className="border-0" style={{ fontSize: '0.8rem' }} borderRadius={0}>
							Get Free Book
						</Button>
					</InputGroup>
				</div>
			</div>

			<div className="container mt-5" style={{ height: '250px' }}>
				<div className="row">
					<div className="col-3">
						<Text fontSize="md" style={{ fontWeight: 500 }} color="rgb(55,60,97)">
							Logo
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							F1 456 Caron Town. <br />
							Office No 3456 <br />
							info@example.com <br />
							234-5825852763 <br />
						</Text>
                  <div className='mt-4'>
                     <div className='text-secondary d-inline p-1' style={{border: '1px solid rgb(166,167,171)', borderRadius: '45px'}}>
                        <FaFacebookF size={15} className='d-inline'/>
                     </div>
                     <div className='text-secondary d-inline ms-2 p-1' style={{border: '1px solid rgb(166,167,171)', borderRadius: '45px'}}>
                        <FaTwitter size={15} className='d-inline'/>
                     </div>
                     <div className='text-secondary d-inline ms-2 p-1' style={{backgroundColor: 'rgb(254,114,35)', border: '1px solid rgb(254,114,35)', borderRadius: '45px'}}>
                        <RiInstagramFill size={15} className='d-inline' color='white'/>
                     </div>
                     <div className='text-secondary d-inline ms-2 p-1' style={{border: '1px solid rgb(166,167,171)', borderRadius: '45px'}}>
                        <FaLinkedinIn size={15} className='d-inline'/>
                     </div>
                  </div>
					</div>
					<div className="col-3">
						<Text fontSize="md" style={{ fontWeight: 500 }} color="rgb(55,60,97)">
							Our Departments
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Home Care
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Medical & Surgical
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Mental Health
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Hounlare & Intensive care
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Diagnosis & Investigation
						</Text>
					</div>
					<div className="col-3">
						<Text fontSize="md" style={{ fontWeight: 500 }} color="rgb(55,60,97)">
							Helpful Links
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Who We Are
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Our Team Mission History
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Awards since 1990 - 2022
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Experience Purpose
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Success Story
						</Text>
					</div>
					<div className="col-3">
						<Text fontSize="md" style={{ fontWeight: 500 }} color="rgb(55,60,97)">
							Subscribe Newsletter
						</Text>
						<Text fontSize="md" className="text-secondary mt-2">
							Value proposition advisor management. Buyer success
						</Text>
						<InputGroup className="mt-2">
							<Input placeholder="Email Address" backgroundColor={'white'} borderRadius={0} />
							<Button colorScheme="orange" style={{ fontSize: '0.8rem' }} borderRadius={0}>
								<RiSendPlaneFill className="mt-1" size={25} />
							</Button>
						</InputGroup>
					</div>
				</div>
			</div>
		</>
	)
}
