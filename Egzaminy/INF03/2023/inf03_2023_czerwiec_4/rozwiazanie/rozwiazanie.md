# Rozwiązanie arkusza INF 03 czerwiec 2023 - 4

W tym arkuszu trzeba było wykonać grafikę (transformację i duplikat) i sql oraz stronę internetową z wskazanym html,css,php.

### Zapytania SQL do bazy biblioteka

```sql
1. SELECT imie, nazwisko FROM autorzy ORDER BY nazwisko;
2. INSERT INTO `czytelnicy`(`imie`, `nazwisko`, `kod`) VALUES ('Ewa', 'Kowalska', '145321');
3. SELECT tytul FROM ksiazki WHERE id_kategoria = 2;
4. SELECT tytul FROM ksiazki JOIN wypozyczenia ON ksiazki.id = wypozyczenia.id_ksiazka WHERE wypozyczenia.id_czytelnik = 2;
```

### Kod na Stronę Internetową

#### biblioteka.php

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Firma IT</title>
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="logo.png">
</head>
<body>
    <div class="container">
        <header>
            <section class="logo">
                <img src="logo.png" alt="firma it">
            </section>
            <nav class="menu">
                <a href="index.html">Strona Główna</a>
                <a href="uslugi.html">Usługi</a>
                <a href="kontakt.html">Kontakt</a>
            </nav>
        </header>
        <section class="banner">
            <img src="animacja.gif" alt="Usługi informatyczne">
        </section>
        <main>
            <h2>Firma IT</h2>
            <p>Jesteśmy firmą z wieloletnim doświadczeniem w zakresie IT.</p>
            <hr>
        </main>
        <footer>
            <p>Autor strony: <strong>NaukaOdZera</strong></p>
        </footer>
    </div>
</body>
</html>

```

#### style.css

```css
* {
    font-family: Verdana;
}

#banner, footer {
    background-color: #004D40;
    color: white;
    padding: 10px;
    text-align: center;
}

footer >p{
    padding-top: 20px;
    clear: both;
}

#left-panel {
    background-color: #80CBC4;
    color: white;
    height: 500px;
    width: 30%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}

#center-panel {
    background-color: #E0F2F1;
    height: 500px;
    width: 30%;
    float: left;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
}

#right-panel-top, #right-panel-bottom {
    height: 250px;
    width: 40%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}

#right-panel-top {
    background-color: #E0F2F1;
}

#right-panel-bottom {
    background-color: #B2DFDB;
    
}

h3 {
    text-align: center;
}

img {
    padding: 5px;
    height: 150px;
    border: 1px dotted #004D40;
    border-radius: 5px;
}

input[type="text"], input[type="number"] {
    margin: 10px;
}

```
