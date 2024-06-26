---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 5


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.html
    - twarz.html
    - Styl7.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                - Przeskalowanie grafik do odpowiednich wielkości
                - Zapytania do bazdy danych
                - Strona dwa html,css i js 
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT nazwa, cena FROM uslugi WHERE cena >= 50;</code></pre>
            Ta kwerenda wybiera kolumny <code>nazwa</code> i <code>cena</code> z tabeli <code>uslugi</code> dla usług, których cena jest równa lub większa niż 50.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT AVG(cena) AS srednia_cena, COUNT(*) AS liczba_uslug FROM uslugi WHERE rodzaj = 1;</code></pre>
            Ta kwerenda używa funkcji agregujących:
            <ul>
                <li>
                    <code>AVG(cena)</code> oblicza średnią wartość w kolumnie <code>cena</code> dla usług, gdzie <code>rodzaj</code> jest równy 1, zwracając ją jako <code>srednia_cena</code>.
                </li>
                <li>
                    <code>COUNT(*)</code> liczy wszystkie rekordy spełniające ten warunek, zwracając wynik jako <code>liczba_uslug</code>.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>CREATE USER 'kosmetyczka'@'localhost' IDENTIFIED BY 'Kosmet34';</code></pre>
            Ta kwerenda tworzy nowego użytkownika bazy danych o nazwie <code>kosmetyczka</code> z dostępem tylko z lokalnego hosta i hasłem <code>Kosmet34</code>.
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>GRANT SELECT, UPDATE ON salon.uslugi TO 'kosmetyczka'@'localhost';</code></pre>
            Ta kwerenda przyznaje użytkownikowi <code>kosmetyczka</code> uprawnienia <code>SELECT</code> i <code>UPDATE</code> na tabeli <code>uslugi</code> w bazie danych <code>salon</code>.
        </li>
    </ul>

</blockquote>

### kwerendy.txt

```sql
1. SELECT nazwa, cena FROM uslugi WHERE cena >= 50;
2. SELECT AVG(cena) AS srednia_cena, COUNT(*) AS liczba_uslug 
    FROM uslugi 
    WHERE rodzaj = 1;
3. CREATE USER 'kosmetyczka'@'localhost' IDENTIFIED BY 'Kosmet34';
4. GRANT SELECT, UPDATE ON salon.uslugi TO 'kosmetyczka'@'localhost';
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="index.html">
      
### Index.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Salon kosmetyczny</title>
    <link rel="stylesheet" href="styl7.css">
</head>
<body>


    <section id="container">
        <section id="lewy">
            <section id="lewy-1">
                <h2>Nasza oferta</h2>
                <ol>
                    <li><a href="twarz.html">Oczyszczanie twarzy</a>
                        <ul>
                            <li>Peeling</li>
                            <li>Maska</li>
                        </ul>
                    </li>
                    <li>Masaż</li>
                    <li>Makijaż</li>
                </ol>
                <a href="index.html">Strona główna</a>
            </section>
            <section id="lewy-2">
                <img src="obraz1.jpg" alt="Personel">
            </section>
        </section>
        <section id="prawy">
            <section id="prawy-1">
                <h1>Usługi kosmetyczne</h1>
            </section>
            <section id="prawy-2">
                <p>Witaj! Miło nam, że odwiedziłeś nasz salon. Zapoznaj się z ofertą lub skontaktuj się z nami.</p>
                <img src="obraz2.jpg" alt="Zrelaksuj się">
                <h3>Telefon: 111 222 333</h3>
            </section>
        </section>
        
    </section>
    <footer>
        <p>Autor: [Numer zdającego]</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera baner, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="twarz.html">
      
### Twarz.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Salon kosmetyczny</title>
    <link rel="stylesheet" href="styl7.css">
</head>
<body>
    <section id="container">
        <section id="lewy">
            <section id="lewy-1">
                <h2>Nasza oferta</h2>
                <ol>
                    <li><a href="twarz.html">Oczyszczanie twarzy</a>
                        <ul>
                            <li>Peeling</li>
                            <li>Maska</li>
                        </ul>
                    </li>
                    <li>Masaż</li>
                    <li>Makijaż</li>
                </ol>
                <a href="index.html">Strona główna</a>
            </section>
            <section id="lewy-2">
                <img src="obraz1.jpg" alt="Personel">
            </section>
        </section>
        <section id="prawy">
            <section id="prawy-1">
                <h1>Usługi kosmetyczne</h1>
            </section>
            <section id="prawy-2">
                <h3>Kalkulator ceny wizyty</h3>
                <form>
                    <input  type="checkbox" id="peeling" name="peeling">
                    <label for="peeling">Peeling</label><br>
                    <input  type="checkbox" id="maska" name="maska">
                    <label for="maska">Maska</label><br>
                    <input  type="checkbox" id="masaz-twarzy" name="masaz-twarzy">
                    <label for="masaz-twarzy">Masaż twarzy</label><br>
                    <input  type="checkbox" id="makijaz" name="makijaz">
                    <label for="makijaz">Makijaż</label><br>
                    <button type="button" onclick="obliczCene()">Oblicz cenę</button>
                    <p id="wynik"></p>
                </form>
            </section>
        </section>
        
    </section>
    <footer>
        <p>Autor: [Numer zdającego]</p>
    </footer>

    <script>
        function obliczCene() {
            let suma = 0;
            if (document.getElementById('peeling').checked) suma += 45;
            if (document.getElementById('maska').checked) suma += 30;
            if (document.getElementById('masaz-twarzy').checked) suma += 20;
            if (document.getElementById('makijaz').checked) suma += 50;
            document.getElementById('wynik').innerHTML = 'Cena zabiegów: ' + suma + ' PLN';
        }

    </script>

</body>
</html>
```

