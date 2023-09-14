import './App.css';
import DisplayMovies from './components/displayMovies';

function Movies() {
    return (
        <div className='parent'>
            <div className='heading'>
                <h1 className='heading1'>Featured Movies</h1>
                <p><a href='blank' className='seeMore'>See More &gt;</a></p>
            </div>
            <DisplayMovies />
        </div>
    );
}

export default Movies;
