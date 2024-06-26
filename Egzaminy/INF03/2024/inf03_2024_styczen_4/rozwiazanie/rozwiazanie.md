---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 4


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - Kalendarz.php
    - Styl6.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było zrobić stronę internetową z wskazanym php, css oraz zapytania SQL.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
   <strong>Wskazówka: Praca z kwerendami SQL</strong>
    <ul>
        <li>
            <code>SELECT DISTINCT</code> służy do wybierania unikalnych wartości z kolumny, eliminując duplikaty w wynikach. Przykład:
            <pre><code>SELECT DISTINCT wpis FROM zadania;</code></pre>
        </li>
        <li>
            Komenda <code>LIKE</code> z symbolem <code>%</code> służy do wyszukiwania wzorców w tekstach. Na przykład:
            <pre><code>SELECT * FROM zadania WHERE wpis LIKE 'S%';</code></pre>
            wyszuka wszystkie wpisy zaczynające się na literę "S".
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1.
SELECT DISTINCT wpis FROM zadania 
WHERE (dataZadania BETWEEN '2020-07-01' AND '2020-07-07') AND wpis != '';

2.
SELECT dataZadania, wpis FROM zadania WHERE MONTH(dataZadania) = 7;

3.
SELECT miesiac, wpis FROM zadania WHERE wpis LIKE 'S%';

4.
UPDATE zadania SET wpis = 'Wycieczka nad morze' WHERE dataZadania = '2020-07-18';
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="kalendarz.php">
      
### Kalendarz.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zadania na lipiec</title>
    <link rel="stylesheet" href="styl6.css">
</head>
<body>
    <section id="kont1">
        <section id="prawy">
            <img src="logo1.png" alt="lipiec" height="140">
        </section>
        <section id="lewy">
            <h1>TERMINARZ</h1>
            <p>najbliższe zadania:
            <?php
                $conn = mysqli_connect("localhost", "root", "", "terminarz");
                if (!$conn) {
                    die("Connection failed: " . mysqli_connect_error());
                }
                $query1 = "SELECT DISTINCT wpis FROM zadania WHERE dataZadania BETWEEN '2020-07-01' AND '2020-07-07' AND wpis != ''";
                $result1 = mysqli_query($conn, $query1);
                while ($row = mysqli_fetch_row($result1)) {
                    echo $row[0] . "; ";
                }
                mysqli_close($conn);
            ?>
            </p>
        </section>
    </section>
    <section id="kont2">
        <?php
            $conn = mysqli_connect("localhost", "root", "", "terminarz");
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }
            $query2 = "SELECT dataZadania, wpis FROM zadania WHERE MONTH(dataZadania) = 7";
            $result2 = mysqli_query($conn, $query2);
            while ($row = mysqli_fetch_row($result2)) {
                echo "<section class='box'><h6>" . $row[0] . "</h6><p>" . $row[1] . "</p></section>";
            }
            mysqli_close($conn);
        ?>
    </section>
    <footer>
        <a href="sierpien.html">Terminarz na sierpień</a>
        <p>Stronę wykonał: [Numer zdającego]</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl6.css">

### Styl6.css

```css
* {
    font-family: Verdana;
}

#kont1{
    display: flex;
    width: 100%;
}

#prawy {
    background-color: #6F79A8;
    color: white;
    height: 140px;
    width: 30%;
}
#lewy {
    background-color: #6F79A8;
    color: white;
    height: 140px;
    width: 70%;
}

#kont2{
    display: flex;
    flex-flow:row wrap;
    position: relative;
}

.box {
    background-color: #9FA8DA;
    width: 160px;
    height: 85px;
    margin: 5px;
    border: 1px solid #6F79A8;
    overflow: hidden;
    position: relative;
}
.box:hover {
    background-color: #6F79A8;
    color: white;
}
footer {
    position: relative;
    background-color: #6F79A8;
    color: white;
    padding: 5px;
    text-align: right;
}
h6 {
    text-align: center;
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
