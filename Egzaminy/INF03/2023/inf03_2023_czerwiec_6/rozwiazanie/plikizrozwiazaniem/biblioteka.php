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
