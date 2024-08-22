import React from 'react'

const Paginations = ({totalPosts, postsPerPage, setCurrentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }
  return (
    <div>
        {pages.map((page, index) => {
            return <button className='bg-black text-white' key={index}
            onClick={() => setCurrentPage(page)}
            >{page}</button>
        })}
    </div>
  )
}

export default Paginations