import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {
const {query, searchPost }= useGlobalContext()
  return (
    <div className="">
      <h1>Tech News Hub</h1>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <div>
          <input type="text"  value={query} onChange={(e)=>searchPost(e.target.value)}  placeholder="search here.."/>
        </div>
      </form>
    </div>
  )
}

export default Search