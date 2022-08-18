import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Text,Avatar,Image, Divider} from '@chakra-ui/react'
import { BiBookmark, BiDotsHorizontalRounded } from 'react-icons/bi';

const LeftSideCard = () => {

  const[newsData, setNewsData]=useState([])

  console.log(newsData[0])
  console.log(newsData[0])

const getData=()=>{
  axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-07-18&sortBy=publishedAt&apiKey=37289cf2d36642a6aaa772ceb8613fd6")
  .then((res)=>{
    console.log(res.data)
    setNewsData(res.data.articles)
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
  getData()
}, [])

const printData = ()=>{
  return newsData.map((val,idx)=>{
    return(
      <div key={idx}>
          <div className='row'>
            <div className='col-8'>
            <div className='d-flex mb-2'>
            <Avatar size={'sm'} name={val.source.name} />
            <Text className='ms-2 mt-1' fontSize={'sm'}>{val.author}</Text>
            </div>
            <div className='mb-2'>
              <Text className='fw-bold mb-1 w-75'>{val.title}</Text>
              <Text className='text-muted w-75' >{val.description}</Text>
            </div>
            <div className='d-flex justify-content-between'>
              <Text fontSize={'xs'} className='text-muted'>{val.publishedAt.split('').splice(0,10).join('')}</Text>
              <Text fontSize={'xs'} className='text-muted'>10 min read</Text>
              <div className='d-flex'>
              <BiBookmark className='me-3'/>
              <BiDotsHorizontalRounded/>
              </div>
            </div>
            </div>
            <div className='col-4'>
              <Image src={val.urlToImage}/>
            </div>
      </div>
            <Divider mt={5} mb={3} color={'gray.50'} />
      </div>
    )
  })
}

  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <Text className='fw-bold mb-3' fontSize={'lg'}>Top Stories</Text>
          {printData()}
        </div>
      </div>
    </div>
  )
}

export default LeftSideCard