import { getTrendingMovies } from 'API/MovieDB';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);

  async function getTrends() {
    const films = await getTrendingMovies();
    return films;
  }

  useEffect(() => {
    getTrends().then(data => setFilms(data));
  }, []);

  return (
    <div>
      <h2>Thending today</h2>
      <ul>
        {films.map(({ title, id: movieId }) => {
          return (
            <Link to={`movies/${movieId}`} key={movieId}>
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
