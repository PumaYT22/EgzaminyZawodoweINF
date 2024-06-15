# Rozwiązanie arkusza INF 03 styczeń 2024 - 1

W tym arkuszu trzeba było wykonać grafikę,sql oraz stronę internetową z wskazanym html,css,php.

### Kod na Stronę Internetową

#### zawody.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zawody wędkarskie</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <section id="header">
        <section id="left">
            <h1>Zawody polskich wędkarzy</h1>
        </section>
        <section id="right">
            <img src="zawody.jpg" alt="wędkowanie">
        </section>
    </section>
    
    <section id="main">
        <h3>Łowiska</h3>
        <ul>
            <li>Zalew Węgrowski</li>
            <li>Zbiornik Bukówka</li>
            <li>Jeziorko Bartbetowskie</li>
            <li>Warta-Obrzycko</li>
        </ul>
        
        <h3>Dodaj zawody wędkarskie</h3>
        <form action="zgloszenie.php" method="post">
            <label for="lowisko">Łowisko: </label>
            <input type="number" id="lowisko" name="lowisko"><br>
            
            <label for="data">Data: </label>
            <input type="date" id="data" name="data"><br>
            
            <label for="sedzia">Sędzia: </label>
            <input type="text" id="sedzia" name="sedzia"><br>
            
            <button type="reset">CZYŚĆ</button>
            <button type="submit">DODAJ</button>
        </form>
    </section>
    
    <section id="footer">
        <section id="footer-left">
            <a href="kwerendy.txt">Pobierz</a>
        </section>
        <section id="footer-right">
            <p>Stronę przygotował: 123456</p>
        </section>
    </section>
</body>
</html>
```


#### zgloszenie.php

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lowisko = $_POST['lowisko'];
    $data = $_POST['data'];
    $sedzia = $_POST['sedzia'];

    $conn = new mysqli('localhost', 'root', '', 'wedkarstwo');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   
    $sql = "INSERT INTO zawody_wedkarskie VALUES (NULL, '0','$lowisko', '$data', '$sedzia')";

    if ($conn->query($sql) === TRUE) {
        echo "Dodano do bazy danych";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
```
#### styl3.css

```css
* {
    font-family: Verdana;
}

#header {
    display: flex;
}

#left, #right {
    background-color: SeaGreen;
    color: white;
    line-height: 150px;
    height: 260px;
    font-size: 160%;
}

#left {
    width: 75%;
}

#right {
    width: 25%;
    text-align: right;
}

#main {
    background-color: MintCream;
    padding: 80px;
}

#footer {
    display: flex;
}

#footer-left, #footer-right {
    background-color: SeaGreen;
    color: white;
    width: 50%;
    height: 70px;
    text-align: center;
}

img {
    margin-right: 35px;
    box-shadow: 15px 15px 10px DimGray;
}

input, button {
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    background-color: MintCream;
    color: SeaGreen;
    padding: 15px;
    line-height: 70px;
}

```
