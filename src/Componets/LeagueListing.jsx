import React from 'react'

const LeagueListing = (leg) => {
    

    return (
      <div className=''>
                  <div className=' m-5 w-[170px] h-[225px] '>
                      
                  <img  src={leg?.league?.logo}  className='w-20 h-20'/>
                  <h1> {leg?.league?.name}</h1>
                      
  
                      
                  </div>
                
              </div>
    )
}

export default LeagueListing