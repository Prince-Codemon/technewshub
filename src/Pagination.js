import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page, nbPages, getNextPage, getPrevPage}= useGlobalContext()
  return (
    <>
    <div className="pagination-btn">
      <button onClick={()=>getPrevPage()}>PREV</button>
      <p> {page +1} of {nbPages}</p>
    
      <button onClick={()=>getNextPage()}>Next</button>
      </div>
    </>
  )
}

export default Pagination