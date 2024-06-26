---

# Rozwiązanie arkusza INF 03 czerwiec 2023 - 7


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - biblioteka.php
    - style.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalowanie),sql oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>INSERT INTO czytelnicy(`imie`, `nazwisko`, `kod`) VALUES ('Ewelina', 'Romanowska', '56677');</code></pre>
            Ta kwerenda wstawia nowy rekord do tabeli <code>czytelnicy</code> z wartościami dla kolumn <code>imie</code>, <code>nazwisko</code> i <code>kod</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT imie, nazwisko FROM czytelnicy ORDER BY nazwisko;</code></pre>
            Ta kwerenda wybiera kolumny <code>imie</code> i <code>nazwisko</code> z tabeli <code>czytelnicy</code>, sortując wyniki alfabetycznie według kolumny <code>nazwisko</code> dzięki użyciu klauzuli <code>ORDER BY</code>.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT tytul FROM ksiazki JOIN autorzy ON ksiazki.id_autor = autorzy.id WHERE nazwisko = 'Sienkiewicz';</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>ksiazki</code> z tabelą <code>autorzy</code> na podstawie kolumny <code>id_autor</code> w tabeli <code>ksiazki</code> oraz kolumny <code>id</code> w tabeli <code>autorzy</code>.
                </li>
                <li>
                    Wynik zawiera kolumnę <code>tytul</code> dla rekordów, gdzie kolumna <code>nazwisko</code> w tabeli <code>autorzy</code> jest równa 'Sienkiewicz'.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>SELECT nazwisko, COUNT(tytul) AS ile_tytulow FROM autorzy JOIN ksiazki ON ksiazki.id_autor = autorzy.id GROUP BY nazwisko;</code></pre>
            Ta kwerenda używa funkcji agregujących:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>autorzy</code> z tabelą <code>ksiazki</code> na podstawie kolumny <code>id</code> w tabeli <code>autorzy</code> oraz kolumny <code>id_autor</code> w tabeli <code>ksiazki</code>.
                </li>
                <li>
                    <code>COUNT(tytul)</code> zlicza liczbę książek (tytułów) napisanych przez każdego autora, zwracając wynik jako <code>ile_tytulow</code>.
                </li>
                <li>
                    <code>GROUP BY</code> grupuje wyniki na podstawie wartości w kolumnie <code>nazwisko</code>.
                </li>
            </ul>
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
KWERENDA 1:
SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis ASC;
KWERENDA 2:
SELECT cel, dataWyjazdu FROM wycieczki WHERE dostepna=0;
KWERENDA 3:
SELECT wycieczki.cel, wycieczki.cena, zdjecia.podpis FROM wycieczki JOIN zdjecia ON wycieczki.zdjecia_id=zdjecia.id WHERE cena > 1300; 
KWERENDA 4:
DROP TABLE uzytkownik;
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="biblioteka.php">
      
### Biblioteka.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Biblioteka</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Biblioteka w Książkowicach Małych</h1>
    </header>
    <section id="left-panel">
        <h4>Dodaj czytelnika</h4>
        <form action="biblioteka.php" method="post">
            <label for="name">imię:</label>
            <input type="text" id="name" name="name"><br>
            <label for="surname">nazwisko:</label>
            <input type="text" id="surname" name="surname"><br>
            <label for="symbol">symbol:</label>
            <input type="number" id="symbol" name="symbol"><br>
            <button type="submit">AKCEPTUJ</button>
        </form>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST['name'];
            $surname = $_POST['surname'];
            $symbol = $_POST['symbol'];

            // Połączenie z bazą danych
            $conn = new mysqli('localhost', 'root', '', 'biblioteka');
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Dodanie czytelnika do bazy danych
            $sql = "INSERT INTO czytelnicy (imie, nazwisko, kod) VALUES ('$name', '$surname', $symbol)";
            if ($conn->query($sql) === TRUE) {
                echo "Dodano czytelnika $name $surname";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
        }
        ?>
    </section>
    <section id="middle-panel">
        <img src="biblioteka.png" alt="biblioteka">
        <h6>ul. Czytelników&nbsp;15; Książkowice Małe</h6>
        <p><a href="mailto:biuro@bib.pl">Czy masz jakieś uwagi?</a></p>
        
    </section>
    <section id="right-panel">
        <h4>Nasi czytelnicy:</h4>
        <ol>
        <?php
        // Połączenie z bazą danych
        $conn = new mysqli('localhost', 'root', '', 'biblioteka');
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Pobranie listy czytelników
        $sql = "SELECT imie, nazwisko FROM czytelnicy ORDER BY nazwisko;";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<li>" . $row["imie"]. " " . $row["nazwisko"]. "</li>";
            }
        } else {
            echo "0 results";
        }

        $conn->close();
        ?>
        </ol>
    </section>
    <footer>
        <p>Projekt witryny: NaukaOdZera</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="style.css">

### Style.css

```css
* {
    font-family: Tahoma;
}

header, footer {
    background-color: SaddleBrown;
    color: white;
    padding: 3px;
    text-align: center;
}

#left-panel, #right-panel {
    background-color: Tan;
    height: 400px;
    width: 40%;
    float: left;
}

#middle-panel {
    background-color: Wheat;
    height: 400px;
    width: 20%;
    float: left;
}

img {
    margin-right: 20px;
    float: right;
}

h4 {
    text-align: center;
}

input[type="text"], input[type="number"] {
    margin: 5px;
}

ol li:hover {
    background-color: Sienna;
    color: white;
}

footer {
    clear: both;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd inputów o danym typie zostały ustawione, aby strona była estetyczna i spójna.
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
