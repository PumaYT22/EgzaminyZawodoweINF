<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wycieczki po Europie</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <header>
        <h1>BIURO TURYSTYCZNE</h1>
    </header>
    <section>
        <div class="dane">
            <h3>Wycieczki, na które są wolne miejsca</h3>
            <ul>
                <?php
                // Skrypt 1
                $conn = new mysqli("localhost", "root", "", "biuro");
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $sql = "SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna = TRUE";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<li>" . $row["id"] . ". dnia " . $row["dataWyjazdu"] . " jedziemy do " . $row["cel"] . ", cena: " . $row["cena"] . "</li>";
                    }
                } else {
                    echo "Brak dostępnych wycieczek.";
                }
                $conn->close();
                ?>
            </ul>
        </div>
    </section>
    <section style="display: flex;">
        <div class="lewy">
            <h2>Bestselery</h2>
            <table>
                <tr><td>Wenecja</td><td>kwiecień</td></tr>
                <tr><td>Londyn</td><td>lipiec</td></tr>
                <tr><td>Rzym</td><td>wrzesień</td></tr>
            </table>
        </div>
        <div class="srodkowy">
            <h2>Nasze zdjęcia</h2>
            <?php
            // Skrypt 2
            $conn = new mysqli("localhost", "root", "", "biuro");
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT nazwaPliku, podpis FROM zdjecia";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<img src='" . $row["nazwaPliku"] . "' alt='" . $row["podpis"] . "'>";
                }
            } else {
                echo "Brak zdjęć.";
            }
            $conn->close();
            ?>
        </div>
        <div class="prawy">
            <h2>Skontaktuj się</h2>
            <a href="mailto:turysta@wycieczki.pl">napisz do nas</a>
            <p>telefon: 111222333</p>
        </div>
    </section>
    <footer>
        <p>Stronę wykonał: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">NaukaOdZera</a></p>
    </footer>
</body>
</html>
