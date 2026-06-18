import { useThem } from '../hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from '../assets/mode-icon.svg'

const themeColors=["#58249c",'#249c6b','#b70233']

export default function ThemeSelector() {
    const {changeColor ,changeMode , mode}= useThem()

    const toggleMode =()=>{
        changeMode(mode=='dark'?'light':'dark')
    }

    
  return (
      <div className="theme-selector">
        <div className="mode-toggle">
            <img onClick={toggleMode}
             src={modeIcon}
             style={{filter:mode==='dark'?"brightness(0) invert(1)" : "brightness(0)"}}/>
        </div>
        <div className="theme-buttons">
            {themeColors.map((color)=>(
                <div
                 key={color}
                 onClick={()=>changeColor(color)}
                 style={{background:color}}
                 />
            ))}
        </div>
      </div>
  )
}
