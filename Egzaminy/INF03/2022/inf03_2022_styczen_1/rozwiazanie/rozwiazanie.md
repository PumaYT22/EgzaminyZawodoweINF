# Rozwiązanie arkusza INF 03 styczen 2022 - 1

W tym arkuszu trzeba było wykonać polecenia do bazy oraz stronę internetową z wskazanym html,css,php.

### Kod na Stronę Internetową

#### restauracja.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Witam na noclegach">
    <title>Restauracja Wszystkie Smaki!</title>
    <link href="styl_1.css" rel="stylesheet">  
</head>
<body>

    <div class="baner">
        <h1>Witamy w Restauracji Wszystkie Smaki</h1>
    </div>
    <div class="panele">
        <div class="plewy">
            <img src="menu.jpg" alt="Nasze Danie">
        </div>
        <div class="pprawy">
            <h4>U nas dobrze zjesz!</h4>
            <ol>
                <li>Obiady od 40zł</li>
                <li>Przękonski od 10zł</li>
                <li>Kolajce od 20zł</li>
            </ol> 
        </div>
    </div>
    <div class="pdolny">
        <h2>Zarezerwuj Stolik On-line</h2>

        <form method="post" action="restauracja.php">

            <label for="date">Data (format rrrr-mm-dd):</label><br>
            <input type="text" id="date" name="date"><br>
            <label for="people">Ile osób?:</label><br>
            <input type="number" id="people" name="people"><br>
            <label for="phone">Twój numer telefonu:</label><br>
            <input type="text" id="phone" name="phone"><br>
            <input type="checkbox" id="agreement" name="agreement">
            <label for="agreement">Zgadzam się na przetwarzanie moich danych osobowych</label><br>
            <button type="reset">WYCZYŚĆ</button>
            <button type="submit">REZERWUJ</button>

        </form>
    </div>
    <div class="stopka">
        Stronę internetował opracował: NaukaOdZera
    </div>

</body>
</html>
```

#### restauracja.php

```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baza";

// Połączenie się z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobranie danych z formularza
$date = $_POST['date'];
$people = $_POST['people'];
$phone = $_POST['phone'];

// Dodanie danych do tabeli rezerwacje (zapytanie sql)
$sql = "INSERT INTO rezerwacje (`data_rez`, `liczba_osob`, `telefon`) VALUES ('$date', '$people', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "Dodano rezerwację do bazy";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Zamknięcie połączenia
$conn->close();
?>
```

#### styl_1.css

```css
body{
    background-color: #F6E5DC;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   
}

.baner{
    background-color: #2F180C;
    text-align: center;
    color:khaki;
    height: 60px;
}

.panele{
    display: flex;
    flex-wrap: wrap;
}

.plewy{
    width: 60%;
}

.pprawy{
    font-size: 150%;
    padding: 70px;
}

.pdolny{
    background-color: #D0B6A8;
    text-align: center;
    padding: 30px;
}

.stopka{
    background-color: #2F180C;
    height: 60px;
    color:khaki;
}


button {
    margin: 10px;
    padding: 5px;
    background-color: #2F180C;
    color: khaki;
}
```