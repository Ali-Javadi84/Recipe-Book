import { useEffect, useState } from 'react';
import './Recipe.css'

import { useParams } from 'react-router-dom';

import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export default function Create() {

  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    const ref = doc(db , 'recipes' , id)
    
    const unsub =onSnapshot(ref , (snapshot)=>{
      if(snapshot.empty){
          setError('No Recipe To Load...')
          setIsLoading(false)
        }else{
          setIsLoading(false)
          setRecipe(snapshot.data())
        }
    })

    return ()=>unsub()

  },[id])

  const handleClick =async()=>{
    try {
      const ref =doc(db ,'recipes' , id)
      await updateDoc(ref , {
        title:'new content'
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='recipe'>
      {isLoading && <div className='loading'> Loading...</div>}
      {error && <div className='error'> {error}</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>{recipe.cookingTime} to Cook .</p>
          <ul>
            {recipe['ingredients'].map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
          <button onClick={handleClick}>Update the Title</button>
        </>
      )}
    </div>
  )
}
