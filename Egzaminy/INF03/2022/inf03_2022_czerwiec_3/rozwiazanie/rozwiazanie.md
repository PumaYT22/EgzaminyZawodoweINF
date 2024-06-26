---

# Rozwiązanie arkusza INF 03 czerwiec 2024 - 3


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - zawody.html
    - zgloszenie.php
    - styl3.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
               W tym arkuszu trzeba było wykonać grafikę,sql oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>INSERT INTO zawody_wedkarskie VALUES (NULL, '2', '4', '2021-09-28', 'Andrzej Nowak');</code></pre>
            Ta kwerenda wstawia nowy rekord do tabeli <code>zawody_wedkarskie</code>. Wartość <code>NULL</code> oznacza, że kolumna <code>id</code> (jeśli jest autoinkrementowana) zostanie automatycznie wypełniona. Pozostałe wartości odpowiadają odpowiednio kolumnom.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT id, data_zawodow FROM zawody_wedkarskie WHERE sedzia = 'Krzysztof Dobrowolski';</code></pre>
            Ta kwerenda wybiera kolumny <code>id</code> i <code>data_zawodow</code> z tabeli <code>zawody_wedkarskie</code> dla rekordów, gdzie kolumna <code>sedzia</code> jest równa 'Krzysztof Dobrowolski'.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT imie, nazwisko, punkty FROM karty_wedkarskie JOIN zawody_wedkarskie ON karty_wedkarskie.id = zawody_wedkarskie.Karty_wedkarskie_id WHERE zawody_wedkarskie.id = 4;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>karty_wedkarskie</code> z tabelą <code>zawody_wedkarskie</code> na podstawie kolumny <code>id</code> w tabeli <code>karty_wedkarskie</code> oraz kolumny <code>Karty_wedkarskie_id</code> w tabeli <code>zawody_wedkarskie</code>.
                </li>
                <li>
                    Wynik zawiera kolumny <code>imie</code>, <code>nazwisko</code> i <code>punkty</code> dla rekordów, gdzie <code>zawody_wedkarskie.id</code> jest równy 4.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>UPDATE karty_wedkarskie SET punkty = punkty + 2 WHERE karty_wedkarskie.id = 1;</code></pre>
            Ta kwerenda aktualizuje kolumnę <code>punkty</code> w tabeli <code>karty_wedkarskie</code>, zwiększając wartość o 2 dla rekordu, gdzie <code>id</code> jest równe 1.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. INSERT INTO zawody_wedkarskie VALUES (NULL, '2', '4', '2021-09-28', 'Andrzej Nowak');
2. SELECT id, data_zawodow FROM zawody_wedkarskie WHERE sedzia = 'Krzysztof Dobrowolski'; 
3. SELECT imie, nazwisko, punkty FROM karty_wedkarskie JOIN zawody_wedkarskie ON karty_wedkarskie.id = zawody_wedkarskie.Karty_wedkarskie_id WHERE zawody_wedkarskie.id = 4;
4. UPDATE karty_wedkarskie SET punkty = punkty + 2 WHERE karty_wedkarskie.id = 1;
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="zawody.html">
      
### zawody.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zawody wędkarskie</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <section id="header">
        <section id="left">
            <h1>Zawody polskich wędkarzy</h1>
        </section>
        <section id="right">
            <img src="zawody.jpg" alt="wędkowanie">
        </section>
    </section>
    
    <section id="main">
        <h3>Łowiska</h3>
        <ul>
            <li>Zalew Węgrowski</li>
            <li>Zbiornik Bukówka</li>
            <li>Jeziorko Bartbetowskie</li>
            <li>Warta-Obrzycko</li>
        </ul>
        
        <h3>Dodaj zawody wędkarskie</h3>
        <form action="zgloszenie.php" method="post">
            <label for="lowisko">Łowisko: </label>
            <input type="number" id="lowisko" name="lowisko"><br>
            
            <label for="data">Data: </label>
            <input type="date" id="data" name="data"><br>
            
            <label for="sedzia">Sędzia: </label>
            <input type="text" id="sedzia" name="sedzia"><br>
            
            <button type="reset">CZYŚĆ</button>
            <button type="submit">DODAJ</button>
        </form>
    </section>
    
    <section id="footer">
        <section id="footer-left">
            <a href="kwerendy.txt">Pobierz</a>
        </section>
        <section id="footer-right">
            <p>Stronę przygotował: 123456</p>
        </section>
    </section>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera baner , menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="zgloszenie.php">
      
