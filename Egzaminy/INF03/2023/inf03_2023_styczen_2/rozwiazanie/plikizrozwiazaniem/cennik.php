<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wynajem pokoi</title>
        <link rel="stylesheet" href="styl2.css">
    </head>
    <body>
        <header>
            <h1>Pensjonat pod dobrym humorem</h1>
        </header>

        <div id="lewy">
            <a href="index.html">GŁÓWNA</a>
            <img src="1.jpeg" alt="pokoje">
        </div>

        <div id="srodkowy">
            <a href="cennik.php">CENNIK</a>
            <table>
                <?php
                    $conn = new mysqli("localhost","root","","wynajem");

                    $sql = "SELECT * FROM pokoje";
                    $result = $conn->query($sql);
    
                    while($row = $result -> fetch_array()) {
                        echo "<tr>";
                            echo "<td>".$row[0]."</td>";
                            echo "<td>".$row[1]."</td>";
                            echo "<td>".$row[2]."</td>";
                        echo "</tr>";
                    }

                    $conn -> close();
                ?>
            </table>
        </div>

        <div id="prawy">
            <a href="kalkulator.html">KALKULATOR</a>
            <img src="3.jpeg" alt="pokoje">
        </div>

        <footer>
            <p>Stronę opracował: NaukaOdZera</p>
        </footer>
    </body>
</html>