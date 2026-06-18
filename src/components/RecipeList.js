import { Link } from 'react-router-dom'

import './RecipeList.css'
import { useThem } from '../hooks/useTheme'

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
        </div>
      ))}
    </div>
  )
}
