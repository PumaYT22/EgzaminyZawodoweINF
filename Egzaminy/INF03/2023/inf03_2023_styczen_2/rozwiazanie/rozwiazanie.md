---

# Rozwiązanie arkusza INF 03 styczeń 2023 - 2


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.html
    - kalkulator.html
    - cennik.php
    - styl2.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować,zapis w szarości) oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
     <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT * FROM pokoje;</code></pre>
            Ta kwerenda wybiera wszystkie kolumny z tabeli <code>pokoje</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT id_pok, sezon FROM rezerwacje WHERE liczba_dn > 7;</code></pre>
            Ta kwerenda wybiera kolumny <code>id_pok</code> i <code>sezon</code> z tabeli <code>rezerwacje</code> dla rekordów, gdzie kolumna <code>liczba_dn</code> (liczba dni) jest większa niż 7.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT SUM(liczba_dn) FROM rezerwacje WHERE sezon = "zima";</code></pre>
            Ta kwerenda używa funkcji agregującej:
            <ul>
                <li>
                    <code>SUM(liczba_dn)</code> oblicza sumę wartości w kolumnie <code>liczba_dn</code> dla wszystkich rekordów, gdzie kolumna <code>sezon</code> jest równa "zima".
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>UPDATE rezerwacje SET liczba_dn = 4 WHERE liczba_dn < 4;</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>liczba_dn</code> w tabeli <code>rezerwacje</code>, ustawiając wartość na 4 dla wszystkich rekordów, gdzie <code>liczba_dn</code> jest mniejsza niż 4.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT * FROM pokoje;
2. SELECT id_pok, sezon FROM rezerwacje WHERE liczba_dn > 7;
3. SELECT SUM(liczba_dn) FROM rezerwacje WHERE sezon = "zima";
4. UPDATE rezerwacje SET liczba_dn = 4 WHERE liczba_dn < 4;
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wynajem pokoi</title>
        <link rel="stylesheet" href="styl2.css">
    </head>
    <body>
        <header>
            <h1>Pensjonat pod dobrym humorem</h1>
        </header>

        <div id="lewy">
            <a href="index.html">GŁÓWNA</a>
            <img src="1.jpeg" alt="pokoje">
        </div>

        <div id="srodkowy">
            <a href="cennik.php">CENNIK</a>
            <img src="2.jpeg" alt="pokoje">
        </div>

        <div id="prawy">
            <a href="kalkulator.html">KALKULATOR</a>
            <img src="3.jpeg" alt="pokoje">
        </div>

        <footer>
            <p>Stronę opracował: NaukaOdZera</p>
        </footer>
    </body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera baner z animacją, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="kalkulator.html">
      
### kalkulator.html

```html
Strona w trakcie budowy
```

**Wyjaśnienie:**
- Pusty plik HTML

    
</CodeGroupItem>
<CodeGroupItem title="cennik.php">
      
### cennik.php

```php
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wynajem pokoi</title>
        <link rel="stylesheet" href="styl2.css">
    </head>
    <body>
        <header>
            <h1>Pensjonat pod dobrym humorem</h1>
        </header>

        <div id="lewy">
            <a href="index.html">GŁÓWNA</a>
            <img src="1.jpeg" alt="pokoje">
        </div>

        <div id="srodkowy">
            <a href="cennik.php">CENNIK</a>
            <table>
                <?php
                    $conn = new mysqli("localhost","root","","wynajem");

                    $sql = "SELECT * FROM pokoje";
                    $result = $conn->query($sql);
    
                    while($row = $result -> fetch_array()) {
                        echo "<tr>";
                            echo "<td>".$row[0]."</td>";
                            echo "<td>".$row[1]."</td>";
                            echo "<td>".$row[2]."</td>";
                        echo "</tr>";
                    }

                    $conn -> close();
                ?>
            </table>
        </div>

        <div id="prawy">
            <a href="kalkulator.html">KALKULATOR</a>
            <img src="3.jpeg" alt="pokoje">
        </div>

        <footer>
            <p>Stronę opracował: NaukaOdZera</p>
        </footer>
    </body>
</html>
```

**Wyjaśnienie:**
- Plik PHP dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt PHP, który pobiera dane zapytaniem select i wyświetla je na stronie.
    
</CodeGroupItem>
<CodeGroupItem title="styl2.css">

### Styl2.css

```css
* {
    font-family: Garamond;
    text-align: center;
}

body {
    background: lavender;
}

header,footer {
    background: #AF8EB5;
    color: #fff;
    padding: 10px;
}

footer {
    clear: both;
}

#lewy,#srodkowy,#prawy {
    background: #E1BEE7;
    width: 30%;
    height: 500px;
    padding-top: 40px;
    margin: 15px;
    box-shadow: 10px 10px 10px DimGray;
    float: left;
}

a{
    color: indigo;
    font-size: 150%;
    padding: 10px;
    font-weight: bold;
}

a:hover {
    background: indigo;
    color: white;
}

img,table {
    border: 1px solid #000;
    width: 80%;
    margin: 40px auto;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd obrazka i tabeli zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

</CodeGroupItem>
</CodeGroup>



<blockquote className="warning">
    <strong>UWAGA: Załączanie skryptu PHP</strong>
    Upewnij się, że poprawnie dołączasz skrypt PHP do swoich plików. Możesz to zrobić, używając funkcji <code>include</code> lub <code>require</code> lub wstawić skrypt php w danej sekcji na stronie. Na przykład:
    <pre><code>&lt;?php include 'skrypt.php'; ?&gt;</code></pre>
    lub
    <pre><code>&lt;?php require 'skrypt.php'; ?&gt;</code></pre>
    Pamiętaj, że <code>require</code> zatrzyma wykonywanie skryptu w przypadku błędu, podczas gdy <code>include</code> tylko wyświetli ostrzeżenie i pozwoli na kontynuację. Upewnij się, że ścieżka do pliku jest poprawna     i plik jest dostępny.
    
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

