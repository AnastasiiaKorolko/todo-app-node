import './Header.css'

const Header = ({ darkMode, toggleDarkMode}) => {
  return (
    <>
        <header>
          <h1>Task Manager</h1>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <img 
              src={darkMode ? '/icons/sun.png' : '/icons/moon.png'} 
              alt="Toogle Theme"
              className='icon'
            />
          </button>
        </header>
    </>

  )
}

export default Header;