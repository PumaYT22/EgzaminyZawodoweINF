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

// Skrypt 1: Pobieranie informacji o przylotach
$flights_sql = "SELECT czas, kierunek, nr_rejsu, status_lotu FROM przyloty ORDER BY czas;";
$flights_result = $conn->query($flights_sql);

if ($flights_result === false) {
    die("Error executing query: " . $conn->error);
}

// Skrypt 2: Obsługa ciasteczek
$cookie_name = "visitor";
if (!isset($_COOKIE[$cookie_name])) {
    setcookie($cookie_name, "visited", time() + 7200, "/"); // 2 godziny czyli 7200 sekund
    $cookie_message = "<p><b>Dzień dobry! Strona lotniska używa ciasteczek</b></p>";
} else {
    $cookie_message = "<p><i>Witaj ponownie na stronie lotniska</i></p>";
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Port Lotniczy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header>
        <section id="baner1">
        <img src="zad5.png" alt="logo lotnisko">
        </section>
        <section id="baner2">
            <h1>Przyloty</h1>
        </section>
        <section id="baner3">
            <h3>przydatne linki</h3>
            <a href="kwerendy.txt" target="_blank">Pobierz...</a>
        </section>
    </header>
    
    <section id="glowny">
        <table>
            <thead>
                <tr>
                    <th>czas</th>
                    <th>kierunek</th>
                    <th>numer rejsu</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($flights_result->num_rows > 0) {
                    while ($row = $flights_result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>{$row['czas']}</td>";
                        echo "<td>{$row['kierunek']}</td>";
                        echo "<td>{$row['nr_rejsu']}</td>";
                        echo "<td>{$row['status_lotu']}</td>";
                        echo "</tr>";
                    }
                }
                ?>
            </tbody>
        </table>
    </section>
    <footer>
        <section id="stopka1">
        <?php echo $cookie_message; ?>
        </section>
        <section id="stopka2">
            Autor: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">Rozwiązania Github</a>
        </section>
    </footer>
    
</body>
</html>
