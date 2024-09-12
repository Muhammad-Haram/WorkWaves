import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import SingleJob from './SingleJob'

const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Search Results ({random.length}) </h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          {
            random.map((job) => {
              return (
                <SingleJob />
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Browse