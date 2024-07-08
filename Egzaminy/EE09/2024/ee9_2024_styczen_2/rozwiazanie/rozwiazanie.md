---

# Rozwiązanie arkusza EE09 styczeń 2024 - 1


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - lotnisko.php
    - Styl5.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,php (ciasteczka).
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="lotnisko.php">
      
### lotnisko.php
      
```php
<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "egzamin";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Skrypt 1: Pobieranie informacji o przylotach
$flights_sql = "SELECT czas, kierunek, nr_rejsu, status_lotu FROM przyloty ORDER BY czas;";
$flights_result = $conn->query($flights_sql);

if ($flights_result === false) {
    die("Error executing query: " . $conn->error);
}

// Skrypt 2: Obsługa ciasteczek
$cookie_name = "visitor";
if (!isset($_COOKIE[$cookie_name])) {
    setcookie($cookie_name, "visited", time() + 7200, "/"); // 2 godziny czyli 7200 sekund
    $cookie_message = "<p><b>Dzień dobry! Strona lotniska używa ciasteczek</b></p>";
} else {
    $cookie_message = "<p><i>Witaj ponownie na stronie lotniska</i></p>";
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Port Lotniczy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header>
        <section id="baner1">
        <img src="zad5.png" alt="logo lotnisko">
        </section>
        <section id="baner2">
            <h1>Przyloty</h1>
        </section>
        <section id="baner3">
            <h3>przydatne linki</h3>
            <a href="kwerendy.txt" target="_blank">Pobierz...</a>
        </section>
    </header>
    
    <section id="glowny">
        <table>
            <thead>
                <tr>
                    <th>czas</th>
                    <th>kierunek</th>
                    <th>numer rejsu</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($flights_result->num_rows > 0) {
                    while ($row = $flights_result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>{$row['czas']}</td>";
                        echo "<td>{$row['kierunek']}</td>";
                        echo "<td>{$row['nr_rejsu']}</td>";
                        echo "<td>{$row['status_lotu']}</td>";
                        echo "</tr>";
                    }
                }
                ?>
            </tbody>
        </table>
    </section>
    <footer>
        <section id="stopka1">
        <?php echo $cookie_message; ?>
        </section>
        <section id="stopka2">
            Autor: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">Rozwiązania Github</a>
        </section>
    </footer>
    
</body>
</html>


```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl5.css">

### Styl5.css

```css
body {
    font-family: Garamond, serif;
    background-color: rgb(30, 144, 255);
    color: white;
}

header{
    display: flex;
}

#baner1, #baner3 {
    width: 25%;
    height: 200px;
    display: inline-block;
    vertical-align: top;
}

#baner2 {
    text-align: center;
    width: 50%;
    height: 200px;
    display: inline-block;
    font-size: 250%;
}

#glowny {
    background-color: rgb(0, 0, 128);
    padding: 60px;
    text-transform: uppercase;
}

footer{
    display: flex;
    
}

#stopka1 {
    text-align: center;
    width: 50%;
    display: inline-block;
}

#stopka2 {
    text-align: right;
    width: 50%;
    display: inline-block;
    padding-top: 100px;
}

p {
    padding: 20px;
    font-size: 200%;
    border: 1px solid rgb(192, 192, 192);
}

p:hover {
    background-color: rgb(192, 192, 192);
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid rgb(192, 192, 192);
    padding: 10px;
    text-align: left;
}

```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.


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
                <strong>UWAGA: Egzamin zawodowy EE09</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu EE09. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*
