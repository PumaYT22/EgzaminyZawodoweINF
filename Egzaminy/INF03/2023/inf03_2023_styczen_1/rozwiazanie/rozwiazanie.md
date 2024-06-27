---

# Rozwiązanie arkusza INF 03 styczeń 2023 - 1


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - mieszamy.html
    - cena.html
    - Styl_1.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę  oraz stronę internetową z wskazanym html,css,js.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT cena, pojemnosc FROM farby WHERE kolor = "czerwony";</code></pre>
            Ta kwerenda wybiera kolumny <code>cena</code> i <code>pojemnosc</code> z tabeli <code>farby</code> dla rekordów, gdzie kolumna <code>kolor</code> jest równa "czerwony".
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT kolor, cena/pojemnosc AS "cena jednostkowa" FROM farby;</code></pre>
            Ta kwerenda oblicza cenę jednostkową farby (cena podzielona przez pojemność) dla każdej farby, wybierając kolumny <code>kolor</code> oraz obliczoną kolumnę <code>cena jednostkowa</code>.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT kolor, liczba_puszek FROM malowanie JOIN farby ON malowanie.id_farby = farby.id_farby WHERE id_pomieszczenia = 3;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>malowanie</code> z tabelą <code>farby</code> na podstawie kolumny <code>id_farby</code> w obu tabelach.
                </li>
                <li>
                    Wynik zawiera kolumny <code>kolor</code> i <code>liczba_puszek</code> dla rekordów, gdzie <code>id_pomieszczenia</code> jest równe 3.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>CREATE VIEW pomieszczenie1 AS SELECT id_sciany, id_farby, liczba_puszek FROM malowanie WHERE id_pomieszczenia = 1;</code></pre>
            Ta kwerenda tworzy widok o nazwie <code>pomieszczenie1</code>, który zawiera kolumny <code>id_sciany</code>, <code>id_farby</code> i <code>liczba_puszek</code> z tabeli <code>malowanie</code> dla rekordów, gdzie <code>id_pomieszczenia</code> jest równe 1.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
1. SELECT cena, pojemnosc FROM farby WHERE kolor = "czerwony"; 
2. SELECT kolor, cena/pojemnosc AS "cena jednostkowa" FROM farby;
3. SELECT kolor, liczba_puszek FROM malowanie JOIN farby ON malowanie.id_farby = farby.id_farby WHERE id_pomieszczenia = 3;
4. CREATE VIEW pomieszczenie1 AS SELECT id_sciany, id_farby, liczba_puszek FROM malowanie WHERE id_pomieszczenia = 1;
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="mieszamy.html">
      
### mieszamy.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>malarz</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <!-- Baner -->
    <section class="banner">
        <h1>Malowanie pokoi i biur</h1>
    </section>

    <!-- Bloki główne -->
    <section class="main">
        <!-- Blok lewy -->
        <aside class="left">
            <h2>Menu</h2>
            <ul>
                <li><a href="mieszamy.html">Mieszamy</a></li>
                <li><a href="cena.html">Wyceniamy</a></li>
            </ul>
        </aside>

        <!-- Blok środkowy -->
        <div class="middle">
            <!-- Zawartość podstrony mieszamy.html -->
            <h2>Barwy i ich pochodne</h2>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">Kolory farb</th>
                        <th>Pojemność</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Żółty</td>
                        <td>Blady</td>
                        <td>5l</td>
                    </tr>
                    <tr>
                        <td>Czerwony</td>
                        <td>Sangria</td>
                        <td>4l</td>
                    </tr>
                    <tr>
                        <td>Niebieski</td>
                        <td>Jasny</td>
                        <td>3l</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Blok prawy -->
        <aside class="right">
            <img src="obraz.png" alt="Próbki farb">
        </aside>
    </section>

    <!-- Stopka -->
    <footer>
        <h3>MALARZ</h3>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera baner, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="cena.html">
      
### cena.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>malarz</title>
    <link rel="stylesheet" href="styl_1.css">
    <script>
        function obliczPuszki() {
            // Pobierz wartość z pola edycyjnego
            var powierzchnia = parseFloat(document.getElementById('powierzchnia').value);

            // Oblicz minimalną liczbę puszek
            var iloscPuszek = Math.ceil(powierzchnia / 4); // 1 litr farby na 4m^2

            // Wyświetl wynik
            var wynik = document.getElementById('wynik');
            wynik.textContent = "Liczba potrzebnych puszek: " + iloscPuszek;
        }
    </script>
</head>
<body>
    <!-- Baner -->
    <section class="banner">
        <h1>Malowanie pokoi i biur</h1>
    </section>

    <!-- Bloki główne -->
    <section class="main">
        <!-- Blok lewy -->
        <aside class="left">
            <h2>Menu</h2>
            <ul>
                <li><a href="mieszamy.html">Mieszamy</a></li>
                <li><a href="cena.html">Wyceniamy</a></li>
            </ul>
        </aside>

        <!-- Blok środkowy -->
        <div class="middle">
            <!-- Zawartość podstrony cena.html -->
            <h2>Zapotrzebowanie na farbę</h2>
            <p>Powierzchnia malowania (m<sup>2</sup>): 
                <input type="number" id="powierzchnia" step="any"> m<sup>2</sup>
                <button onclick="obliczPuszki()">Policz</button>
            </p>
            
            <p id="wynik"></p>
        </div>

        <!-- Blok prawy -->
        <aside class="right">
            <img src="obraz.png" alt="Próbki farb">
        </aside>
    </section>

    <!-- Stopka -->
    <footer>
        <h3>MALARZ</h3>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
</body>
</html>
```

**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt JavaScript `obliczPuszki` jest używany do wyświetlania obliczonych danych w elemencie `<p>` o id `wynik`.
    
</CodeGroupItem>   
<CodeGroupItem title="styl_1.css">

### Styl_1.css

```css
* {
    font-family: Cambria, sans-serif;

}

/* Baner i stopka */
.banner, footer {
    background-color: #829EB9;
    color: white;
    text-align: center;
    padding: 10px;
}

/* Bloki lewy i prawy */
.left, .right {
    background-color: #B3C6D9;
    height: 400px;
    width: 25%;
    padding-top: 100px; /* margines wewnętrzny górny */
    float: left;
}


/* Blok środkowy */
.middle {
    background-color: #E0E9F1;
    height: 400px;
    width: 50%;
    text-align: center;
    padding-top: 100px; /* margines wewnętrzny górny */
    float: left;
}

/* Tabela */
table {
    border: 1px solid DimGray;
    width: 80%;
    margin: auto; /* automatyczne marginesy zewnętrzne */
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid DimGray;
}

th, td {
    padding: 10px;
}

/* Interakcje z tabelą */
td:hover {
    background-color: SteelBlue;
    color: white;
}

/* Obraz */
img {
    width: 100%;
    border-radius: 20px;
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

