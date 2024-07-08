---

# Rozwiązanie arkusza EE09 styczeń 2024 - 1


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - futbol.php
    - Styl.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="futbol.php">
      
### futbol.php
      
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

// Skrypt 1: Pobieranie informacji o rozgrywkach
$matches_sql = "SELECT zespol1, zespol2, wynik, data_rozgrywki FROM rozgrywka WHERE zespol1 = 'EVG'";
$matches_result = $conn->query($matches_sql);

// Skrypt 2: Pobieranie informacji o zawodnikach na podstawie pozycji
$players = [];
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['position'])) {
    $position = intval($_POST['position']);
    $players_sql = "SELECT imie, nazwisko FROM zawodnik WHERE pozycja_id = $position";
    $players_result = $conn->query($players_sql);

    if ($players_result->num_rows > 0) {
        while($row = $players_result->fetch_assoc()) {
            $players[] = $row['imie'] . ' ' . $row['nazwisko'];
        }
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rozgrywki futbolowe</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <section id="baner">
        <h2>Światowe rozgrywki piłkarskie</h2>
        <img src="obraz1.jpg" alt="boisko">
    </section>
    <section id="mecze">
        <?php
        if ($matches_result->num_rows > 0) {
            while($row = $matches_result->fetch_assoc()) {
                echo "<section class='mecz'>";
                echo "<h3>{$row['zespol1']} - {$row['zespol2']}</h3>";
                echo "<h4>{$row['wynik']}</h4>";
                echo "<p>w dniu: {$row['data_rozgrywki']}</p>";
                echo "</section>";
            }
        }
        ?>
    </section>
    <main>
         <section id="glowny">
            <h2>Reprezentacja Polski</h2>
        </section>
    <aside>
        <section id="lewy">
            <p>Podaj pozycję zawodników (1-bramkarze, 2-obrońcy, 3-pomocnicy, 4-napastnicy):</p>
            <form method="POST" action="futbol.php">
                <input type="number" name="position">
                <button type="submit">Sprawdź</button>
            </form>
            <ul>
                <?php
                foreach ($players as $player) {
                    echo "<li>$player</li>";
                }
                ?>
            </ul>
        </section>
        <section id="prawy">
            <img src="zad1.png" alt="piłkarz">
            <p>Autor: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">RozwiązaniaGithub</a></p>
        </section>
    </aside>
    
    </main>
  
</body>
</html>

```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl.css">

### Styl.css

```css
body {
    font-family: Tahoma, sans-serif;
    background-color: Crimson;
}

#baner {
    color: white;
    text-align: center;
    height: 370px;
}

#mecze{
     display: flex;
    flex-flow:row wrap;
}

.mecz {
    color: white;
    text-align: center;
    width: 200px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
   
}

.mecz:hover {
    border-color: white;
}

main{
    background-color: WhiteSmoke;
}

#glowny {
    background-color: WhiteSmoke;
    height: 50px;
}

aside{
    display: flex;
}

#lewy {
    background-color: WhiteSmoke;
    width: 70%;
    height: 230px;
}

#prawy {
    background-color: WhiteSmoke;
    width: 30%;
    height: 230px;
    text-align: right;
}

h2 {
    text-align: center;
    letter-spacing: 7px;
    text-transform: capitalize;
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
