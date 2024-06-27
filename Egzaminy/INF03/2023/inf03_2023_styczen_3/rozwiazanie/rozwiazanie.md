---

# Rozwiązanie arkusza INF 03 styczeń 2023 - 3


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.html
    - znajdz.html
    - styl3.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto = "Malbork";</code></pre>
            Ta kwerenda wybiera kolumny <code>nazwa</code> i <code>ulica</code> z tabeli <code>kwiaciarnie</code> dla rekordów, gdzie kolumna <code>miasto</code> jest równa "Malbork".
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT id_kwiaciarni, COUNT(*) FROM zamowienia GROUP BY id_kwiaciarni;</code></pre>
            Ta kwerenda używa funkcji agregującej:
            <ul>
                <li>
                    <code>COUNT(*)</code> zlicza wszystkie rekordy w grupach zdefiniowanych przez kolumnę <code>id_kwiaciarni</code>.
                </li>
                <li>
                    <code>GROUP BY</code> grupuje wyniki na podstawie wartości w kolumnie <code>id_kwiaciarni</code>.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT nazwa, miasto, kwiaty FROM zamowienia JOIN kwiaciarnie ON zamowienia.id_kwiaciarni = kwiaciarnie.id_kwiaciarni WHERE data="2017.01.07";</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>zamowienia</code> z tabelą <code>kwiaciarnie</code> na podstawie kolumny <code>id_kwiaciarni</code> w obu tabelach.
                </li>
                <li>
                    Wynik zawiera kolumny <code>nazwa</code>, <code>miasto</code> i <code>kwiaty</code> dla rekordów, gdzie kolumna <code>data</code> jest równa "2017.01.07".
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>CREATE TABLE klienci (
  id int NOT NULL AUTO_INCREMENT,
  imie varchar(15), nazwisko varchar(15),
  rabat int UNSIGNED,
  PRIMARY KEY (id) );</code></pre>
            Ta kwerenda tworzy nową tabelę o nazwie <code>klienci</code>:
            <ul>
                <li>
                    Kolumna <code>id</code> jest typu <code>int</code>, nie może być pusta (<code>NOT NULL</code>), i jest automatycznie inkrementowana (<code>AUTO_INCREMENT</code>).
                </li>
                <li>
                    Kolumny <code>imie</code> i <code>nazwisko</code> są typu <code>varchar(15)</code>.
                </li>
                <li>
                    Kolumna <code>rabat</code> jest typu <code>int</code> i nie może mieć wartości ujemnych (<code>UNSIGNED</code>).
                </li>
                <li>
                    <code>PRIMARY KEY (id)</code> ustawia kolumnę <code>id</code> jako klucz główny tabeli.
                </li>
            </ul>
        </li>
    </ul>
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Łączenie tabel i sortowanie wyników</strong>
    Aby połączyć dwie tabele w SQL, możesz użyć INNER JOIN, który zwróci tylko te wiersze, które mają dopasowania w obu tabelach. Dodatkowo, używając klauzuli ORDER BY, możesz sortować wyniki w porządku rosnącym (ASC) lub malejącym (DESC).
</blockquote>

### kwerendy.txt

```sql
1. SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto = "Malbork";
2. SELECT id_kwiaciarni, COUNT(*) FROM zamowienia GROUP BY id_kwiaciarni;
3. SELECT nazwa, miasto, kwiaty FROM zamowienia 
JOIN kwiaciarnie ON zamowienia.id_kwiaciarni = kwiaciarnie.id_kwiaciarni WHERE 
data="2017.01.07";
4. CREATE TABLE klienci (
  id int NOT NULL AUTO_INCREMENT,
  imie varchar(15),  nazwisko varchar(15),
  rabat int UNSIGNED,
  PRIMARY KEY (id) );
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
    <title>Kwiaty</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <header>
        <h1>Grupa Polskich Kwiaciarni</h1>
    </header>
    <section style="display: flex;">
        <aside style="flex: 1;">
            <h2>Menu</h2>
            <ol>
                <li><a href="index.html">Strona główna</a></li>
                <li><a href="https://www.kwiaty.pl/" target="_blank">Rozpoznaj kwiaty</a></li>
                <li><a href="znajdz.php">Znajdź kwiaciarnię</a>
                    <ul>
                        <li>w Warszawie</li>
                        <li>w Malborku</li>
                        <li>w Poznaniu</li>
                    </ul>
                </li>
            </ol>
        </aside>
        <main style="flex: 3;">
            <h2>Strona dla miłośników kwiatów</h2>
            <img src="gerbera.jpg" alt="Gerbera">
            <img src="gozdzik.jpg" alt="Goździk">
            <img src="roza.jpg" alt="Róża">
        </main>
    </section>
    <footer>
        <p>Stronę opracował: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF/">NaukaOdZera</a></p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera nagłówek, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="znajdz.php">
      
### znajdz.php

```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Kwiaty</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <header>
        <h1>Grupa Polskich Kwiaciarni</h1>
    </header>
    <section style="display: flex;">
        <aside style="flex: 1;">
            <h2>Menu</h2>
            <ol>
                <li><a href="index.html">Strona główna</a></li>
                <li><a href="https://www.kwiaty.pl/" target="_blank">Rozpoznaj kwiaty</a></li>
                <li><a href="znajdz.php">Znajdź kwiaciarnię</a>
                    <ul>
                        <li>w Warszawie</li>
                        <li>w Malborku</li>
                        <li>w Poznaniu</li>
                    </ul>
                </li>
            </ol>
        </aside>
        <main style="flex: 3;">
            <h2>Znajdź kwiaciarnię</h2>
            <form method="POST" action="znajdz.php">
                <label for="miasto">Podaj nazwę miasta:</label>
                <input type="text" id="miasto" name="miasto">
                <button type="submit">SPRAWDŹ</button>
            </form>
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $miasto = htmlspecialchars($_POST['miasto']);
                $conn = new mysqli("localhost", "root", "", "kwiaciarnia");
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $sql = "SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto='$miasto'";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<h3>" . $row["nazwa"]. ", " . $row["ulica"]. "</h3>";
                    }
                } else {
                    echo "<h3>Brak wyników</h3>";
                }
                $conn->close();
            }
            ?>
        </main>
    </section>
    <footer>
        <p>Stronę opracował: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF/">NaukaOdZera</a></p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Plik PHP dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla miasta.
- Skrypt php wybiera dane z tablicy kwiaciarnie w danym mieście.
    
</CodeGroupItem>   
<CodeGroupItem title="styl3.css">

### Styl3.css

```css
/* Domyślne wartości dla wszystkich selektorów */
body {
    font-family: Georgia, serif;
}

/* Styl dla banera i stopki */
header, footer {
    background-color: #C75B39;
    color: white;
    padding: 10px;
    text-align: center;
}

/* Styl dla bloku lewego */
aside {
    background-color: #FF8A65;
    width: 25%;
    height: 500px;
    padding-top: 50px;
}

/* Styl dla bloku prawego */
main {
    background-color: Snow;
    width: 75%;
    height: 500px;
    text-align: center;
    padding-top: 50px;
}

/* Styl dla obrazów */
img {
    width: 25%;
    margin: 10px;
    box-shadow: 15px 15px 10px DimGray;
}

/* Styl dla elementów listy */
li {
    margin: 5px;
}

/* Styl dla znaków markerów w elementach listy */
ol li::marker, ul li::marker {
    color: Snow;
}

/* Styl dla nagłówka trzeciego stopnia */
h3 {
    margin: 50px 0;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd markerów w elemetnach list zostały ustawione, aby strona była estetyczna i spójna.
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
