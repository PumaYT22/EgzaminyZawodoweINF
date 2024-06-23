import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const FilmForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tytuł: ${title}; Rodzaj: ${genre}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="filmTitle">Tytuł filmu</label>
          <input
            type="text"
            className="form-control"
            id="filmTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmGenre">Rodzaj</label>
          <select
            className="form-control"
            id="filmGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Dramat</option>
            <option value="3">Akcja</option>
            <option value="4">Horror</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary my-3">Dodaj</button>
      </form>
    </div>
  );
};

export default FilmForm;
