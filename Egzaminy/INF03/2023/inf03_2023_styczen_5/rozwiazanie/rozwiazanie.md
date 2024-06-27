---

# Rozwiązanie arkusza INF 03 styczeń 2023 - 5

---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - organizer.php
    - styl5.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
               W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT dataZadania, wpis FROM zadania WHERE miesiac = 'sierpien';</code></pre>
            Ta kwerenda wybiera kolumny <code>dataZadania</code> i <code>wpis</code> z tabeli <code>zadania</code> dla rekordów, gdzie kolumna <code>miesiac</code> jest równa "sierpien".
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT miesiac, rok FROM zadania WHERE dataZadania = '2020-08-07';</code></pre>
            Ta kwerenda wybiera kolumny <code>miesiac</code> i <code>rok</code> z tabeli <code>zadania</code> dla rekordów, gdzie kolumna <code>dataZadania</code> jest równa '2020-08-07'.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT miesiac, COUNT(*) FROM zadania WHERE wpis LIKE 'Weterynarz%' GROUP BY miesiac;</code></pre>
            Ta kwerenda używa funkcji agregującej:
            <ul>
                <li>
                    <code>COUNT(*)</code> zlicza wszystkie rekordy dla każdej grupy zdefiniowanej przez kolumnę <code>miesiac</code>.
                </li>
                <li>
                    <code>LIKE 'Weterynarz%'</code> filtruje rekordy, gdzie kolumna <code>wpis</code> zaczyna się od słowa "Weterynarz".
                </li>
                <li>
                    <code>GROUP BY miesiac</code> grupuje wyniki na podstawie wartości w kolumnie <code>miesiac</code>.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>UPDATE zadania SET wpis='Wycieczka: Zalew Mietkowski' WHERE dataZadania="2020-08-09";</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>wpis</code> w tabeli <code>zadania</code>, ustawiając jej wartość na "Wycieczka: Zalew Mietkowski" dla rekordu, gdzie kolumna <code>dataZadania</code> jest równa "2020-08-09".
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT dataZadania, wpis FROM zadania WHERE miesiac = 'sierpien';
2. SELECT miesiac, rok FROM zadania WHERE dataZadania = '2020-08-07';
3. SELECT miesiac, COUNT(*) FROM zadania WHERE wpis LIKE 'Weterynarz%' GROUP BY miesiac;
4. UPDATE zadania SET wpis='Wycieczka: Zalew Mietkowski' WHERE dataZadania="2020-08-09";
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="organizer.php">
      
### organizer.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Sierpniowy kalendarz</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header>
        <section id="naglowek">
            <section class="banner">
                <h1>Organizer: SIERPIEŃ</h1>
            </section>
            <section class="banner">
                <form method="post" action="organizer.php">
                    <label for="event">Zapisz wydarzenie: </label>
                    <input type="text" id="event" name="event">
                    <button type="submit">OK</button>
                </form>
            </section>
            <section class="banner">
                <img src="logo2.png" alt="sierpień">
            </section>
        </section>
    </header>
    <main>
        <?php
        // Połączenie z bazą danych
        $conn = new mysqli("localhost", "root", "", "kalendarz");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Obsługa formularza
        if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["event"])) {
            $event = $conn->real_escape_string($_POST["event"]);
            $sql_update = "UPDATE zadania SET wpis='$event' WHERE dataZadania='2020-08-09'";
            $conn->query($sql_update);
        }

        // Pobieranie danych z bazy
        $sql = "SELECT dataZadania, wpis FROM zadania WHERE miesiac = 'sierpien'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<section class='kalendarz'>
                        <h5>{$row['dataZadania']}</h5>
                        <p>{$row['wpis']}</p>
                      </section>";
            }
        } else {
            echo "<p>Brak wydarzeń do wyświetlenia.</p>";
        }

        // Zamknięcie połączenia
        $conn->close();
        ?>
    </main>
    <footer>
        <p>Stronę wykonał: <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF">NaukaOdZera</a></p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl5.css">

### Styl5.css

```css
/* Domyślne wartości dla wszystkich selektorów */
body {
    font-family: Tahoma, sans-serif;
}

/* Styl dla bloków banera */
#naglowek{
    display: flex;
    flex-flow: row;
}


.banner {
    background-color: #7DA453;
    color: white;
    height: 120px;
    vertical-align: top;
}

/* Szerokość bloków banera */
.banner:first-child, .banner:nth-child(2) {
    width: 40%;
}
.banner:nth-child(3) {

    width: 20%;
    text-align: center;
}

/* Styl dla bloku głównego */
main {
    display: flex;
    flex-wrap: wrap;
   
}

/* Styl dla bloków kalendarza */
.kalendarz {
    background-color: #AED581;
    width: 200px;
    height: 100px;
    margin: 7px;
    border: 1px solid #7DA453;
    text-align: center;
}

.kalendarz > p {
    text-align: left;
}

/* Styl dla bloków kalendarza przy najechaniu */
.kalendarz:hover {
    background-color: #7DA453;
    color: white;
}

/* Styl dla stopki */
footer {
    background-color: #7DA453;
    color: white;
    padding: 5px;
}

/* Styl dla nagłówka piątego stopnia */
h5 {
    text-align: center;
}

/* Styl dla formularza */
form {
    padding-top: 50px;
}

/* Styl dla obrazu */
img {
    width: 120px;
    height: 120px;
}

/* Dodatkowe aby wyglądało tak jak na obrazku */
h1{
    font-size: 30px;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

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
                <strong>UWAGA: Egzamin zawodowy INF03</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu inf03. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*


