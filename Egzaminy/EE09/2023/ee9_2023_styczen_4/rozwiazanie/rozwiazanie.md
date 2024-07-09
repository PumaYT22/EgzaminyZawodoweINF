---

# Rozwiązanie arkusza EE09 styczeń 2023 - 4


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - index.php
    - Styl4.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="index.php">
      
### index.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wizytówki</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <section id="baner">
        <h1>Wizytówki pracowników</h1>
        <form action="index.php" method="POST">
            <input type="number" name="employee_id" value="1" min="1" max="9" required>
            <button type="submit">WYŚWIETL</button>
        </form>
    </section>

    <section id="wizytowka">
        <?php
            $employee_id = 1;
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $employee_id = intval($_POST["employee_id"]);
            }

            $conn = new mysqli("localhost", "root", "", "firma");

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "SELECT id, imie, nazwisko, adres, miasto FROM pracownicy WHERE id = $employee_id";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<img src='".$row['id'].".jpg' alt='pracownik'>";
                    echo "<h2>".$row['imie']." ".$row['nazwisko']."</h2>";
                    echo "<h4>Adres:</h4>";
                    echo "<p>".$row['adres'].", ".$row['miasto']."</p>";
                }
            } else {
                echo "0 results";
            }

            $conn->close();
        ?>
    </section>

    <footer>
        <section id="stopka-lewa">
            <img src="obraz.jpg" alt="pracownicy firmy">
        </section>
        <section id="stopka-srodek">
            <p>Autorem wizytownika jest: NaukaOdZera</p>
            <a href="http://agencjareklamowa543.pl/" target="_blank">Zobacz nasze realizacje</a>
        </section>
        <section id="stopka-prawa">
            <p>Osoby proszone o podpisanie dokumentu RODO:</p></br>
            <ol>
                <?php
                    $conn = new mysqli("localhost", "root", "", "firma");

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    $sql = "SELECT imie, nazwisko FROM pracownicy WHERE czyRODO = false;";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<li>".$row['imie']." ".$row['nazwisko']."</li>";
                        }
                    } else {
                        echo "<li>Brak osób</li>";
                    }

                    $conn->close();
                ?>
            </ol>
        </section>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl4.css">

### Styl4.css

```css
body {
    font-family: Arial, sans-serif;
    background-color: AntiqueWhite;
}

#baner {
    background-color: #7B5E57;
    color: white;
    text-align: center;
}

h1 {
    font-weight: 300;
}

form input,
form button {
    background-color: #7B5E57;
    color: white;
    padding: 10px;
    margin: 5px;
    border: 1px solid white;
}

form button:hover {
    background-color: white;
    color: #7B5E57;
}

#wizytowka {
    color: #5D4037;
    max-width: 300px;
    text-align: center;
    margin: 70px auto;
    padding-bottom: 60px;
    box-shadow: 0 0 20px grey;
}

#wizytowka img {
    width: 100%;
    padding-bottom: 20px;
}

footer {
    display: flex;
    justify-content: space-between;
}

#stopka-lewa,
#stopka-prawa {
    background-color: #7B5E57;
    color: white;
    width: 33%;
    height: 200px;

}

#stopka-srodek {
    background-color: #7B5E57;
    color: white;
    width: 34%;
    height: 200px;
   
}

```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.


</CodeGroupItem>
</CodeGroup>


<blockquote className="warning">
    <strong>UWAGA: Załączanie skryptu PHP</strong>
    Upewnij się, że poprawnie dołączasz skrypt PHP do swoich plików. Możesz to zrobić, używając funkcji <code>include</code> lub <code>require</code> lub wstawić skrypt php w danej sekcji na stronie. Na przykład:
    <pre><code>&lt;?php include 'skrypt.php'; ?&gt;</code></pre>
    lub
    <pre><code>&lt;?php require 'skrypt.php'; ?&gt;</code></pre>
    Pamiętaj, że <code>require</code> zatrzyma wykonywanie skryptu w przypadku błędu, podczas gdy <code>include</code> tylko wyświetli ostrzeżenie i pozwoli na kontynuację. Upewnij się, że ścieżka do pliku jest poprawna     i plik jest dostępny.
</blockquote>

---

## Podsumowanie

🎉 **Gratulacje!** Udało Ci się stworzyć stronę internetową z grafiką i animacją oraz formularzem kontaktowym.

#### Przydatne zasoby:
- [HTML Odwołanie](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [PHP Odwołanie](https://phpkurs.pl/)

<blockquote className="danger">
                <strong>UWAGA: Egzamin zawodowy EE09</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu EE09. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*
