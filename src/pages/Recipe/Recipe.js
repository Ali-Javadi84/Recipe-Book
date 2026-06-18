import './Recipe.css'

import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function Create() {

  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/'+id;
  const {data:recipe , isLoading , error }=useFetch(url)


  return (
    <div className='recipe'>
      { isLoading && <div className='loading'> Loading...</div>}
      {error && <div className='error'> {error}</div>}
      { recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>{recipe.cookingTime} to Cook .</p>
          <ul>
            {recipe.ingredients.map((ing ) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{ recipe.method}</p>
        </>
      )}
    </div>
  )
}