### Zgloszenie.php

```php
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
```

**Wyjaśnienie:**
- Plik PHP zawiera sprawdzanie czy formualrz jest wysłany metodą POST.
- Plik PHP pobiera dane z formularza i łączy się z bazą danych oraz wysyła do niej zapytanie INSERT.
- Po wysłaniu zapytania wyświetla komunikat czy dodano czy są błędy.
    
</CodeGroupItem>   
<CodeGroupItem title="styl3.css">

### Styl3.css

```css
* {
    font-family: Verdana;
}

#header {
    display: flex;
}

#left, #right {
    background-color: SeaGreen;
    color: white;
    line-height: 150px;
    height: 260px;
    font-size: 160%;
}

#left {
    width: 75%;
}

#right {
    width: 25%;
    text-align: right;
}

#main {
    background-color: MintCream;
    padding: 80px;
}

#footer {
    display: flex;
}

#footer-left, #footer-right {
    background-color: SeaGreen;
    color: white;
    width: 50%;
    height: 70px;
    text-align: center;
}

img {
    margin-right: 35px;
    box-shadow: 15px 15px 10px DimGray;
}

input, button {
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    background-color: MintCream;
    color: SeaGreen;
    padding: 15px;
    line-height: 70px;
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













# Rozwiązanie arkusza INF 03 czerwiec 2024 - 3

W tym arkuszu trzeba było wykonać grafikę,sql oraz stronę internetową z wskazanym html,css,php.

### Kod na Stronę Internetową

#### zawody.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zawody wędkarskie</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <section id="header">
        <section id="left">
            <h1>Zawody polskich wędkarzy</h1>
        </section>
        <section id="right">
            <img src="zawody.jpg" alt="wędkowanie">
        </section>
    </section>
    
    <section id="main">
        <h3>Łowiska</h3>
        <ul>
            <li>Zalew Węgrowski</li>
            <li>Zbiornik Bukówka</li>
            <li>Jeziorko Bartbetowskie</li>
            <li>Warta-Obrzycko</li>
        </ul>
        
        <h3>Dodaj zawody wędkarskie</h3>
        <form action="zgloszenie.php" method="post">
            <label for="lowisko">Łowisko: </label>
            <input type="number" id="lowisko" name="lowisko"><br>
            
            <label for="data">Data: </label>
            <input type="date" id="data" name="data"><br>
            
            <label for="sedzia">Sędzia: </label>
            <input type="text" id="sedzia" name="sedzia"><br>
            
            <button type="reset">CZYŚĆ</button>
            <button type="submit">DODAJ</button>
        </form>
    </section>
    
    <section id="footer">
        <section id="footer-left">
            <a href="kwerendy.txt">Pobierz</a>
        </section>
        <section id="footer-right">
            <p>Stronę przygotował: 123456</p>
        </section>
    </section>
</body>
</html>
```


#### zgloszenie.php

```php
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
```
#### styl3.css

```css
* {
    font-family: Verdana;
}

#header {
    display: flex;
}

#left, #right {
    background-color: SeaGreen;
    color: white;
    line-height: 150px;
    height: 260px;
    font-size: 160%;
}

#left {
    width: 75%;
}

#right {
    width: 25%;
    text-align: right;
}

#main {
    background-color: MintCream;
    padding: 80px;
}

#footer {
    display: flex;
}

#footer-left, #footer-right {
    background-color: SeaGreen;
    color: white;
    width: 50%;
    height: 70px;
    text-align: center;
}

img {
    margin-right: 35px;
    box-shadow: 15px 15px 10px DimGray;
}

input, button {
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    background-color: MintCream;
    color: SeaGreen;
    padding: 15px;
    line-height: 70px;
}

```
