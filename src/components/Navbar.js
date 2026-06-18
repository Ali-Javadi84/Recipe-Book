import { Link } from 'react-router-dom'

import './Navbar.css'
import Searchbar from './Searchbar'
import { useThem } from '../hooks/useTheme'

export default function Navbar() {
  const {color,changeColor} = useThem()

  return (
    <div className='navbar' style={{background:color}}>
      <nav>
        <Link to='/' className='brand'><h1>Physitech food</h1></Link>
        <Searchbar></Searchbar>
        <Link to='/create'><h1>Creat Recipe</h1></Link>
      </nav>
    </div>
  )
}
