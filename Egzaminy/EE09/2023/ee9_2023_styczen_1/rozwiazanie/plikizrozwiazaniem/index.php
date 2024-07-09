<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "firma";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Skrypt 1: Pobieranie danych pracownika
$employee_sql = "SELECT imie, nazwisko, adres, miasto, czyRODO, czyBadania FROM pracownicy WHERE id=2";
$employee_result = $conn->query($employee_sql);
$employee = $employee_result->fetch_assoc();

// Skrypt 2: Liczba zatrudnionych pracowników
$count_sql = "SELECT COUNT(*) as liczba FROM pracownicy";
$count_result = $conn->query($count_sql);
$count = $count_result->fetch_assoc();

// Skrypt 3: Wyświetlanie szczegółów pracownika (część 1)
$details_sql1 = "SELECT id, imie, nazwisko FROM pracownicy WHERE id = 2";
$details_result1 = $conn->query($details_sql1);
$details1 = $details_result1->fetch_assoc();

// Skrypt 3: Wyświetlanie szczegółów pracownika (część 2)
$details_sql2 = "SELECT pracownicy.id, nazwa, opis FROM pracownicy JOIN stanowiska ON pracownicy.stanowiska_id = stanowiska.id WHERE pracownicy.id = 2";
$details_result2 = $conn->query($details_sql2);
$details2 = $details_result2->fetch_assoc();

$conn->close();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sekretariat</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <section id="lewy">
        <h1>Akta Pracownicze</h1>
        <h3>dane</h3>
        <p><?php echo $employee['imie'] . " " . $employee['nazwisko']; ?></p>
        <hr>
        <h3>adres</h3>
        <p><?php echo $employee['adres']; ?></p>
        <p><?php echo $employee['miasto']; ?></p>
        <hr>
        <p>RODO: <?php echo $employee['czyRODO'] ? "podpisano" : "niepodpisano"; ?></p>
        <p>Badania: <?php echo $employee['czyBadania'] ? "aktualne" : "nieaktualne"; ?></p>
        <hr>
        <h3>Dokumenty pracownika</h3>
        <a href="cv.txt">Pobierz</a>
        <h1>Liczba zatrudnionych pracowników</h1>
        <p><?php echo $count['liczba']; ?></p>
    </section>
    <section id="prawy">
        <img src="<?php echo $details1['id']; ?>.jpg" alt="pracownik">
        <h2><?php echo $details1['imie'] . " " . $details1['nazwisko']; ?></h2>
        <h4><?php echo $details2['nazwa']; ?></h4>
        <h5><?php echo $details2['opis']; ?></h5>
    </section>
    <footer id="stopka">
        <p>Autorem aplikacji jest: [Twój numer zdającego]</p>
        <ul>
            <li>skontaktuj się</li>
            <li>poznaj naszą firmę</li>
        </ul>
    </footer>
</body>
</html>
