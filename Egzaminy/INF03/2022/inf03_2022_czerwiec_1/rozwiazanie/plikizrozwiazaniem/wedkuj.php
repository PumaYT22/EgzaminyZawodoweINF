<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <section id="baner">
        <h1>Portal dla wędkarzy</h1>
    </section>
    <main>
        <section id="lewy">
            <section id="lewy1">
                <h3>Ryby zamieszkujące rzeki</h3>
                <ol>
                    <?php
                    // Skrypt 1
                    $conn = new mysqli('localhost', 'root', '', 'wedkowanie');
                    $query = "SELECT nazwa, akwen, wojewodztwo FROM ryby JOIN lowisko ON ryby.id = lowisko.Ryby_id WHERE rodzaj = 3;";
                    $result = $conn->query($query);

                    while ($row = $result->fetch_assoc()) {
                        echo "<li>{$row['nazwa']} pływa w rzece {$row['akwen']}, {$row['wojewodztwo']}</li>";
                    }

                    $conn->close();
                    ?>
                </ol>
            </section>
            <section id="lewy2">
                <h3>Ryby drapieżne naszych wód</h3>
                <table>
                    <tr>
                        <th>L.p.</th>
                        <th>Gatunek</th>
                        <th>Występowanie</th>
                    </tr>
                    <?php
                    // Skrypt 2
                    $conn = new mysqli('localhost', 'root', '', 'wedkowanie');
                    $query = "SELECT id, nazwa, wystepowanie FROM ryby WHERE styl_zycia=1;";
                    $result = $conn->query($query);
                
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>{$row['id']}</td>
                                <td>{$row['nazwa']}</td>
                                <td>{$row['wystepowanie']}</td>
                            </tr>"; 
                    }

                    $conn->close();
                    ?>
                </table>
            </section>
        </section>
        <section id="prawy">
            <img src="ryba1.jpg" alt="Sum">
            <br>
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </section>
    </main>
    <section id="stopka">
        <p>Stronę wykonał: NaukaOdZera</p>
    </section>
</body>
</html>
