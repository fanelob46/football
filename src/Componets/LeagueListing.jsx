import React from 'react'

const LeagueListing = (team) => {
    console.log(team.logo)

    return (
      <div className=''>
                  <div className=' m-5 w-[170px] h-[225px] '>
                      
                      <img src={team.logo}/>
                      
  
                      
                  </div>
                
              </div>
    )
}

export default LeagueListing