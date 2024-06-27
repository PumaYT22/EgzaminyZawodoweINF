---

# Rozwiązanie arkusza INF 03 styczeń 2023 - 4


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - wycieczki.php
    - Styl4.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać zapytania do sql oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
   <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna = TRUE;</code></pre>
            Ta kwerenda wybiera kolumny <code>id</code>, <code>dataWyjazdu</code>, <code>cel</code> i <code>cena</code> z tabeli <code>wycieczki</code> dla rekordów, gdzie kolumna <code>dostepna</code> jest równa <code>TRUE</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis DESC;</code></pre>
            Ta kwerenda wybiera kolumny <code>nazwaPliku</code> i <code>podpis</code> z tabeli <code>zdjecia</code>, sortując wyniki malejąco według kolumny <code>podpis</code> dzięki użyciu klauzuli <code>ORDER BY</code> z parametrem <code>DESC</code>.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT cel, cena, podpis FROM zdjecia JOIN wycieczki ON zdjecia.id = wycieczki.zdjecia_id WHERE cena > 1200;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>zdjecia</code> z tabelą <code>wycieczki</code> na podstawie kolumny <code>id</code> w tabeli <code>zdjecia</code> oraz kolumny <code>zdjecia_id</code> w tabeli <code>wycieczki</code>.
                </li>
                <li>
                    Wynik zawiera kolumny <code>cel</code>, <code>cena</code> i <code>podpis</code> dla rekordów, gdzie kolumna <code>cena</code> jest większa niż 1200.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>ALTER TABLE wycieczki ADD liczbaDni int UNSIGNED AFTER dataWyjazdu;</code></pre>
            Ta kwerenda modyfikuje tabelę <code>wycieczki</code>, dodając nową kolumnę <code>liczbaDni</code> typu <code>int UNSIGNED</code> (tylko wartości nieujemne) po kolumnie <code>dataWyjazdu</code>.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna = TRUE;
2. SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis DESC;
3. SELECT cel, cena, podpis FROM zdjecia JOIN wycieczki ON zdjecia.id = wycieczki.zdjecia_id WHERE cena > 1200;
4. ALTER TABLE wycieczki ADD liczbaDni int UNSIGNED AFTER dataWyjazdu;
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="wycieczki.php">
      
### Wycieczki.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wycieczki po Europie</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <header>
        <h1>BIURO TURYSTYCZNE</h1>
    </header>
    <section>
        <div class="dane">
            <h3>Wycieczki, na które są wolne miejsca</h3>
            <ul>
                <?php
                // Skrypt 1
                $conn = new mysqli("localhost", "root", "", "biuro");
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $sql = "SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna = TRUE";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<li>" . $row["id"] . ". dnia " . $row["dataWyjazdu"] . " jedziemy do " . $row["cel"] . ", cena: " . $row["cena"] . "</li>";
                    }
                } else {
                    echo "Brak dostępnych wycieczek.";
                }
                $conn->close();
                ?>
            </ul>
        </div>
    </section>
    <section style="display: flex;">
        <div class="lewy">
            <h2>Bestselery</h2>
            <table>
                <tr><td>Wenecja</td><td>kwiecień</td></tr>
                <tr><td>Londyn</td><td>lipiec</td></tr>
                <tr><td>Rzym</td><td>wrzesień</td></tr>
            </table>
        </div>
        <div class="srodkowy">
            <h2>Nasze zdjęcia</h2>
            <?php
            // Skrypt 2
            $conn = new mysqli("localhost", "root", "", "biuro");
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT nazwaPliku, podpis FROM zdjecia";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<img src='" . $row["nazwaPliku"] . "' alt='" . $row["podpis"] . "'>";
                }
            } else {
                echo "Brak zdjęć.";
            }
            $conn->close();
            ?>
        </div>
        <div class="prawy">
            <h2>Skontaktuj się</h2>
            <a href="mailto:turysta@wycieczki.pl">napisz do nas</a>
            <p>telefon: 111222333</p>
        </div>
    </section>
    <footer>
        <p>Stronę wykonał: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">NaukaOdZera</a></p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl4.css">

### Styl4.css

```css
* Domyślne wartości dla wszystkich selektorów */
body {
    font-family: Helvetica, sans-serif;
}

/* Styl dla banera i stopki */
header, footer {
    background-color: #B3BC6D;
    color: white;
    text-align: center;
    padding: 5px;
}

/* Styl dla bloku z danymi */
.dane {
    background-color: #FFFFCE;
    color: Olive;
    padding: 10px 150px;
}

/* Styl dla bloku lewego i prawego */
.lewy, .prawy {
    background-color: #E6EE9C;
    width: 25%;
    height: 450px;
    text-align: center;
}

/* Styl dla bloku środkowego */
.srodkowy {
    background-color: #FFFFCE;
    width: 50%;
    height: 450px;
}

/* Styl dla tabeli */
table {
    border: 1px solid Olive;
    margin: auto;
    width: 70%;
}

/* Styl dla nagłówka drugiego stopnia */
h2 {
    text-align: center;
}

/* Styl dla pierwszej litery nagłówka drugiego stopnia */
h2::first-letter {
    font-size: 150%;
    color: Olive;
}

/* Styl dla obrazów */
img {
    height: 100px;
    padding: 7px;
}

/* Styl dla obrazów w momencie najechania kursorem */
img:hover {
    background-color: #B3BC6D;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd obrazka zostały ustawione, aby strona była estetyczna i spójna.
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
