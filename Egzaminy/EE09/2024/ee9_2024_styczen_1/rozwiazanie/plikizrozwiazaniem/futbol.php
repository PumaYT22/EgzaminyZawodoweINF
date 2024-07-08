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

// Skrypt 1: Pobieranie informacji o rozgrywkach
$matches_sql = "SELECT zespol1, zespol2, wynik, data_rozgrywki FROM rozgrywka WHERE zespol1 = 'EVG'";
$matches_result = $conn->query($matches_sql);

// Skrypt 2: Pobieranie informacji o zawodnikach na podstawie pozycji
$players = [];
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['position'])) {
    $position = intval($_POST['position']);
    $players_sql = "SELECT imie, nazwisko FROM zawodnik WHERE pozycja_id = $position";
    $players_result = $conn->query($players_sql);

    if ($players_result->num_rows > 0) {
        while($row = $players_result->fetch_assoc()) {
            $players[] = $row['imie'] . ' ' . $row['nazwisko'];
        }
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rozgrywki futbolowe</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <section id="baner">
        <h2>Światowe rozgrywki piłkarskie</h2>
        <img src="obraz1.jpg" alt="boisko">
    </section>
    <section id="mecze">
        <?php
        if ($matches_result->num_rows > 0) {
            while($row = $matches_result->fetch_assoc()) {
                echo "<section class='mecz'>";
                echo "<h3>{$row['zespol1']} - {$row['zespol2']}</h3>";
                echo "<h4>{$row['wynik']}</h4>";
                echo "<p>w dniu: {$row['data_rozgrywki']}</p>";
                echo "</section>";
            }
        }
        ?>
    </section>
    <main>
         <section id="glowny">
            <h2>Reprezentacja Polski</h2>
        </section>
    <aside>
        <section id="lewy">
            <p>Podaj pozycję zawodników (1-bramkarze, 2-obrońcy, 3-pomocnicy, 4-napastnicy):</p>
            <form method="POST" action="futbol.php">
                <input type="number" name="position">
                <button type="submit">Sprawdź</button>
            </form>
            <ul>
                <?php
                foreach ($players as $player) {
                    echo "<li>$player</li>";
                }
                ?>
            </ul>
        </section>
        <section id="prawy">
            <img src="zad1.png" alt="piłkarz">
            <p>Autor: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">RozwiązaniaGithub</a></p>
        </section>
    </aside>
    
    </main>

   
    
</body>
</html>
