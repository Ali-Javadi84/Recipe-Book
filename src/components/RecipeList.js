import { Link } from 'react-router-dom'

import deleteIcon from '../assets/delete-icon.svg'

import './RecipeList.css'
import { useThem } from '../hooks/useTheme'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

const handleClick= async (id)=>{
  try {
    const ref =doc(db,'recipes',id)
    await deleteDoc(ref)
  } catch (error) {
    console.log(error);
    
  }
}

export default function RecipeList({recipes}) {

  const {mode}=useThem()
  return (
    <div className='recipe-list'>
      {recipes.map((recipe)=>(
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipe/${recipe.id}`}>Coock This</Link>
            <img className='delete'
             src={deleteIcon}
            onClick={()=>{handleClick(recipe.id)}} />
        </div>
      ))}
    </div>
  )
}
