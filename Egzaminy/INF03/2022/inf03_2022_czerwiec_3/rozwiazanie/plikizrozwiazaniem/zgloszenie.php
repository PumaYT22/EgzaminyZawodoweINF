<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lowisko = $_POST['lowisko'];
    $data = $_POST['data'];
    $sedzia = $_POST['sedzia'];

    $conn = new mysqli('localhost', 'root', '', 'wedkarstwo');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   
    $sql = "INSERT INTO zawody_wedkarskie VALUES (NULL, '0','$lowisko', '$data', '$sedzia')";

    if ($conn->query($sql) === TRUE) {
        echo "Dodano do bazy danych";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
