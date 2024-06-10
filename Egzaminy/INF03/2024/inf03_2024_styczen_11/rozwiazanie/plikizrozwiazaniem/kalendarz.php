<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zadania na lipiec</title>
    <link rel="stylesheet" href="styl6.css">
</head>
<body>
    <section id="kont1">
        <section id="prawy">
            <img src="logo1.png" alt="lipiec" height="140">
        </section>
        <section id="lewy">
            <h1>TERMINARZ</h1>
            <p>najbliższe zadania:
            <?php
                $conn = mysqli_connect("localhost", "root", "", "terminarz");
                if (!$conn) {
                    die("Connection failed: " . mysqli_connect_error());
                }
                $query1 = "SELECT DISTINCT wpis FROM zadania WHERE dataZadania BETWEEN '2020-07-01' AND '2020-07-07' AND wpis != ''";
                $result1 = mysqli_query($conn, $query1);
                while ($row = mysqli_fetch_row($result1)) {
                    echo $row[0] . "; ";
                }
                mysqli_close($conn);
            ?>
            </p>
        </section>
    </section>
    <section id="kont2">
        <?php
            $conn = mysqli_connect("localhost", "root", "", "terminarz");
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }
            $query2 = "SELECT dataZadania, wpis FROM zadania WHERE MONTH(dataZadania) = 7";
            $result2 = mysqli_query($conn, $query2);
            while ($row = mysqli_fetch_row($result2)) {
                echo "<section class='box'><h6>" . $row[0] . "</h6><p>" . $row[1] . "</p></section>";
            }
            mysqli_close($conn);
        ?>
    </section>
    <footer>
        <a href="sierpien.html">Terminarz na sierpień</a>
        <p>Stronę wykonał: [Numer zdającego]</p>
    </footer>
</body>
</html>
