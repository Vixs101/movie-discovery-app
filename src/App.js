import './App.css';
import SearchBar from './components/searchBar';
import './components/searchBar.css';
import HeroText from './components/heroText';

function App() {
  return (
    <div className='hero_section'>
      <nav className='navbar'>
        <img src="/logo_img.png" alt="Logo" className="logo_img" />
        <SearchBar />
        <div className='box'>
          <a href='blank' className='sign_in'>Sign in</a>
          <a href='blank'><img src='/menu_img.png' alt='Menu' className='menu_img' /></a>
        </div>
      </nav>
      <HeroText />
    </div>
  );
}

export default App;
