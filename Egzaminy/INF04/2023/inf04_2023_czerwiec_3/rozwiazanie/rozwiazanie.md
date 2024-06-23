# Rozwiązanie arkusza INF 04 czerwiec 2023 - 3

W tym arkuszu trzeba było wykonać aplikację konsolową (klasę film) i stronę internetową w react,angular z bootstrap oraz dokumentacje do obu rzeczy.

### Kod na Aplikację konsolową

#### konsola/Film.py

```py
"""
******************************************************
  nazwa klasy: Film

  pola:        
    __tytul - przechowuje tytuł filmu
    __liczba_wypozyczen - przechowuje liczbę wypożyczeń

  metody:  
    ustaw_tytul, None – ustawia tytuł filmu
    pobierz_tytul, str – pobiera tytuł filmu
    pobierz_liczba_wypozyczen, int – pobiera liczbę wypożyczeń
    inkrementuj_liczba_wypozyczen, None – inkrementuje liczbę wypożyczeń

  informacje: Klasa reprezentuje film w systemie wypożyczalni

  autor: NaukaOdZera  (numer zdającego)
******************************************************
"""
class Film:
    def __init__(self):
        self.__tytul = ""
        self.__liczba_wypozyczen = 0

    def ustaw_tytul(self, tytul):
        if len(tytul) <= 20:
            self.__tytul = tytul

    def pobierz_tytul(self):
        return self.__tytul

    def pobierz_liczba_wypozyczen(self):
        return self.__liczba_wypozyczen

    def inkrementuj_liczba_wypozyczen(self):
        self.__liczba_wypozyczen += 1

# Test klasy Film
if __name__ == "__main__":
    film = Film()
    print(f"Początkowy tytuł: {film.pobierz_tytul()}, Początkowa liczba wypożyczeń: {film.pobierz_liczba_wypozyczen()}")
    
    film.ustaw_tytul("Incepcja")
    print(f"Zaktualizowany tytuł: {film.pobierz_tytul()}")
    
    print(f"Liczba wypożyczeń przed inkrementacją: {film.pobierz_liczba_wypozyczen()}")
    film.inkrementuj_liczba_wypozyczen()
    print(f"Liczba wypożyczeń po inkrementacji: {film.pobierz_liczba_wypozyczen()}")
```

### Kod na Stronę Internetową w React + bootstrap


#### Komponent FilmForm.jsx

```jsx
import React, { useState } from 'react';
//Zaimportowanie stylu bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const FilmForm = () => {
  //Tworzenie stanów, czyli takich zmiennych seterów i geterów
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  //Funkcja obsługująca wysłanie formularza, 
  //gdzie event.preventDefault służy do tego aby strona się nie odświeżała
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
```

#### index.css

```css
/* Dodanie paddingu 20px do body zgodnie z poleceniem */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

#### App.js

```jsx
//Zaimportowanie komponentu FilmForm do głównego komponentu aplikacji
import FilmForm from "./components/FilmForm";

function App() {
  return (
    <div className="App">
      <FilmForm></FilmForm>
    </div>
  );
}

export default App;
```

### Dokumentacja Projektów

• Dokumentacja klasy (powyżej opisana - aplikacja konsolowa)

Informacje
• System operacyjny: Windows 10 Pro
• Środowiska programistyczne: Visual Studio Code
• Języki programowania I biblioteki: Python, React, Bootstrap
• Komentarz: brak

Oraz rzuty ekranu do poszczególnych rzeczy
