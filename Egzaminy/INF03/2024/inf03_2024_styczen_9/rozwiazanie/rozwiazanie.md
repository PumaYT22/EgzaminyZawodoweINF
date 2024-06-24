---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 9

![Animacja](https://raw.githubusercontent.com/PumaYT22/EgzaminyZawodoweINF/main/Egzaminy/INF03/2024/inf03_2024_styczen_9/rozwiazanie/plikizrozwiazaniem/animacja.gif)

---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - Index.html
    - Kontakt.html
    - Styl.css
3. Podsumowanie

---

## Wprowadzenie

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                Wykonanie grafiki i animacji oraz stworzenie strony internetowej z użyciem HTML, CSS i JavaScript.
</blockquote>

---

<CodeGroup>
  <CodeGroupItem title="wedkuj.php">

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <header> <!-- Blok banera -->
        <h1>Portal dla wędkarzy</h1>
    </header>
    <main>  <!-- Kontener na bloki lewe i prawy-->
        <section> <!-- Kontener na dwa bloki lewe -->
            <div> <!-- Blok lewy 1. -->
                <h3>Ryby zamieszkujące rzeki</h3>
                <ol>
                    <!-- <?php
                        Miejsce na skrypt 1.
                    ?> -->
                </ol>
            </div>
            <div> <!-- Blok lewy 2. -->
                <h3>Ryby drapieżne naszych wód</h3>
                <table>
                    <tr>
                        <th>L.p.</th>
                        <th>Gatunek</th>
                        <th>Występowanie</th>
                    </tr>
                    <!-- <?php
                        Miejsce na skrypt 2.
                    ?> -->
                </table>
            </div>
        </section>
        <section> <!-- Blok prawy -->
            <img src="ryba1.jpg" alt="Sum">
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </section>
    </main>
    <footer>
        <p>Stronę wykonał: Wojciech Chrzan Worshox</p>
    </footer>
</body>
</html>
```

  </CodeGroupItem>
  <CodeGroupItem title="styl_1.css">

```css
/* Formatowanie z egzaminu */

* {
    font-family: Helvetica;
}

header, footer {
    background-color: #008387;
    color: white;
    padding: 5px;
    font-size: 130%;
    text-align: center;
}

section div {
    background-color: #EFEFEF;
    width: 55%;
}

section div:first-child {
    height: 150px;
}

section div:last-child {
    height: 300px;
}

section:last-child {
    background-color: #4FB3BF;
    width: 45%;
    height: 450px;
    text-align: center;
}

img {
    box-shadow: 10px 10px 7px DimGray;
    margin: 20px;
}

table, th, td {
    border: 1px solid #4FB3BF;
    border-collapse: collapse;
}

table {
    margin: auto;
    width: 80%;
}

th, td {
    padding: 4px;
}

tr:hover {
    background-color: #4FB3BF;
}

/* Dodatkowe formatowanie do poprawnego układu bloków */

main {
    display: flex;
}

section:first-child {
    width: 55%;
}

section div {
    width: 100%;
}

h3 {
    margin-block: 0;
}
```

  </CodeGroupItem>
</CodeGroup>

## Kod na Stronę Internetową

### Index.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="favicon.png">
    <title>Komputery</title>
</head>
<body>
    <div id="container">
        <div id="baner">
            <img src="animacja.gif" alt="Pogotowie komputerowe">
        </div>
        <div id="menu">
            <a href="index.html">Strona Główna</a>
            <a href="kontakt.html">Kontakt</a>
        </div>
        <div id="glowny1">
            <h3>Kim Jesteśmy?</h3>
            <p>Jesteśmy firmą z wieloletnim doświadczeniem w zakresie IT.</p>
        </div>
        <div id="glowny2">
            <h3>Co robimy?</h3>
            <ul>
                <li>naprawa komputerów</li>
                <li>odzyskiwanie danych</li>
                <li>wirusy</li>
                <li>konfiguracja LAN</li>
            </ul>
        </div>
        <div id="glowny3">
            <h3>Jaki jest nasz znak?</h3>
            <img src="favicon.png" alt="Doświadczenie i niezawodność">
        </div>
        <div id="stopka">
            Autor: <em>NaukaOdZera</em>
        </div>
    </div>
</body>
</html>
```
**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera baner z animacją, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

### Kontakt.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="favicon.png">
    <title>Komputery</title>
</head>
<body>
    <div id="container">
        <div id="baner">
            <img src="animacja.gif" alt="Pogotowie komputerowe">
        </div>
        <div id="menu">
            <a href="index.html">Strona Główna</a>
            <a href="kontakt.html">Kontakt</a>
        </div>
        <div id="glowny1"></div>
        <div id="glowny2">
            <h2>Kontakt</h2>
            <form>
                <table>
                    <tr>
                        <td>Imię: </td>
                        <td><input type="text" name="imie" id="imie"></td>
                    </tr>
                    <tr>
                        <td>Nazwisko: </td>
                        <td><input type="text" name="nazwisko" id="nazwisko"></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text" name="email" id="email"></td>
                    </tr>
                    <tr>
                        <td>Zgłoszenie: </td>
                        <td>
                            <select name="lista" id="lista">
                                <option value="naprawa komputerów">naprawa komputerów</option>
                                <option value="odzyskiwanie danych">odzyskiwanie danych</option>
                                <option value="wirusy">wirusy</option>
                                <option value="konfiguracja LAN">konfiguracja LAN</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" checked>Wyślij kopię wiadomości
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="reset">Czyść</button>
                            <button type="button" onclick="wyslijFormularz()">Wyślij</button>
                        </td>
                    </tr>
                </table>
            </form>
            <hr>
            <p id="paragraf"></p>
        </div>
        <div id="glowny3"></div>
        <div id="stopka">
            Autor: <em>NaukaOdZera</em>
        </div>
    </div>
    <script>
        function wyslijFormularz() {
            var imie = document.getElementById('imie').value;
            var nazwisko = document.getElementById('nazwisko').value.toLowerCase();
            var email = document.getElementById('email').value;
            var lista = document.getElementById('lista').value;
            
            var wiadomosc = `
                ${imie} 
                ${nazwisko} <br>
                ${email} <br>
                Usługa: ${lista}
            `;
            
            document.getElementById('paragraf').innerHTML = wiadomosc;
        }
    </script>
</body>
</html>
```
**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt JavaScript `wyslijFormularz` jest używany do wyświetlania wypełnionych danych w elemencie `<p>` o id `paragraf`.

<blockquote className="warning">
                <strong>UWAGA: Załączanie skryptu</strong>
                Upewnij się, że poprawnie dołączasz skrypt do swoich plików. Możesz to zrobić, dodając go jako zewnętrzny plik za pomocą  
                 <code> &lt;script src="skrypt.js"&gt;&lt;/script&gt;</code> albo umieszczając skrypt bezpośrednio w treści strony. W tym przypadku, najlepiej umieścić skrypt na końcu dokumentu, tuż przed zamykającym znacznikiem <code>&lt;/body&gt;</code>.
            </blockquote>

### Styl.css

```css
body {
    background-color: #E0F7FA;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
#container {
    width: 95%;
    margin: auto;
}
#baner {
    background-color: #00838F;
    height: 200px;
}
#menu {
    background-color: #006064;
    padding: 15px;
}
#menu a {
    color: white;
    text-decoration: none;
    font-size: 150%;
}
#glowny1, #glowny2, #glowny3 {
    float: left;
    height: 350px;
    width: 33%;
}
#stopka {
    clear: both;
    background-color: #006064;
    color: white;
    text-align: right;
    padding: 10px;
}
ul {
    text-align: left;
}
button {
    background-color: #00838F;
    color: white;
}
button:hover {
    color: #80DEEA;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

---

## Podsumowanie

🎉 **Gratulacje!** Udało Ci się stworzyć stronę internetową z grafiką i animacją oraz formularzem kontaktowym.

### Przydatne zasoby:
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
