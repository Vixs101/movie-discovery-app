import './App.css';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className='hero_section'>
      <nav className='navbar'>
        <img src="/logo_img.png" alt="Logo" className="logo_img" />

        <SearchBar />

      </nav>
    </div>
  );
}

export default App;
