# Rozwiązanie arkusza INF 03 czerwiec 2023 - 11

W tym arkuszu trzeba było wykonać grafikę (przeskalowanie,zapis w szarości),sql oraz stronę internetową z wskazanym html,css,php.

### Zapytania sql

```sql
1. INSERT INTO czytelnicy(`imie`, `nazwisko`, `kod`) VALUES ('Ewelina', 'Romanowska', '56677');
2. SELECT imie, nazwisko FROM czytelnicy ORDER BY nazwisko;
3. SELECT tytul FROM ksiazki JOIN autorzy ON ksiazki.id_autor = autorzy.id WHERE nazwisko = 'Sienkiewicz';
4. SELECT nazwisko, COUNT(tytul) AS ile_tytulow FROM autorzy JOIN ksiazki ON ksiazki.id_autor = autorzy.id GROUP BY nazwisko;
```

### Kod na Stronę Internetową

#### biblioteka.html

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


#### style.css

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
