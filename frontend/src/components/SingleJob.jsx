import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Bookmark } from 'lucide-react'

const SingleJob = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="/img/company-logo.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Asyncz</h1>
          <p className='text-sm text-gray-500'>Pakistan</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>Mern Stack Developer</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error itaque
          ea quos exercitationem deserunt voluptatem laudantium ut numquam
          accusantium ipsam vero minima nisi adipisci aut et suscipit iure, ipsa
          facilis.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full Time (9 to 5)</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  )
}

export default SingleJob