---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 10


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - Biuro.php
    - Styl9.css
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
    <strong>Wskazówka: Łączenie tabel i sortowanie wyników</strong>
    Aby połączyć dwie tabele w SQL, możesz użyć INNER JOIN, który zwróci tylko te wiersze, które mają dopasowania w obu tabelach. Dodatkowo, używając klauzuli ORDER BY, możesz sortować wyniki w porządku rosnącym (ASC) lub malejącym (DESC).
</blockquote>

<CodeGroup>
    <CodeGroupItem title="kwerendy.txt">

```sql
KWERENDA 1:
SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis ASC;
KWERENDA 2:
SELECT cel, dataWyjazdu FROM wycieczki WHERE dostepna=0;
KWERENDA 3:
SELECT wycieczki.cel, wycieczki.cena, zdjecia.podpis FROM wycieczki JOIN zdjecia ON wycieczki.zdjecia_id=zdjecia.id WHERE cena > 1300; 
KWERENDA 4:
DROP TABLE uzytkownik;

```
</CodeGroupItem>
<CodeGroup>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="biuro.php">
      
### Biuro.php
      
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

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl9.css">

### Styl9.css

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
