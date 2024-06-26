# Rozwiązanie arkusza INF 03 styczeń 2023 - 1

W tym arkuszu trzeba było wykonać grafikę  oraz stronę internetową z wskazanym html,css,js.

### Kod na Stronę Internetową

#### mieszamy.html

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

#### cena.html

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

#### styl_1.css

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
