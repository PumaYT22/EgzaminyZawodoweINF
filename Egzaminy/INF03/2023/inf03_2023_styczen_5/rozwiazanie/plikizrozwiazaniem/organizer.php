<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Sierpniowy kalendarz</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header>
        <section id="naglowek">
            <section class="banner">
                <h1>Organizer: SIERPIEŃ</h1>
            </section>
            <section class="banner">
                <form method="post" action="organizer.php">
                    <label for="event">Zapisz wydarzenie: </label>
                    <input type="text" id="event" name="event">
                    <button type="submit">OK</button>
                </form>
            </section>
            <section class="banner">
                <img src="logo2.png" alt="sierpień">
            </section>
        </section>
    </header>
    <main>
        <?php
        // Połączenie z bazą danych
        $conn = new mysqli("localhost", "root", "", "kalendarz");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Obsługa formularza
        if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["event"])) {
            $event = $conn->real_escape_string($_POST["event"]);
            $sql_update = "UPDATE zadania SET wpis='$event' WHERE dataZadania='2020-08-09'";
            $conn->query($sql_update);
        }

        // Pobieranie danych z bazy
        $sql = "SELECT dataZadania, wpis FROM zadania WHERE miesiac = 'sierpien'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<section class='kalendarz'>
                        <h5>{$row['dataZadania']}</h5>
                        <p>{$row['wpis']}</p>
                      </section>";
            }
        } else {
            echo "<p>Brak wydarzeń do wyświetlenia.</p>";
        }

        // Zamknięcie połączenia
        $conn->close();
        ?>
    </main>
    <footer>
        <p>Stronę wykonał: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">NaukaOdZera</a></p>
    </footer>
</body>
</html>
