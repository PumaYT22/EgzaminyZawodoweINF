---

# Rozwiązanie arkusza INF 03 czerwiec 2023 - 3


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.php
    - Styl.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było zrobić stronę internetową z wskazanym php, css oraz zapytania do bazy danych.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT nazwa FROM towary WHERE promocja=1;</code></pre>
            Ta kwerenda wybiera kolumnę <code>nazwa</code> z tabeli <code>towary</code> dla rekordów, gdzie kolumna <code>promocja</code> ma wartość 1.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT cena FROM towary WHERE nazwa='Markery 4 szt.';</code></pre>
            Ta kwerenda wybiera kolumnę <code>cena</code> z tabeli <code>towary</code> dla rekordu, gdzie kolumna <code>nazwa</code> jest równa 'Markery 4 szt.'.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT id, nazwa, COUNT(id) AS liczba_towarow FROM dostawcy JOIN towary ON idDostawcy = dostawcy.id GROUP BY dostawcy.nazwa;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele oraz używać funkcji agregujących:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>dostawcy</code> z tabelą <code>towary</code> na podstawie kolumny <code>idDostawcy</code> w tabeli <code>towary</code> oraz kolumny <code>id</code> w tabeli <code>dostawcy</code>.
                </li>
                <li>
                    <code>COUNT(id)</code> zlicza liczbę rekordów dla każdej grupy <code>dostawcy.nazwa</code>, zwracając wynik jako <code>liczba_towarow</code>.
                </li>
                <li>
                    Wynik zawiera kolumny <code>id</code>, <code>nazwa</code> oraz <code>liczba_towarow</code> dla każdej grupy <code>dostawcy.nazwa</code>.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>ALTER TABLE dostawcy ADD informacje TEXT;</code></pre>
            Ta kwerenda dodaje nową kolumnę <code>informacje</code> typu <code>TEXT</code> do tabeli <code>dostawcy</code>.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
KWERENDA 1:
SELECT nazwa FROM towary WHERE promocja=1;
KWERENDA 2:
SELECT cena FROM towary where nazwa='Markery 4 szt.';
KWERENDA 3:
SELECT id, nazwa, COUNT(id) AS
liczba_towarow FROM dostawcy JOIN towary ON idDostawcy =
dostawcy.id GROUP BY dostawcy.nazwa;
KWERENDA 4:
ALTER TABLE dostawcy ADD informacje TEXT;
```

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="index.php">
      
### Index.php
      
```php
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
```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.

</CodeGroupItem>
<CodeGroupItem title="styl.css">

### Styl.css

```css
*{
    font-family: Garamond;
    text-align: center;
}
header, footer{
    background-color: #8C7B75;
    color: white;
    height: 70px;
    font-size: 150%;
}
#lewy{
    float: left;
}
#srodek{
    float: left;
}
#prawy{
    float: left;
}
footer{
    clear: both;
}
aside{
    background-color: #BCAAA4;
    height: 400px;
    width: 35%;
}
#srodek{
    background-color: #EFDCD5;
    height: 400px;
    width: 30%;
}
ol{
    list-style-type: lower-alpha;
}
li{
    text-align: left;
}
img{
    border: 1px dashed #8C7B75;
    padding: 5px;
    border-radius: 10%;
}
#blok{
    margin-top: 100px;
    border: 1px solid #8C7B75;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd list zostały ustawione, aby strona była estetyczna i spójna.
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
