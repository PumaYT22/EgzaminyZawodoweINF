---

# Rozwiązanie arkusza INF 03 czerwiec 2023 - 10

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
                W tym arkuszu trzeba było wykonać grafikę (transformację i duplikat) i sql oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
     <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT imie, nazwisko FROM autorzy ORDER BY nazwisko;</code></pre>
            Ta kwerenda wybiera kolumny <code>imie</code> i <code>nazwisko</code> z tabeli <code>autorzy</code>, sortując wyniki alfabetycznie według kolumny <code>nazwisko</code> dzięki użyciu klauzuli <code>ORDER BY</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>INSERT INTO `czytelnicy`(`imie`, `nazwisko`, `kod`) VALUES ('Ewa', 'Kowalska', '145321');</code></pre>
            Ta kwerenda wstawia nowy rekord do tabeli <code>czytelnicy</code> z wartościami dla kolumn <code>imie</code>, <code>nazwisko</code> i <code>kod</code>.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT tytul FROM ksiazki WHERE id_kategoria = 2;</code></pre>
            Ta kwerenda wybiera kolumnę <code>tytul</code> z tabeli <code>ksiazki</code> dla rekordów, gdzie kolumna <code>id_kategoria</code> jest równa 2.
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>SELECT tytul FROM ksiazki JOIN wypozyczenia ON ksiazki.id = wypozyczenia.id_ksiazka WHERE wypozyczenia.id_czytelnik = 2;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>ksiazki</code> z tabelą <code>wypozyczenia</code> na podstawie kolumny <code>id</code> w tabeli <code>ksiazki</code> oraz kolumny <code>id_ksiazka</code> w tabeli <code>wypozyczenia</code>.
                </li>
                <li>
                    Wynik zawiera kolumnę <code>tytul</code> dla rekordów, gdzie <code>wypozyczenia.id_czytelnik</code> jest równy 2.
                </li>
            </ul>
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT imie, nazwisko FROM autorzy ORDER BY nazwisko;
2. INSERT INTO `czytelnicy`(`imie`, `nazwisko`, `kod`) VALUES ('Ewa', 'Kowalska', '145321');
3. SELECT tytul FROM ksiazki WHERE id_kategoria = 2;
4. SELECT tytul FROM ksiazki JOIN wypozyczenia ON ksiazki.id = wypozyczenia.id_ksiazka WHERE wypozyczenia.id_czytelnik = 2;
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="biblioteka.php">
      
### biblioteka.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Biblioteka publiczna</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section id="banner">
        <h1>Biblioteka w Książkowicach Wielkich</h1>
    </section>
    
    <section id="left-panel">
        <h3>Polecamy dzieła autorów:</h3>
        <ol>
            <?php
                $conn = new mysqli('localhost', 'root', '', 'biblioteka');
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT imie, nazwisko FROM autorzy ORDER BY nazwisko";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<li>" . $row["imie"] . " " . $row["nazwisko"] . "</li>";
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
            ?>
        </ol>
    </section>
    
    <section id="center-panel">
        <h3>ul. Czytelnicza 25, Książkowice&nbsp;Wielkie</h3>
        <p><a href="mailto:sekretariat@biblioteka.pl">Napisz do nas</a></p>
        <img src="biblioteka.png" alt="książki">
    </section>
    
    <section id="right-panel-top">
        <h3>Dodaj czytelnika</h3>
        <form action="biblioteka.php" method="post">
            <label>imię: <input type="text" name="imie"></label><br>
            <label>nazwisko: <input type="text" name="nazwisko"></label><br>
            <label>symbol: <input type="number" name="symbol"></label><br>
            <input type="submit" name="submit" value="DODAJ">
        </form>
    </section>
    
    <section id="right-panel-bottom">
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $imie = $_POST['imie'];
                $nazwisko = $_POST['nazwisko'];
                $symbol = $_POST['symbol'];

                $conn = new mysqli('localhost', 'root', '', 'biblioteka');
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "INSERT INTO czytelnicy (imie, nazwisko, kod) VALUES ('$imie', '$nazwisko', '$symbol')";
                if ($conn->query($sql) === TRUE) {
                    echo "Czytelnik $imie $nazwisko został(a) dodany do bazy danych";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

                $conn->close();
            }
        ?>
    </section>
    
    <footer>
        <p>Projekt strony: NaukaOdZera</p>
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
    font-family: Verdana;
}

#banner, footer {
    background-color: #004D40;
    color: white;
    padding: 10px;
    text-align: center;
}

footer >p{
    padding-top: 20px;
    clear: both;
}

#left-panel {
    background-color: #80CBC4;
    color: white;
    height: 500px;
    width: 30%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}

#center-panel {
    background-color: #E0F2F1;
    height: 500px;
    width: 30%;
    float: left;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
}

#right-panel-top, #right-panel-bottom {
    height: 250px;
    width: 40%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}

#right-panel-top {
    background-color: #E0F2F1;
}

#right-panel-bottom {
    background-color: #B2DFDB;
    
}

h3 {
    text-align: center;
}

img {
    padding: 5px;
    height: 150px;
    border: 1px dotted #004D40;
    border-radius: 5px;
}

input[type="text"], input[type="number"] {
    margin: 10px;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd input o danym type zostały ustawione, aby strona była estetyczna i spójna.
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
