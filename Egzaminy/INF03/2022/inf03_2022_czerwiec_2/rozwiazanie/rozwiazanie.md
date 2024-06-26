---

# Rozwiązanie arkusza INF 03 czerwiec 2022 - 2


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - obliczenia.html
    - stacja.html
    - Styl2.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
               W tym arkuszu trzeba było wykonać grafikę (przeskalować oraz dodać przeźroczystość do obrazu) 
i zapytania sql oraz stronę internetową z wskazanym html,css,js.

</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT marka, rocznik FROM samochody WHERE kolor="niebieski";</code></pre>
            Ta kwerenda wybiera kolumny <code>marka</code> i <code>rocznik</code> z tabeli <code>samochody</code> dla samochodów, których kolor jest niebieski.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT COUNT(*) FROM samochody WHERE (marka = "Toyota" OR marka = "Opel") AND stan="bardzo dobry";</code></pre>
            Ta kwerenda używa funkcji <code>COUNT(*)</code> do zliczenia wszystkich rekordów w tabeli <code>samochody</code>, gdzie <code>marka</code> jest równa "Toyota" lub "Opel" oraz <code>stan</code> jest równy "bardzo dobry".
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>UPDATE samochody SET stan = "dobry" WHERE rocznik < 2004;</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>stan</code> w tabeli <code>samochody</code>, ustawiając wartość "dobry" dla wszystkich samochodów, których <code>rocznik</code> jest mniejszy niż 2004.
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>CREATE USER "jan"@"localhost" IDENTIFIED BY "janKowalski1@";</code></pre>
            Ta kwerenda tworzy nowego użytkownika bazy danych o nazwie <code>jan</code> z dostępem tylko z lokalnego hosta i hasłem <code>janKowalski1@</code>.
        </li>
        <li>
            <strong>Kwerenda 5:</strong>
            <pre><code>GRANT SELECT, INSERT, UPDATE ON samochody TO "jan"@"localhost";</code></pre>
            Ta kwerenda przyznaje użytkownikowi <code>jan</code> uprawnienia <code>SELECT</code>, <code>INSERT</code> i <code>UPDATE</code> na tabeli <code>samochody</code>.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT marka, rocznik FROM samochody WHERE kolor="niebieski";
2. SELECT COUNT(*) FROM samochody WHERE (marka = "Toyota" OR marka = "Opel") AND stan="bardzo dobry";
3. UPDATE samochody SET stan = "dobry" WHERE rocznik < 2004;
4. CREATE USER "jan"@"localhost" IDENTIFIED BY "janKowalski1@";
5. GRANT SELECT, INSERT, UPDATE ON samochody TO "jan"@"localhost";
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="obliczenia.html">
      
### Obliczenia.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Stacja paliw</title>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
    <section id="banner">
        <h1>Całodobowa stacja paliw</h1>
    </section>
    <section id="menu">
        <a href="stacja.html"><img src="home.png" alt="Home"></a>
        <a href="obliczenia.html"><img src="znak.png" alt="Obliczenia"></a>
        <a href="kwerendy.txt">Pobierz dokumenty</a>
    </section>
    <main>
        <section id="left">
            <h2>Orientacyjny koszt paliwa</h2>
            <label for="fuelType">Rodzaj paliwa (1-benzyna, 2-olej napędowy):</label><br>
            <input type="number" id="fuelType" name="fuelType">
            <br>
            <label for="liters">Ile litrów?</label><br>
            <input type="number" id="liters" name="liters">
            <br>
            <button onclick="calculateCost()">OBLICZ</button>
            <p id="result"></p>
        </section>
        <section id="right">
            <img src="samochod.png" alt="samochód">
        </section>
    </main>
   
    <footer>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
    <script>
        function calculateCost() {
            const fuelType = parseInt(document.getElementById('fuelType').value);
            const liters = parseInt(document.getElementById('liters').value);
            let cost = 0;

            if (fuelType === 1) {
                cost = liters * 4;
            } else if (fuelType === 2) {
                cost = liters * 3.5;
            }

            document.getElementById('result').innerText = `koszt paliwa: ${cost} zł`;
        }
    </script>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Skrypt JavaScript `calculateCost` jest używany do wyświetlania obliczonych danych w elemencie `<p>` o id `result`.

</CodeGroupItem>
<CodeGroupItem title="stacja.html">
      
### Stacja.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Stacja paliw</title>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
    <section id="banner">
        <h1>Całodobowa stacja paliw</h1>
    </section>
    <section id="menu">
        <a href="stacja.html"><img src="home.png" alt="Home"></a>
        <a href="obliczenia.html"><img src="znak.png" alt="Obliczenia"></a>
        <a href="kwerendy.txt">Pobierz dokumenty</a>
    </section>
    <main>
        <section id="left">
            <h2>Godziny otwarcia stacji</h2>
            <table>
                <tr><th>Dzień</th><th>Od</th><th>Do</th></tr>
                <tr><td>Pn-Sb</td><td>6:00</td><td>24:00</td></tr>
                <tr><td>Nd</td><td>7:00</td><td>24:00</td></tr>
            </table>
        </section>
        <section id="right">
            <img src="samochod.png" alt="samochód">
        </section>
    </main>
    <footer>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
  
    
</CodeGroupItem>   
<CodeGroupItem title="styl2.css">

### Styl2.css

```css
body {
    font-family: Cambria, serif;
    text-align: center;
}

#banner, footer {
    background-color: rgb(120, 0, 46);
    color: white;
    padding: 5px;
    font-size: 150%;
}

#menu {
    background-color: rgb(173, 20, 87);
    text-align: left;
}

main{
    display: flex;
}

#left {
    background-color: Snow;
    color: OliveDrab;
    width: 60%;
    height: 322px;
    text-align: left;
}

#left h2{
    text-align: center;
}

#right {
    background-color: rgb(173, 20, 87);
    width: 40%;
    height: 322px;
}

#right img {
    margin: 40px;
    padding: 10px;
}

#right img:hover {
    border: 1px dotted YellowGreen;
}

a {
    padding: 0 50px;
    color: YellowGreen;
}

table, td, th {
    border: 1px solid OliveDrab;
    text-align: center;
}

table {
    width: 90%;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

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
