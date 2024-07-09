<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wizytówki</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <section id="baner">
        <h1>Wizytówki pracowników</h1>
        <form action="index.php" method="POST">
            <input type="number" name="employee_id" value="1" min="1" max="9" required>
            <button type="submit">WYŚWIETL</button>
        </form>
    </section>

    <section id="wizytowka">
        <?php
            $employee_id = 1;
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $employee_id = intval($_POST["employee_id"]);
            }

            $conn = new mysqli("localhost", "root", "", "firma");

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "SELECT id, imie, nazwisko, adres, miasto FROM pracownicy WHERE id = $employee_id";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<img src='".$row['id'].".jpg' alt='pracownik'>";
                    echo "<h2>".$row['imie']." ".$row['nazwisko']."</h2>";
                    echo "<h4>Adres:</h4>";
                    echo "<p>".$row['adres'].", ".$row['miasto']."</p>";
                }
            } else {
                echo "0 results";
            }

            $conn->close();
        ?>
    </section>

    <footer>
        <section id="stopka-lewa">
            <img src="obraz.jpg" alt="pracownicy firmy">
        </section>
        <section id="stopka-srodek">
            <p>Autorem wizytownika jest: NaukaOdZera</p>
            <a href="http://agencjareklamowa543.pl/" target="_blank">Zobacz nasze realizacje</a>
        </section>
        <section id="stopka-prawa">
            <p>Osoby proszone o podpisanie dokumentu RODO:</p></br>
            <ol>
                <?php
                    $conn = new mysqli("localhost", "root", "", "firma");

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    $sql = "SELECT imie, nazwisko FROM pracownicy WHERE czyRODO = false;";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<li>".$row['imie']." ".$row['nazwisko']."</li>";
                        }
                    } else {
                        echo "<li>Brak osób</li>";
                    }

                    $conn->close();
                ?>
            </ol>
        </section>
    </footer>
</body>
</html>
