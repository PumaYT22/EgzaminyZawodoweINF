---

# Rozwiązanie arkusza INF 03 czerwiec 2023 - 12

---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.php
    - styl.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT nazwa, cena FROM towary LIMIT 4;</code></pre>
            Ta kwerenda wybiera kolumny <code>nazwa</code> i <code>cena</code> z tabeli <code>towary</code>, ograniczając wynik do 4 pierwszych rekordów dzięki użyciu klauzuli <code>LIMIT</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT cena FROM towary WHERE nazwa = 'Ekierka';</code></pre>
            Ta kwerenda wybiera kolumnę <code>cena</code> z tabeli <code>towary</code> dla rekordu, gdzie kolumna <code>nazwa</code> jest równa 'Ekierka'.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>UPDATE dostawcy SET nazwa = "Artykuly szkolne" WHERE id = 2;</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>nazwa</code> w tabeli <code>dostawcy</code>, ustawiając wartość "Artykuly szkolne" dla rekordu, gdzie kolumna <code>id</code> jest równa 2.
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>SELECT promocja, COUNT(*) AS podsumowanie FROM towary GROUP BY promocja;</code></pre>
            Ta kwerenda używa funkcji agregującej:
            <ul>
                <li>
                    <code>COUNT(*)</code> zlicza wszystkie rekordy w grupach zdefiniowanych przez kolumnę <code>promocja</code>, zwracając wynik jako <code>podsumowanie</code>.
                </li>
                <li>
                    <code>GROUP BY</code> grupuje wyniki na podstawie wartości w kolumnie <code>promocja</code>.
                </li>
            </ul>
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT nazwa, cena FROM towary LIMIT 4;
2. SELECT cena FROM towary WHERE nazwa = 'Ekierka';
3. UPDATE dostawcy SET nazwa = "Artykuly szkolne" WHERE id = 2;
4. SELECT promocja, COUNT(*) AS podsumowanie FROM towary GROUP BY promocja
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="index.php">
      
### index.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Hurtownia szkolna</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Hurtownia z najlepszymi cenami</h1>
    </header>
    <section id="left">
        <h2>Nasze ceny</h2>
        <table>
            <?php
            $conn = new mysqli('localhost', 'root', '', 'sklep');
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT nazwa, cena FROM towary LIMIT 4";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>{$row['nazwa']}</td><td>{$row['cena']}</td></tr>";
                }
            }
            $conn->close();
            ?>
        </table>
    </section>
    <section id="center">
        <h2>Koszt zakupów</h2>
        <form action="index.php" method="POST">
            <label for="item">wybierz artykuł:</label>
            <select name="item" id="item">
                <option value="Zeszyt 60 kartek">Zeszyt 60 kartek</option>
                <option value="Zeszyt 32 kartki">Zeszyt 32 kartki</option>
                <option value="Cyrkiel">Cyrkiel</option>
                <option value="Linijka 30 cm">Linijka 30 cm</option>
            </select><br>
            <label for="quantity">liczba sztuk:</label>
            <input type="number" name="quantity" id="quantity"><br>
            <button type="submit">OBLICZ</button>
        </form>
        <?php
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                // Przechwytywanie i sprawdzenie danych z formularza
                $item = $_POST['item'] ?? '';
                $quantity = $_POST['quantity'] ?? '';

                // Sprawdzenie czy dane są poprawne
                if (!empty($item) && is_numeric($quantity) && $quantity > 0) {
                    // Połączenie z bazą danych
                    $conn = new mysqli('localhost', 'root', '', 'sklep');
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // Przygotowanie zapytania SQL i jego wykonanie
                    $sql = "SELECT cena FROM towary WHERE nazwa = '$item'";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        $row = $result->fetch_assoc();
                        $price = $row['cena'];
                        $total = $price * $quantity;
                        echo "<p>wartość zakupów: $total</p>";
                    } else {
                        echo "<p>Nie znaleziono produktu o nazwie: $item</p>";
                    }

                    // Zamknięcie połączenia z bazą danych
                    $conn->close();
                } else {
                    echo "<p>Błąd: proszę podać poprawne dane.</p>";
                }
            }
        ?>
    </section>
    <section id="right">
        <h2>Kontakt</h2>
        <img src="zakupy.png" alt="hurtownia">
        <p><a href="mailto:hurt@poczta2.pl">e-mail: hurt@poczta2.pl</a></p>
    </section>
    <footer>
        <h4>Witrynę wykonał: NaukaOdZera</h4>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl.css">

### Styl.css

```css
* {
    font-family: Georgia;
    text-align: center;
}

header, footer {
    background-color: #4BA3C7;
    color: white;
    height: 80px;
    font-size: 120%;
}

#left, #right {
    background-color: #EFEFEF;
    height: 400px;
    width: 25%;
    float: left;
}

footer{
    clear: both;
}

#center {
    background-color: #90CAF9;
    height: 400px;
    width: 50%;
    float: left;
}

table {
    margin-left: 10px;
    width: 90%;
    border: 1px solid #90CAF9;
}

td {
    padding: 5px;
    border: 1px solid #90CAF9;
}

tr:hover {
    color: #90CAF9;
}

input[type=number] {
    margin: 15px 0;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd tabeli zostały ustawione, aby strona była estetyczna i spójna.
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