**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt JavaScript `obliczCene` jest używany do wyświetlania obliczonych danych w elemencie `<p>` o id `wynik`.
    
</CodeGroupItem>   
<CodeGroupItem title="styl7.css">

### Styl7.css

```css
body {
    font-family: Cambria, serif;
}

#container{
    display: flex;
    flex-direction: row;
}

#lewy{
    display: flex;
    flex-direction: column;
    background-color: #E1BEE7;
    width: 25%;
   
}

#prawy{
    display: flex;
    flex-direction: column;
    width: 75%;
    font-size: 170%;
    text-align: center;
}

#prawy-1{
    background-color: #9C64A6;
    color:white;
    height: 150px;
    letter-spacing: 5px;
}

#prawy-2{
    color: indigo;
    height: 580px;
}

#lewy-1{
    height: 400px;
}

#lewy-2{
    height: 330px;
}

footer {
    background-color: #9C64A6;
    color: white;
    clear: both;
    padding: 10px;
    text-align: center;
}


h2 {
    text-align: center;
}

ul {
    list-style-type: circle;
}

img {
    padding: 4px;
    margin: 15px;
}

img:hover {
    padding: 3px;
    border: 1px dashed indigo;
}

a {
    padding: 25px;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- pseudoklasa czyli ":" w css w tym przypadku hover służy do definicji stylu dla elementu nad którym jest kursor.

</CodeGroupItem>
</CodeGroup>


<blockquote className="warning">
                <strong>UWAGA: Załączanie skryptu</strong>
                Upewnij się, że poprawnie dołączasz skrypt do swoich plików. Możesz to zrobić, dodając go jako zewnętrzny plik za pomocą
                 <code> &lt;script src="skrypt.js"&gt;&lt;/script&gt;</code> albo umieszczając skrypt bezpośrednio w treści strony. W tym przypadku, najlepiej umieścić skrypt na końcu dokumentu, tuż przed zamykającym znacznikiem <code>&lt;/body&gt;</code>.
    </blockquote>

---

## Podsumowanie

🎉 **Gratulacje!** Udało Ci się stworzyć stronę internetową z grafiką i animacją oraz formularzem kontaktowym.

#### Przydatne zasoby:
- [HTML Odwołanie](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [PHP Odwołanie](https://phpkurs.pl/)

<blockquote className="danger">
                <strong>UWAGA: Egzamin zawodowy INF03</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu inf03. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*

