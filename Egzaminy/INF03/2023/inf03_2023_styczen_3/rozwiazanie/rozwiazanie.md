# Rozwiązanie arkusza INF 03 styczeń 2023 - 3

W tym arkuszu trzeba było wykonać grafikę (przekadrować i przeskalować) oraz stronę internetową z wskazanym html,css,php.

### Kod na Stronę Internetową

#### index.html

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

#### znajdz.php

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

#### styl3.css

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

