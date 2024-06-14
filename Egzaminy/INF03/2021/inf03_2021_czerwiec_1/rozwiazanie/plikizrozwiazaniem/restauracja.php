<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baza";

// Połączenie się z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobranie danych z formularza
$date = $_POST['date'];
$people = $_POST['people'];
$phone = $_POST['phone'];

// Dodanie danych do tabeli rezerwacje (zapytanie sql)
$sql = "INSERT INTO rezerwacje (`data_rez`, `liczba_osob`, `telefon`) VALUES ('$date', '$people', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "Dodano rezerwację do bazy";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Zamknięcie połączenia
$conn->close();
?>