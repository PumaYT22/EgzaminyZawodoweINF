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
