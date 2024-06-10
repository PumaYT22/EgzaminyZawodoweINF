<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Poznaj Europę</title>
    <link rel="stylesheet" href="styl9.css">

</head>
<body>
    <div id="container">
    <header>
<<<<<<< HEAD
    <h1>BIURO PODRÓŻY</h1>
=======
    <h1>BIURO PODRÓŻ</h1>
>>>>>>> 6059cd29ec66510bca5cab1d98707d41a21b15c3
    </header>

    <main>
        <aside id="lewy">
            <h2>Promocje</h2>
            <table>
                <tr>
                    <td>Warszawa</td>
                    <td>od 600 zł</td>
                </tr>
                <tr>
                    <td>Wenecja</td>
                    <td>od 1200 zł</td>
                </tr>
                <tr>
                    <td>Paryż</td>
                    <td>od 1200 zł</td>
                </tr>
            </table>
        </aside>
        <section id="srodek">
            <h2>W tym roku jedziemy do...</h2>
            <?php
<<<<<<< HEAD
                $conn = mysqli_connect('localhost', 'root', '', 'podroze');
                $q = "SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis ASC;";
            
                $result = mysqli_query($conn, $q);
                while($row = mysqli_fetch_assoc($result))
                        
                    {
                        echo "<img src='" . $row["nazwaPliku"] . "' alt='" . $row["podpis"] . "' title='" . $row["podpis"] . "'>";                 
                    }
                    mysqli_close($conn);
=======

>>>>>>> 6059cd29ec66510bca5cab1d98707d41a21b15c3
            ?>
        </section>
        <aside id="prawy">
            <h2>Kontakt</h2>
            <a href="mailto:biuro@wycieczki.pl">napisz do nas</a>
            <p>telefon: 444555666</p>
        </aside>
    </main>
    <section id="dane">
        <h3>W poprzednich latach byliśmy...</h3>
<<<<<<< HEAD
        <?php
        $conn = mysqli_connect('localhost', 'root', '', 'podroze');

        if (!$conn) {
            die("Połączenie nieudane: " . mysqli_connect_error());
        }
        

        $q = "SELECT dataWyjazdu, cel FROM wycieczki"; 
        
        $result = mysqli_query($conn, $q);
        
        if (mysqli_num_rows($result) > 0) {
            echo "<ol>";
            while($row = mysqli_fetch_assoc($result)) {
                echo "<li>Dnia " . $row["dataWyjazdu"] . " pojechaliśmy do " . $row["cel"] . "</li>";
            }
            echo "</ol>";
        } else {
            echo "Brak wyników";
        }
        
        mysqli_close($conn);
        ?>
=======
    <ol>
        <?php
        
        ?>
    </ol>
>>>>>>> 6059cd29ec66510bca5cab1d98707d41a21b15c3
    </section>
    <footer>
        <p>Stronę wykonał: NaukaOdZera</p>
    </footer>
    </div>
</body>
</html>