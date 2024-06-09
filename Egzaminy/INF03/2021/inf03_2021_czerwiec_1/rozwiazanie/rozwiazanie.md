# Rozwiązanie arkusza INF 03 styczeń 2024 - 1

W tym arkuszu trzeba było wykonać grafikę i animację oraz stronę internetową z wskazanym html,css,js.

### Kod na Stronę Internetową

#### index.html

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

#### uslugi.html

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
                <img class="obrazek" src="logo.png" alt="firma it">
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
            <h2>Oferta</h2>
            <ol>
                <li>Outsourcing IT</li>
                <li>Konfiguracja komputerów</li>
                <li>Sprzęt komputerowy</li>
                <li>Strony internetowe</li>
            </ol>
            <hr>
        </main>
        <footer>
            <p>Autor strony: <strong>123456</strong></p>
        </footer>
    </div>
</body>
</html>

```

#### kontakt.html

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
            <h2>Kontakt</h2>
            <form id="kontaktForm" action="#" method="post">
                <table>
                    <tr>
                        <td>Imię: </td>
                        <td><input type="text" id="imie" name="imie"></td>
                    </tr>
                    <tr>
                        <td>Nazwisko: </td>
                        <td><input type="text" id="nazwisko" name="nazwisko"></td>
                    </tr>
                    <tr>
                        <td>E-mail: </td>
                        <td><input type="email" id="email" name="email"></td>
                    </tr>
                    <tr>
                        <td>Zgłoszenie </td>
                        <td><textarea id="zgloszenie" name="zgloszenie" rows="10" cols="40"></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" id="regulamin" name="regulamin"> Zapoznałam/em się z regulaminem</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="reset">Resetuj</button>
                            <button type="button" id="przeslij">Prześlij</button>
                        </td>
                    </tr>
                </table>
            </form>
            <hr>
            <p id="komunikat"></p>
        </main>
        <footer>
            <p>Autor strony: <strong>123456</strong></p>
        </footer>
    </div>


    <script>
        document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('przeslij').addEventListener('click', przetworzFormularz);
    });

    function przetworzFormularz() {
        const imie = document.getElementById('imie').value.trim().toUpperCase();
        const nazwisko = document.getElementById('nazwisko').value.trim().toUpperCase();
        const zgloszenie = document.getElementById('zgloszenie').value.trim();
        const regulamin = document.getElementById('regulamin').checked;
        const komunikat = document.getElementById('komunikat');

        if (!regulamin) {
            komunikat.textContent = "Musisz zapoznać się z regulaminem";
            komunikat.style.color = "red";
        } else {
            komunikat.innerHTML = `${imie} ${nazwisko}<br>Treść Twojej sprawy: ${zgloszenie}`;
            komunikat.style.color = "Navy";
        }
    }

    </script>
</body>
</html>

```
#### styl.css

```css
/* Styl CSS */
body {
    background-color: #EEEEEE;
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo , header .menu {
    background-color: LightBlue;
    height: 100px;
    width: 50%;
    padding: 10px 0;
    box-sizing: border-box;
}





nav.menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

section.banner {
    background-color: #DDDDDD;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

main {
    color: Navy;
    margin: 50px;
    height: 400px;
}

footer {
    text-align: right;
    background-color: LightBlue;
    padding: 10px;
}

button {
    background-color: LightBlue;
    color: Navy;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

nav.menu a {
    color: Navy;
    font-size: 150%;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
    padding: 5px;
}

nav.menu a:hover {
    border: 1px solid Navy;
}

```
