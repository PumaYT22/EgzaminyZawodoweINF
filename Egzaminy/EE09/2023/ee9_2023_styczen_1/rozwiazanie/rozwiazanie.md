---

# Rozwiązanie arkusza EE09 styczeń 2023 - 1


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - index.php
    - Styl.css
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

```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl.css">

### Styl.css

```css
body {
    font-family: Helvetica, sans-serif;
    background-color: #DDD;
    color: #546E7A;
}

section {
   
    margin: 20px;
    background-color: white;
    height: 600px;
    box-shadow: 0px 0px 20px 0px grey;
}

#lewy {
    width: 50%;
    float: left;
}

#prawy {
    width: 30%;
    float: left;
}

#stopka {
    background-color: #5C6BC0;
    color: white;
    padding: 30px;
    clear: both;
}

img {
    width: 100%;
}

h1 {
    background-color: #5C6BC0;
    color: white;
    padding: 10px;
    margin: 0;
    font-weight: 300;
}

h3, p {
    padding-left: 30px;
}

h2, h4{
    text-align: center;
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
