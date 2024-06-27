# Rozwiązanie arkusza INF 03 styczeń 2023 - 2

W tym arkuszu trzeba było wykonać grafikę (przeskalować,zapis w szarości) oraz stronę internetową z wskazanym html,css,php.

### Kod na Stronę Internetową

#### index.html

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

#### kalkulator.html

```html
Strona w trakcie budowy
```

#### cennik.php

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
#### styl2.css

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
