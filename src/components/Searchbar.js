import { useState } from 'react'
import './Searchbar.css'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {

    const [term , setTerm]= useState("")
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();

        navigate(`/search?q=${term}`)
    }
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label>
            <span>Search:</span>
            <input type="text" onChange={e => setTerm(e.target.value)}/>
        </label>
      </form>
    </div>
  )
}
