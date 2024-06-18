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
