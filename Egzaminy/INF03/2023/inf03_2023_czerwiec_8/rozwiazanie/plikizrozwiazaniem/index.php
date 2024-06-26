<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <title>Sklep dla uczniów</title>
</head>
<body>
    <div id="container">
    <header>
    <h1>Dzisiejsze promocje naszego sklepu</h1>
    </header>
    <main>
        <aside id="lewy">
            <h2>Taniej o 30%</h2>
            <ol>
                <?php 
                $conn = mysqli_connect('localhost', 'root', '', 'sklep');

                if (!$conn) {
                    die("Połączenie nieudane: " . mysqli_connect_error());
                }
                
        
                $q = "SELECT nazwa FROM towary"; 
                
                $result = mysqli_query($conn, $q);

                while($row = mysqli_fetch_assoc($result)) {
                    echo "<li>" . $row["nazwa"] . "</li>";
                }
                ?> 
            </ol>
        </aside>
        <section id="srodek">
            <h2>Sprawdź cenę</h2>
            <form action="index.php" method="POST">
                <select name="nazwa_towaru" id="lista">
                    <option value="Gumka do mazania">Gumka do mazania</option>
                    <option value="Cienkopis">Cienkopis</option>
                    <option value="Pisaki 60 szt.">Pisaki 60 szt.</option>
                    <option value="Markery 4 szt.">Markery 4 szt.</option>
                </select>
                <button type="submit">SPRAWDŹ</button>
            </form>
            <section id="blok">
                <?php
                        if(isset($_POST['nazwa_towaru'])){
                            $nazwa_towaru = $_POST['nazwa_towaru'];
                        
                            $q = "SELECT cena FROM towary WHERE nazwa = '$nazwa_towaru'"; 
                        
                            $result = mysqli_query($conn, $q);
                        
                            if(mysqli_num_rows($result) > 0) {
                                $row = mysqli_fetch_assoc($result);
                                $cena = $row["cena"];
                            
                                $cena_promocyjna = $cena * 0.7; 
                        
                                echo "Cena regularna: " . $cena . "<br>";
                                echo "Cena w promocji 30%: " . $cena_promocyjna;
                            } 
                            else {
                                echo "Brak danych dla podanej nazwy towaru";
                            }
                        }
                        
                        mysqli_close($conn);
                ?>
            </section>
        </section>
        <aside id="prawy">
            <h2>Kontakt</h2>
            <p>email: <a href="mailto:bok@sklep.pl">bok@sklep.pl</a></p>
            <img src="promocja.png" alt="promocja">
        </aside>
    </main>
    <footer>
    <h4>Autor strony: NaukaOdZera</h4>
    </footer>
    </div>
</body>
</html>