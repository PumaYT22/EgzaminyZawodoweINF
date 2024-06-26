---

# Rozwiązanie arkusza INF 03 czerwiec 2021 - 1


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - restauracja.html
    - restauracja.php
    - Styl_1.css
5. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać polecenia do bazy oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
     <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>INSERT INTO rezerwacje (`nr_stolika`, `data_rez`, `liczba_osob`, `telefon`) VALUES (1, "2017-07-04", 4, "111222333");</code></pre>
            Ta kwerenda wstawia nowy rekord do tabeli <code>rezerwacje</code> z wartościami dla kolumn <code>nr_stolika</code>, <code>data_rez</code>, <code>liczba_osob</code> i <code>telefon</code>.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT nazwa, cena FROM dania WHERE typ = 2;</code></pre>
            Ta kwerenda wybiera kolumny <code>nazwa</code> i <code>cena</code> z tabeli <code>dania</code> dla rekordów, gdzie <code>typ</code> jest równy 2.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT nazwa FROM dania WHERE typ = 3 AND cena < 15;</code></pre>
            Ta kwerenda wybiera kolumnę <code>nazwa</code> z tabeli <code>dania</code> dla rekordów, gdzie <code>typ</code> jest równy 3 i <code>cena</code> jest mniejsza niż 15.
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>UPDATE pracownicy SET stanowisko = 4 WHERE stanowisko = 3;</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>stanowisko</code> w tabeli <code>pracownicy</code>, zmieniając wartość z 3 na 4 dla wszystkich pasujących rekordów.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. INSERT INTO rezerwacje (`nr_stolika`, `data_rez`, `liczba_osob`, `telefon`) VALUES (1, "2017-07-04", 4, "111222333");
2. SELECT nazwa, cena FROM dania WHERE typ = 2; 
3. SELECT nazwa FROM dania WHERE typ = 3 AND cena < 15
4. UPDATE pracownicy SET stanowisko = 4 WHERE stanowisko = 3
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="restauracja.html">
      
### Restauracja.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Witam na noclegach">
    <title>Restauracja Wszystkie Smaki!</title>
    <link href="styl_1.css" rel="stylesheet">  
</head>
<body>

    <div class="baner">
        <h1>Witamy w Restauracji Wszystkie Smaki</h1>
    </div>
    <div class="panele">
        <div class="plewy">
            <img src="menu.jpg" alt="Nasze Danie">
        </div>
        <div class="pprawy">
            <h4>U nas dobrze zjesz!</h4>
            <ol>
                <li>Obiady od 40zł</li>
                <li>Przękonski od 10zł</li>
                <li>Kolajce od 20zł</li>
            </ol> 
        </div>
    </div>
    <div class="pdolny">
        <h2>Zarezerwuj Stolik On-line</h2>

        <form method="post" action="restauracja.php">

            <label for="date">Data (format rrrr-mm-dd):</label><br>
            <input type="text" id="date" name="date"><br>
            <label for="people">Ile osób?:</label><br>
            <input type="number" id="people" name="people"><br>
            <label for="phone">Twój numer telefonu:</label><br>
            <input type="text" id="phone" name="phone"><br>
            <input type="checkbox" id="agreement" name="agreement">
            <label for="agreement">Zgadzam się na przetwarzanie moich danych osobowych</label><br>
            <button type="reset">WYCZYŚĆ</button>
            <button type="submit">REZERWUJ</button>

        </form>
    </div>
    <div class="stopka">
        Stronę internetował opracował: NaukaOdZera
    </div>

</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Na stronie znajduję się formularz z metodą post, który wysyła rządanie poprzez button submit z danymi do pliku restauracja.php

</CodeGroupItem>
<CodeGroupItem title="restauracja.php">
      
### restauracja.php

```php
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
```

**Wyjaśnienie:**
- Plik PHP dla strony restauracja.html zawiera łączenie z bazą i wysyłanie do niej zapytania INSERT.
- Jest to zmodyfikowane zapytanie pierwsze z kwerendy.txt.

    
</CodeGroupItem>   
<CodeGroupItem title="styl_1.css">

### Styl_1.css

```css
body{
    background-color: #F6E5DC;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   
}

.baner{
    background-color: #2F180C;
    text-align: center;
    color:khaki;
    height: 60px;
}

.panele{
    display: flex;
    flex-wrap: wrap;
}

.plewy{
    width: 60%;
}

.pprawy{
    font-size: 150%;
    padding: 70px;
}

.pdolny{
    background-color: #D0B6A8;
    text-align: center;
    padding: 30px;
}

.stopka{
    background-color: #2F180C;
    height: 60px;
    color:khaki;
}


button {
    margin: 10px;
    padding: 5px;
    background-color: #2F180C;
    color: khaki;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

</CodeGroupItem>
</CodeGroup>


<blockquote className="warning">
                <strong>UWAGA: Załączanie skryptu</strong>
                Upewnij się, że poprawnie dołączasz skrypt do swoich plików. Możesz to zrobić, dodając go jako zewnętrzny plik za pomocą
                 <code> &lt;script src="skrypt.js"&gt;&lt;/script&gt;</code> albo umieszczając skrypt bezpośrednio w treści strony. W tym przypadku, najlepiej umieścić skrypt na końcu dokumentu, tuż przed zamykającym znacznikiem <code>&lt;/body&gt;</code>.
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
                <strong>UWAGA: Egzamin zawodowy INF03</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu inf03. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*
