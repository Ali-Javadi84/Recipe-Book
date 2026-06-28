import './Home.css'

import RecipeList from '../../components/RecipeList'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useCollection } from '../../hooks/useCollection'

export default function Create() {

  const {collectionData:data , isLoading , error}=useCollection('recipes')  

  return (
    <div className='home'>
      {error && <p className='error'> {error}</p>}
      {isLoading && <p className='loading'> Loading...</p>}
      { data && <RecipeList recipes={data}/>}
    </div>
  )
}
