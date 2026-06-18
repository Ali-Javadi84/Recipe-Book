import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'
import { useThem } from './hooks/useTheme';

function App() {

  const {mode}=useThem()
  return (
    <div className={`App ${mode}`}>

      <BrowserRouter>

        <Navbar />
        <ThemeSelector/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
