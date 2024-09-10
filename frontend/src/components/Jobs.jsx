import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Filter from './Filter'
import SingleJob from './SingleJob'

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <Filter />
          </div>

          {
            jobArray.length <= 0 ? <span>Jobs not Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {jobArray.map((item, index) => (
                    <div>
                      <SingleJob key={index} />
                    </div>
                  ))}
                </div>
              </div>
            )
          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Jobs