# Rozwiązanie arkusza INF 03 styczeń 2024 - 1

W tym arkuszu trzeba było wykonać grafikę (przeskalować oraz dodać przeźroczystość do obrazu) 
i zapytania sql oraz stronę internetową z wskazanym html,css,js.

### Zapytania SQL

```sql
1. SELECT marka, rocznik FROM samochody WHERE kolor="niebieski";
2. SELECT COUNT(*) FROM samochody WHERE (marka = "Toyota" OR marka = "Opel") AND stan="bardzo dobry";
3. UPDATE samochody SET stan = "dobry" WHERE rocznik < 2004;
4. CREATE USER "jan"@"localhost" IDENTIFIED BY "janKowalski1@";
5. GRANT SELECT, INSERT, UPDATE ON samochody TO "jan"@"localhost";
```

### Kod na Stronę Internetową

#### obliczenia.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Stacja paliw</title>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
    <section id="banner">
        <h1>Całodobowa stacja paliw</h1>
    </section>
    <section id="menu">
        <a href="stacja.html"><img src="home.png" alt="Home"></a>
        <a href="obliczenia.html"><img src="znak.png" alt="Obliczenia"></a>
        <a href="kwerendy.txt">Pobierz dokumenty</a>
    </section>
    <main>
        <section id="left">
            <h2>Orientacyjny koszt paliwa</h2>
            <label for="fuelType">Rodzaj paliwa (1-benzyna, 2-olej napędowy):</label><br>
            <input type="number" id="fuelType" name="fuelType">
            <br>
            <label for="liters">Ile litrów?</label><br>
            <input type="number" id="liters" name="liters">
            <br>
            <button onclick="calculateCost()">OBLICZ</button>
            <p id="result"></p>
        </section>
        <section id="right">
            <img src="samochod.png" alt="samochód">
        </section>
    </main>
   
    <footer>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
    <script>
        function calculateCost() {
            const fuelType = parseInt(document.getElementById('fuelType').value);
            const liters = parseInt(document.getElementById('liters').value);
            let cost = 0;

            if (fuelType === 1) {
                cost = liters * 4;
            } else if (fuelType === 2) {
                cost = liters * 3.5;
            }

            document.getElementById('result').innerText = `koszt paliwa: ${cost} zł`;
        }
    </script>
</body>
</html>
```

#### stacja.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Stacja paliw</title>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
    <section id="banner">
        <h1>Całodobowa stacja paliw</h1>
    </section>
    <section id="menu">
        <a href="stacja.html"><img src="home.png" alt="Home"></a>
        <a href="obliczenia.html"><img src="znak.png" alt="Obliczenia"></a>
        <a href="kwerendy.txt">Pobierz dokumenty</a>
    </section>
    <main>
        <section id="left">
            <h2>Godziny otwarcia stacji</h2>
            <table>
                <tr><th>Dzień</th><th>Od</th><th>Do</th></tr>
                <tr><td>Pn-Sb</td><td>6:00</td><td>24:00</td></tr>
                <tr><td>Nd</td><td>7:00</td><td>24:00</td></tr>
            </table>
        </section>
        <section id="right">
            <img src="samochod.png" alt="samochód">
        </section>
    </main>
    <footer>
        <p>Stronę opracował: NaukaOdZera</p>
    </footer>
</body>
</html>
```

#### styl2.css

```css
body {
    font-family: Cambria, serif;
    text-align: center;
}

#banner, footer {
    background-color: rgb(120, 0, 46);
    color: white;
    padding: 5px;
    font-size: 150%;
}

#menu {
    background-color: rgb(173, 20, 87);
    text-align: left;
}

main{
    display: flex;
}

#left {
    background-color: Snow;
    color: OliveDrab;
    width: 60%;
    height: 322px;
    text-align: left;
}

#left h2{
    text-align: center;
}

#right {
    background-color: rgb(173, 20, 87);
    width: 40%;
    height: 322px;
}

#right img {
    margin: 40px;
    padding: 10px;
}

#right img:hover {
    border: 1px dotted YellowGreen;
}

a {
    padding: 0 50px;
    color: YellowGreen;
}

table, td, th {
    border: 1px solid OliveDrab;
    text-align: center;
}

table {
    width: 90%;
}

```

