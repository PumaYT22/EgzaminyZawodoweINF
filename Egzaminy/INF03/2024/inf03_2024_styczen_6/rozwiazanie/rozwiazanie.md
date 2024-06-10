# Rozwiązanie arkusza INF 03 styczeń 2024 - 6

W tym arkuszu trzeba było zrobić stronę internetową z wskazanym php, css oraz zapytania SQL.

## Kod na Stronę Internetową

**biuro.php**

```php
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
    <h1>BIURO PODRÓŻY</h1>
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
                $conn = mysqli_connect('localhost', 'root', '', 'podroze');
                $q = "SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis ASC;";
            
                $result = mysqli_query($conn, $q);
                while($row = mysqli_fetch_assoc($result))
                        
                    {
                        echo "<img src='" . $row["nazwaPliku"] . "' alt='" . $row["podpis"] . "' title='" . $row["podpis"] . "'>";                 
                    }
                    mysqli_close($conn);
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
    </section>
    <footer>
        <p>Stronę wykonał: NaukaOdZera</p>
    </footer>
    </div>
</body>
</html>
```
**styl9.css**
```css
*{
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
}
header, footer{
    background-color: #BA6B6C;
    color: white;
    padding: 7px;
}
#lewy{
    float:left;
    background-color: #EF9A9A;
    width: 20%;
    height: 500px;
}
#prawy{
    float: left;
    background-color: #EF9A9A;
    width: 20%;
    height: 500px;
}
#srodek{
    float: left;
    justify-content: center;
    background-color: mistyrose;
    width: 60%;
    height: 500px;
}
#dane{
    clear: both;
    background-color: mistyrose;
    padding: 50px;
}
ol{
    list-style: upper-roman;
}
li{
    text-align: left;
}
h2::first-letter{
    font-size: 170%;
    color: maroon;
}
table{
    padding: auto;
    width: 80%;
    border: solid 1px maroon;
}
img{
    height: 120px;
    margin: 7px;
    box-shadow: 7px 7px 7px dimgray;
}
```
