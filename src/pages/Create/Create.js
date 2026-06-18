import { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useThem } from '../../hooks/useTheme'

export default function Create() {

  const [title , setTitle] = useState('')
  const [method , setMethod] = useState('')
  const [cookingTime , setCookingTime] = useState('')
  const [newIng , setNewIng] = useState('')
  const navigate = useNavigate()
  const [ingredients , setIngredients] = useState([])
  const { data , isLoading , error , postData} = useFetch('http://localhost:3000/recipes','POST')

  const {mode}= useThem()

  const handleSubmit = (e)=>{
    e.preventDefault() ; 
    postData({title,ingredients,method,cookingTime:cookingTime+" minutes"})
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    if(newIng && !ingredients.includes(newIng)){
      setIngredients(prevIng=>[...prevIng,newIng])
    }
    setNewIng('')
  }

  useEffect(()=>{

    if(data){
      navigate('/')
    }
  },[data])

  return (
    <div className={`create ${mode}`}>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title :</span>
          <input type="text"
          onChange={(e)=>setTitle(e.target.value)} 
          value={title}
          required/>
        </label>
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input type="text" 
            onChange={(e)=>setNewIng(e.target.value)}
            value={newIng}/>
          <button className='btn'
          onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Cuttent Ingredients : {ingredients.map(i => <em key={i}>{i}</em>)}</p>
        <label>
          <span>Recipe Method :</span>
          <textarea 
          onChange={(e)=> setMethod(e.target.value)}
          value={method} 
          required/>
        </label>
        <label>
          <span>Cooking Time (m) :</span>
          <input type="number"
          onChange={(e)=> setCookingTime(e.target.value)}
          value={cookingTime}
          required />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
