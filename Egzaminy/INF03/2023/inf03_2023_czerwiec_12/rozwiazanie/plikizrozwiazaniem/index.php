<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Hurtownia szkolna</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Hurtownia z najlepszymi cenami</h1>
    </header>
    <section id="left">
        <h2>Nasze ceny</h2>
        <table>
            <?php
            $conn = new mysqli('localhost', 'root', '', 'sklep');
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT nazwa, cena FROM towary LIMIT 4";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>{$row['nazwa']}</td><td>{$row['cena']}</td></tr>";
                }
            }
            $conn->close();
            ?>
        </table>
    </section>
    <section id="center">
        <h2>Koszt zakupów</h2>
        <form action="index.php" method="POST">
            <label for="item">wybierz artykuł:</label>
            <select name="item" id="item">
                <option value="Zeszyt 60 kartek">Zeszyt 60 kartek</option>
                <option value="Zeszyt 32 kartki">Zeszyt 32 kartki</option>
                <option value="Cyrkiel">Cyrkiel</option>
                <option value="Linijka 30 cm">Linijka 30 cm</option>
            </select><br>
            <label for="quantity">liczba sztuk:</label>
            <input type="number" name="quantity" id="quantity"><br>
            <button type="submit">OBLICZ</button>
        </form>
        <?php
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                // Przechwytywanie i sprawdzenie danych z formularza
                $item = $_POST['item'] ?? '';
                $quantity = $_POST['quantity'] ?? '';

                // Sprawdzenie czy dane są poprawne
                if (!empty($item) && is_numeric($quantity) && $quantity > 0) {
                    // Połączenie z bazą danych
                    $conn = new mysqli('localhost', 'root', '', 'sklep');
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // Przygotowanie zapytania SQL i jego wykonanie
                    $sql = "SELECT cena FROM towary WHERE nazwa = '$item'";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        $row = $result->fetch_assoc();
                        $price = $row['cena'];
                        $total = $price * $quantity;
                        echo "<p>wartość zakupów: $total</p>";
                    } else {
                        echo "<p>Nie znaleziono produktu o nazwie: $item</p>";
                    }

                    // Zamknięcie połączenia z bazą danych
                    $conn->close();
                } else {
                    echo "<p>Błąd: proszę podać poprawne dane.</p>";
                }
            }
        ?>
    </section>
    <section id="right">
        <h2>Kontakt</h2>
        <img src="zakupy.png" alt="hurtownia">
        <p><a href="mailto:hurt@poczta2.pl">e-mail: hurt@poczta2.pl</a></p>
    </section>
    <footer>
        <h4>Witrynę wykonał: NaukaOdZera</h4>
    </footer>
</body>
</html>
